import { useMemo, useState } from "react";

import { formatRelative, format } from "date-fns";
import { enUS } from "date-fns/locale";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { Fixture } from "./types/Fixture";
import { FootballCard } from "./components/FootballCard";
import { FormulaOneCard } from "./components/FormulaOneCard";
import { LoadingSpinner } from "./components/LoadingSpinner";

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
  const [dateFrom, setDateFrom] = useState(format(new Date(), "yyyy-MM-dd"));
  // const [dateTo, setDateTo] = useState(
  //   format(addDays(new Date(), 31), "yyyy-MM-dd")
  // );
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [teams, setTeams] = useState([49, 10, 12, 67, 11]);

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

  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center p-4">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-8 md:gap-10 p-4">
      {Object.keys(grouped)
        .sort()
        .map((date) => (
          <div key={date} className="flex flex-col gap-2 w-full">
            <p className="font-bold text-gray-200 capitalize">
              {formatDate(date)}
            </p>
            {grouped[date]
              .sort(
                (a, b) =>
                  new Date(a.date).valueOf() - new Date(b.date).valueOf()
              )
              .map((event: Fixture, index: number) =>
                event.sport === "football" ? (
                  <FootballCard key={`${event.id}-${index}`} event={event} />
                ) : (
                  <FormulaOneCard key={`${event.id}-${index}`} event={event} />
                )
              )}
          </div>
        ))}
    </div>
  );
}

export default App;
