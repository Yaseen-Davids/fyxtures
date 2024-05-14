import { FC } from "react";

import { format } from "date-fns";
import { Fixture } from "../types/Fixture";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";

type FormulaOneCardProps = {
  event: Fixture;
};

export const FormulaOneCard: FC<FormulaOneCardProps> = ({ event }) => {
  const { date, type, circuit, raceName, competition } = event;

  return (
    <div className="flex flex-col items-center bg-gray-800 rounded p-4 h-full gap-2 text-xs md:text-sm relative hover:bg-gray-700 cursor-pointer">
      <div className="flex flex-row gap-1 text-center text-gray-400">
        <GlobeAsiaAustraliaIcon className="w-3" />
        <p className="text-xs text-gray-400 leading-0">{circuit!.name}</p>
      </div>
      <div className="grid grid-cols-[1fr_50px_1fr] items-center gap-5">
        <div className="grid grid-cols-[1fr_30px] gap-2 items-center text-right">
          <p className="font-bold">{raceName}</p>
          <div>
            <img alt="Track" src={`/formula-one/${circuit!.id}-flag.png`} />
          </div>
        </div>
        <p className="border rounded p-2 border-slate-500 justify-self-center">
          {format(date, "kk:mm")}
        </p>
        <div className="grid grid-cols-[30px_1fr] gap-2 items-center text-left">
          <div>
            <img alt="Track" src={`/formula-one/${circuit!.id}.png`} />
          </div>
          <p className="font-bold">{type}</p>
        </div>
      </div>
      <div className="w-full text-center">
        <p className="text-xs text-gray-500 leading-0">
          <span className="text-gray-400">{competition}</span>
        </p>
      </div>
      <div className="absolute right-2 bottom-2 max-w-6">
        <img alt="F1 Logo" src="/F1-Logo.png" />
      </div>
    </div>
  );
};
