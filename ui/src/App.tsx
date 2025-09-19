import { useMemo, useState } from "react";

import axios from "axios";
import { enUS } from "date-fns/locale";
import { useQuery } from "@tanstack/react-query";
import { formatRelative, format } from "date-fns";

import { Fixture } from "./types/Fixture";
import { Card } from "./components/EventCard";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { NextEvent } from "./components/NextEvent";

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

  const { data, isLoading } = useQuery(
    ["getFixtures", dateFrom, timezone],
    () => axios.post(`/api/fixtures`, { dateFrom })
  );

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

  return (
    <div className="grid grid-rows-[1fr] lg:grid-cols-[1fr_2fr_1fr] lg:grid-rows-[1fr]">
      <div className="flex flex-col">
        <div className="py-2 pl-4 pr-4">
          <h3 className="font-bold text-3xl text-gray-300">Fyxtures</h3>
          <p className="text-xs text-gray-400">
            One place for all your sporting fixtures
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-10 p-4 pt-0">
        <NextEvent data={data?.data || []} />
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
                      .map((event: Fixture, index: number) => (
                        <Card key={`${event.id}-${index}`} event={event} />
                      ))}
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
      <div className="rounded"></div>
    </div>
  );
}

export default App;
