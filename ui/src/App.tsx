import { useMemo, useState } from "react";

import { formatRelative, format } from "date-fns";
import { enUS } from "date-fns/locale";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { Fixture } from "./types/Fixture";
import { FootballCard } from "./components/FootballCard";
import { FormulaOneCard } from "./components/FormulaOneCard";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { NextEvent } from "./components/NextEvent";
import { ComboBox } from "./components/ComboBox";
import { Toggle } from "./components/Toggle";

const formatRelativeLocale = {
  other: "EEEE, dd MMM yyyy",
  lastWeek: "'last week' dd MMM yyyy",
  yesterday: "'yesterday' dd MMM yyyy",
  today: "'today', dd MMM yyyy",
  tomorrow: "'tomorrow', dd MMM yyyy",
  nextWeek: "EEEE, dd MMM yyy",
};

const formatDate = (date: string) =>
  formatRelative(date, new Date(), {
    locale: {
      ...enUS,
      formatRelative: (t) => formatRelativeLocale[t],
    },
  });

function App() {
  const [dateFrom] = useState(format(new Date(), "yyyy-MM-dd"));
  const [timezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [teams, setSelected] = useState<number[]>([10, 12]);

  // TODO: change this to an object for the different sports
  const [includeFOne, toggleIncludeFOne] = useState(true);

  const { data, isLoading } = useQuery(
    ["getFixtures", teams, dateFrom, timezone, includeFOne],
    () =>
      axios.get(
        `/api/fixtures?startDate=${dateFrom}&teams=${teams.join(
          ","
        )}&includeFOne=${includeFOne}`
      )
  );

  const { data: teamsData, isLoading: isLoadingTeams } = useQuery(
    ["getTeams"],
    () => axios.get(`/api/football/teams`)
  );

  // group data by date
  const grouped: { [date: string]: Fixture[] } = useMemo(
    () =>
      isLoading
        ? ({} as { [date: string]: Fixture[] })
        : (data?.data || []).reduce(
            (obj: { [date: string]: Fixture[] }, row: Fixture) => {
              const formatDate = format(row.date, "yyyy-MM-dd");
              obj[formatDate] = [...(obj[formatDate] || []), row];
              return obj;
            },
            {}
          ),
    [data, isLoading]
  );

  // TODO: Cleanup
  return (
    <div className="grid grid-rows-[1fr] lg:grid-cols-[1fr_2fr_1fr] lg:grid-rows-[1fr] p-4 gap-4">
      <div className="flex flex-col gap-3">
        <div className="bg-gray-800 rounded p-1 py-2 pl-2">
          <h3 className="font-bold text-3xl text-gray-300">Fyxtures</h3>
          <p className="text-xs text-gray-400">
            One place for all your sporting fixtures
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="bg-gray-900 p-2 rounded w-full h-full">
            <ComboBox
              loading={isLoadingTeams}
              data={teamsData?.data.teams || []}
              selected={teams}
              setSelected={setSelected}
            />
          </div>
          <div className="bg-gray-900 p-2 rounded w-full h-10">
            <Toggle
              enabled={includeFOne}
              setEnabled={toggleIncludeFOne}
              label="Show Formula One"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-10">
        <NextEvent data={data?.data || []} includeFOne={includeFOne} />
        <div>
          <p className="font-bold text-gray-200 capitalize text-lg sm:text-lg">
            Calendar
          </p>
          <div className="flex flex-col items-center gap-4 md:gap-10">
            {isLoading ? (
              <div className="w-full h-full flex justify-center p-4">
                <LoadingSpinner />
              </div>
            ) : (
              Object.keys(grouped)
                .sort()
                .map((date) => (
                  <div key={date} className="flex flex-col gap-2 w-full">
                    <p className="font-bold text-gray-200 capitalize text-sm sm:text-lg">
                      {formatDate(date)}
                    </p>
                    {grouped[date]
                      .sort(
                        (a, b) =>
                          new Date(a.date).valueOf() -
                          new Date(b.date).valueOf()
                      )
                      .map((event: Fixture, index: number) =>
                        event.sport === "football" ? (
                          <FootballCard
                            key={`${event.id}-${index}`}
                            event={event}
                          />
                        ) : (
                          <FormulaOneCard
                            key={`${event.id}-${index}`}
                            event={event}
                          />
                        )
                      )}
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-800 rounded"></div>
    </div>
  );
}

export default App;
