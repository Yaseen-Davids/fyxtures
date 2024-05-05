import { useMemo, useState } from "react";
import { useQueries } from "@tanstack/react-query";

import { formatRelative, format, addDays } from "date-fns";
import { enUS } from "date-fns/locale";
import { Fixture } from "./types/Fixture";
import { FootballCard } from "./components/FootballCard";
import { FormulaOneCard } from "./components/FormulaOneCard";
import { formatFixture } from "./helpers/formatFixture";
import { Toggle } from "./components/Toggle";


const formatRelativeLocale = {
  other: "EEEE, dd MMM yyyy",
  lastWeek: "'last week' dd MMM yyyy",
  yesterday: "'yesterday' dd MMM yyyy",
  today: "'today', dd MMM yyyy",
  tomorrow: "'tomorrow', dd MMM yyyy",
  nextWeek: "EEEE, dd MMM yyy",
};

function App() {
  const [dateFrom, setDateFrom] = useState(format(new Date(), "yyyy-MM-dd"));
  const [dateTo, setDateTo] = useState(
    format(addDays(new Date(), 31), "yyyy-MM-dd")
  );
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [teams, setTeams] = useState([40, 33]);
  const [season, setSeason] = useState(2023);

  const queries = useQueries({
    queries: [
      {
        queryKey: ["formulaone", timezone],
        queryFn: () =>
          fetch(
            `https://v1.formula-1.api-sports.io/races?season=2024&timezone=${timezone}&next=${20}`,
            {
              headers: {
                "x-apisports-key": "dd5d7ca3aa852dd863f98080370ae4b4",
              },
            }
          ).then((res) => res.json()),
      },
      ...teams.map((team) => ({
        queryKey: ["fixtures", dateFrom, dateTo, timezone, team, season],
        queryFn: () =>
          fetch(
            `https://v3.football.api-sports.io/fixtures?from=${dateFrom}&to=${dateTo}&timezone=${timezone}&team=${team}&season=${season}`,
            {
              headers: {
                "x-apisports-key": "dd5d7ca3aa852dd863f98080370ae4b4",
              },
            }
          ).then((res) => res.json()),
      })),
    ],
  });

  // TODO: cleanup
  const data = useMemo(
    () =>
      queries.reduce((arr, q) => {
        if (!q.isLoading && q.data) {
          const { response } = q.data;
          arr.push(
            ...response
              .map((row: any) => formatFixture(row))
              .filter((row: any) => row)
          );
        }
        return arr;
      }, [] as Fixture[]),
    queries
  );

  const isLoading = useMemo(
    () => queries.find((q) => q.isLoading)?.isLoading,
    [queries]
  );

  const grouped: { [date: string]: Fixture[] } = useMemo(
    () =>
      isLoading
        ? ({} as { [date: string]: Fixture[] })
        : data.reduce((obj: { [date: string]: Fixture[] }, row: Fixture) => {
            const formatDate = format(row.date, "yyyy-MM-dd");
            obj[formatDate] = [...(obj[formatDate] || []), row];
            return obj;
          }, {}),
    [data, isLoading]
  );

  const formatDate = (date: string) =>
    formatRelative(date, new Date(), {
      locale: {
        ...enUS,
        formatRelative: (t) => formatRelativeLocale[t],
      },
    });

  if (isLoading) return "Loading...";

  return (
    <div className="p-4 gap-8 md:gap-10 grid grid-cols-[1fr_5fr_1fr]">
      <div className="p-4">
        <input type="button" value="search" />
        <Toggle/>
      </div>
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
              .map((event: Fixture) =>
                event.sport === "football" ? (
                  <FootballCard key={event.id} event={event} />
                ) : (
                  <FormulaOneCard key={event.id} event={event} />
                )
              )}
          </div>
        ))}
        </div>
        <div> something else</div>
    </div>
  );
}

export default App;
