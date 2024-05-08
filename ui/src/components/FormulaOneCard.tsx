import { FC } from "react";

import { format } from "date-fns";
import { Fixture } from "../types/Fixture";

type FormulaOneCardProps = {
  event: Fixture;
};

export const FormulaOneCard: FC<FormulaOneCardProps> = ({ event }) => {
  const { date, competition, type, circuit } = event;

  return (
    <div className="flex flex-col items-center bg-gray-800 rounded p-4 h-full gap-1 text-xs md:text-sm relative hover:bg-gray-700 cursor-pointer">
      <div className="grid grid-cols-[1fr_50px_1fr] items-center gap-5">
        <div className="grid grid-cols-[1fr_30px] gap-2 items-center text-right">
          <p className="font-bold">{competition}</p>
          <div>
            <img
              alt="Track"
              src={`http://localhost:4000/formula-one/${circuit!.id}-flag.png`}
            />
          </div>
        </div>
        <p className="border rounded p-2 border-slate-500 justify-self-center">
          {format(date, "kk:mm")}
        </p>
        <div className="grid grid-cols-[30px_1fr] gap-2 items-center text-left">
          <div>
            <img
              alt="Track"
              src={`http://localhost:4000/formula-one/${circuit!.id}.png`}
            />
          </div>
          <p className="font-bold">{type}</p>
        </div>
      </div>
      <div className="w-full text-center">
        <p className="text-xs text-gray-400 leading-0">{circuit!.name}</p>
      </div>
      <div className="absolute right-2 bottom-2 max-w-6 sm:max-w-8">
        <img alt="F1 Logo" src="/F1-Logo.png" />
      </div>
    </div>
  );
};
