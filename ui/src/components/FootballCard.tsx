import { FC } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

import { Fixture, FixtureTeam } from "../types/Fixture";
import { FootballImage } from "./FootballImage";
import {
  CalendarDaysIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";

type FootballCardProps = {
  completed?: boolean;
  event: Fixture;
};

export const FootballCard: FC<FootballCardProps> = ({ event, completed }) => {
  const { id, date, teams, league, ground, clock } = event;

  return (
    <Link to={`/football/${id}`}>
      <div className="flex flex-col items-center bg-gray-800 rounded p-4 h-full gap-2 text-xs md:text-sm relative hover:bg-gray-700 cursor-pointer">
        <div className="text-xs flex flex-row gap-4 text-gray-400">
          {completed && (
            <div className="flex flex-row gap-1">
              <CalendarDaysIcon className="w-3" />
              <p>{format(date, "EEEE, dd MMM yyyy")}</p>
            </div>
          )}
          <div className="flex flex-row gap-1">
            <GlobeAsiaAustraliaIcon className="w-3" />
            <p className="">{ground?.name}</p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_50px_1fr] items-center gap-5">
          <FootballCardDetail home teams={teams![0]} />
          {completed || clock ? (
            <p className="border rounded p-2 border-slate-500 justify-self-center text-nowrap">
              {teams![0].score} - {teams![1].score}
            </p>
          ) : (
            <p className="border rounded p-2 border-slate-500 justify-self-center">
              {format(date, "HH:mm")}
            </p>
          )}
          <FootballCardDetail teams={teams![1]} />
        </div>
        <div className="w-full text-center">
          <p className="text-xs text-gray-500 leading-0">
            <span className="text-gray-400">{league!.name}</span>
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
};

const FootballCardDetail: FC<FootballCardDetailProps> = ({ home, teams }) => {
  return home ? (
    <div className="grid grid-cols-[1fr_30px] gap-2 items-center text-right font-bold">
      <p>{teams.shortName}</p>
      <div>
        <FootballImage teamId={teams.id} />
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-[30px_1fr] gap-2 items-center text-left font-bold">
      <div>
        <FootballImage teamId={teams.id} />
      </div>
      <p>{teams.shortName}</p>
    </div>
  );
};
