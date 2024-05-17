import { FC } from "react";

import { format } from "date-fns";
import { Fixture } from "../types/Fixture";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

type FormulaOneCardProps = {
  event: Fixture;
};

export const FormulaOneCard: FC<FormulaOneCardProps> = ({ event }) => {
  const { date, type, circuit, raceName, competition } = event;

  return (
    <Link to={`/formula-one/${circuit?.id}?type=${type}`}>
      <div className="flex flex-col items-center bg-gray-800 rounded p-2 sm:p-4 h-full gap-2 sm:gap-2 relative hover:bg-gray-700 cursor-pointer text-xs sm:text-sm">
        <div className="flex flex-row gap-1 text-center text-gray-400 text-xxs sm:text-sm">
          <GlobeAsiaAustraliaIcon className="w-3" />
          <p className="text-gray-400 leading-0">{circuit!.name}</p>
        </div>
        <div className="grid grid-cols-[1fr_50px_1fr] items-center gap-2 sm:gap-5">
          <div className="grid grid-cols-[1fr_25px] sm:grid-cols-[1fr_30px] gap-3 items-center">
            <p className="font-bold text-right">{raceName}</p>
            <div className="w-full">
              <img
                className="w-6 sm:w-full"
                alt="Track"
                src={`/formula-one/${circuit!.id}-flag.png`}
              />
            </div>
          </div>
          <p className="border rounded p-1 sm:p-2 border-slate-500 justify-self-center text-nowrap">
            {format(date, "kk:mm")}
          </p>
          <div className="grid grid-cols-[25px_1fr] sm:grid-cols-[30px_1fr gap-3 items-center">
            <div className="w-full">
              <img
                className="w-6 sm:w-full"
                alt="Track"
                src={`/formula-one/${circuit!.id}.png`}
              />
            </div>
            <p className="font-bold text-left">{type}</p>
          </div>
        </div>
        <div className="w-full text-center text-xxs sm:text-sm">
          <p className="text-gray-500 leading-0">
            <span className="text-gray-400">{competition}</span>
          </p>
        </div>
        <div className="absolute right-2 bottom-2 max-w-6">
          <img alt="F1 Logo" src="/F1-Logo.png" />
        </div>
      </div>
    </Link>
  );
};
