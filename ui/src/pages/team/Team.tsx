import { useMemo } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { enUS } from "date-fns/locale";
import { useQuery } from "@tanstack/react-query";
import { formatRelative, format } from "date-fns";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Card } from "../../components/EventCard";
import { Fixture } from "@/types/Fixture";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

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

export const Team = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery<{ data: Fixture[] }, Error>(
    ["getFixturesByTeamId", teamId],
    () => axios.get(`/api/team/${teamId}/fixtures`),
  );

  const grouped: { [date: string]: Fixture[] } = useMemo(
    () =>
      isLoading
        ? ({} as { [date: string]: Fixture[] })
        : (data?.data || []).reduce((obj: { [date: string]: Fixture[] }, row: Fixture) => {
            const formatDate = format(row.date, "yyyy-MM-dd");
            obj[formatDate] = [...(obj[formatDate] || []), row];
            return obj;
          }, {}),
    [data, isLoading],
  );

  const currentTeam = useMemo(() => {
    const event = data?.data?.find(
      (event: Fixture) => event.left.id === teamId || event.right.id === teamId,
    );
    if (event && event.right.id === teamId) {
      return event.right;
    }
    return event?.left;
  }, [data?.data, teamId]);

  return (
    <div className="grid grid-rows-[1fr] lg:grid-cols-[1fr_2fr_1fr] lg:grid-rows-[1fr]">
      <div className="flex flex-col">
        <ChevronLeftIcon className="w-6 h-6 mt-4 ml-4" onClick={() => navigate(-1)} />

        <div className="flex flex-row items-center gap-2 p-4">
          <img src={currentTeam?.icon} alt={currentTeam?.display} className="w-10 h-10" />
          <h3 className="font-bold text-3xl text-gray-300">{currentTeam?.display}</h3>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-10 p-4">
        <div>
          <p className="font-bold text-gray-200 capitalize text-lg sm:text-lg">Upcoming Fixtures</p>
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
                      .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf())
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
};
