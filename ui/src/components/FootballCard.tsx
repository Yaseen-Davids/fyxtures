import { FC, useMemo } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

import { Fixture, FixtureTeam } from "../types/Fixture";
import { FootballImage } from "./FootballImage";
import {
  CalendarDaysIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";

type FootballCardProps = {
  event: Fixture;
};

export const FootballCard: FC<FootballCardProps> = ({ event }) => {
  const { id, date, teams, league, ground, clock, sport } = event;

  const completed = useMemo(() => new Date() >= new Date(date), [date]);

  const leagueType = useMemo(
    () => (sport === "football" ? "premier-league" : "uefa"),
    [sport]
  );

  return (
    <Link to={sport === "football-uefa" ? "#" : `/football/${id}`}>
      <div className="flex flex-col items-center bg-gray-800 rounded p-2 sm:p-4 h-full gap-2 sm:gap-2 relative hover:bg-gray-700 cursor-pointer text-xs sm:text-sm">
        <div className="flex flex-row gap-4 text-gray-400 text-xxs sm:text-sm">
          {completed && (
            <div className="flex flex-row gap-1">
              <CalendarDaysIcon className="w-3" />
              <p>{format(date, "EEEE, dd MMM yyyy")}</p>
            </div>
          )}
          <div className="flex flex-row gap-1">
            <GlobeAsiaAustraliaIcon className="w-3" />
            <p>{ground?.name}</p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_50px_1fr] items-center gap-2 sm:gap-5">
          <FootballCardDetail home teams={teams![0]} sport={leagueType} />
          {completed || clock ? (
            <p className="border rounded p-1 sm:p-2 border-slate-500 justify-self-center text-nowrap">
              {teams![0].score} - {teams![1].score}
            </p>
          ) : (
            <p className="border rounded p-1 sm:p-2 border-slate-500 justify-self-center">
              {format(date, "HH:mm")}
            </p>
          )}
          <FootballCardDetail teams={teams![1]} sport={leagueType} />
        </div>
        <div className="w-full text-center text-xxs sm:text-sm">
          <p className="text-gray-400 leading-0">
            <span>{league!.name}</span>
          </p>
        </div>
        <div className="absolute right-2 bottom-2 max-w-4">
          <img alt="Image of soccer ball" src={"/soccer-ball.png"} />
        </div>
        <div className="absolute right-3 top-2 text-teal-300">
          <p>{clock?.label}</p>
        </div>
      </div>
    </Link>
  );
};

type FootballCardDetailProps = {
  home?: boolean;
  teams: FixtureTeam;
  sport: string;
};

const FootballCardDetail: FC<FootballCardDetailProps> = ({
  home,
  teams,
  sport,
}) => {
  return home ? (
    <div className="grid grid-cols-[1fr_25px] sm:grid-cols-[1fr_30px] gap-3 items-center font-bold">
      <p className="text-right">{teams.shortName}</p>
      <div>
        <FootballImage teamId={teams.id} sport={sport} />
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-[25px_1fr] sm:grid-cols-[30px_1fr] gap-3 items-center font-bold">
      <div>
        <FootballImage teamId={teams.id} sport={sport} />
      </div>
      <p className="text-left">{teams.shortName}</p>
    </div>
  );
};
