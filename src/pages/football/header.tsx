import React, { FC } from "react";

import { format } from "date-fns";
import Image from "next/image";

import { CalendarIcon, ClockIcon, MapIcon } from "@heroicons/react/24/solid";
import { formatFootballName } from "@/app/helpers/formatFootballName";
import { Match } from "@/app/types/Match";

type HeaderProps = {
  eventId: number;
};

export const getFixtureById = async (eventId: number): Promise<Match> => {
  const timezone = "Africa/Harare";

  try {
    const [fixture] = await Promise.all([
      fetch(
        `https://v3.football.api-sports.io/fixtures?&timezone=${timezone}&id=${eventId}`,
        {
          next: { revalidate: 3600 },
          headers: {
            "x-apisports-key": process.env.SPORTS_API_KEY || "",
          },
        }
      ),
    ]);

    const { response } = await fixture.json();
    return response[0];
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch data");
  }
};

export const Header: FC<HeaderProps> = async ({ eventId }) => {
  const { fixture, teams } = await getFixtureById(eventId);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center gap-6 text-xxs md:text-xs text-gray-200">
        <div className="flex flex-row gap-1 items-center">
          <CalendarIcon className="w-2 md:w-4 md:h-4" />
          <p>{format(fixture.date, "MMM, dd MMM yyyy")}</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <ClockIcon className="w-2 md:w-4 md:h-4" />
          <p>Kick Off: {format(fixture.date, "kk:mm")}</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <MapIcon className="w-2 md:w-4 md:h-4" />
          <p>
            {fixture.venue.name}, {fixture.venue.city}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1fr_2fr] font-bold rounded bg-slate-800 p-2">
        <div className="flex flex-row items-center gap-2 justify-start">
          <div className="gap-4 w-6 h-6 md:w-20 md:h-20">
            <Image
              alt="Home team logo"
              src={teams["home"]["logo"]}
              width={100}
              height={100}
            />
          </div>
          <p className="text-md md:text-3xl">
            {formatFootballName(teams["home"]["name"])}
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl md:text-7xl">
            {format(fixture.date, "kk:mm")}
          </p>
        </div>
        <div className="flex flex-row items-center justify-end gap-2">
          <p className="text-md md:text-3xl">
            {formatFootballName(teams["away"]["name"])}
          </p>
          <div className="gap-4 w-6 h-6 md:w-20 md:h-20">
            <Image
              alt="Away team logo"
              src={teams["away"]["logo"]}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
