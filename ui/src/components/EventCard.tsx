import { FC, useMemo } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

import { Fixture } from "../types/Fixture";
import { CardImage } from "./CardImage";
import {
  CalendarDaysIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/solid";

type CardProps = {
  event: Fixture;
};

const image: Record<string, string> = {
  rugby: "/rugby-ball.png",
  football: "/soccer-ball.png",
  formulaone: "/formulaone.png",
};

export const Card: FC<CardProps> = ({ event }) => {
  const { date, left, right, tournament, venue, type } = event;

  const completed = useMemo(() => new Date() >= new Date(date), [date]);

  return (
    <Link to={"#"}>
      <div className="flex flex-col items-center bg-gray-800 rounded p-1 sm:p-2 h-full gap-1 sm:gap-2 relative hover:bg-gray-700 cursor-pointer text-xs sm:text-sm">
        <div className="flex flex-row gap-4 text-gray-400 text-xxs sm:text-sm">
          {completed && (
            <div className="flex flex-row gap-1">
              <CalendarDaysIcon className="w-3" />
              <p>{format(date, "EEEE, dd MMM yyyy")}</p>
            </div>
          )}
          <div className="flex flex-row gap-1">
            <GlobeAsiaAustraliaIcon className="w-3" />
            <p>{venue}</p>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_50px_1fr] items-center gap-2 sm:gap-5">
          <CardDetail home team={left} />
          <p className="border rounded p-1 sm:p-2 border-slate-500 justify-self-center">
            {format(date, "HH:mm")}
          </p>
          <CardDetail team={right} />
        </div>
        <div className="w-full text-center text-xxs sm:text-sm">
          <p className="text-gray-400 leading-0">
            <span>{tournament}</span>
          </p>
        </div>
        <div className="absolute right-2 bottom-2 max-w-4">
          <img alt="Image of sports" src={image[type]} />
        </div>
        {/* <div className="absolute right-3 top-2 text-teal-300 animate-pulse">
          <p>{clock?.label}</p>
        </div> */}
      </div>
    </Link>
  );
};

type CardDetailProps = {
  home?: boolean;
  team: { display: string; icon: string };
};

const CardDetail: FC<CardDetailProps> = ({ home, team }) => {
  return home ? (
    <div className="grid grid-cols-[1fr_25px] sm:grid-cols-[1fr_30px] gap-3 items-center font-bold">
      <p className="text-right">{team.display}</p>
      <div>
        <CardImage url={team.icon} />
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-[25px_1fr] sm:grid-cols-[30px_1fr] gap-3 items-center font-bold">
      <div>
        <CardImage url={team.icon} />
      </div>
      <p className="text-left">{team.display}</p>
    </div>
  );
};
