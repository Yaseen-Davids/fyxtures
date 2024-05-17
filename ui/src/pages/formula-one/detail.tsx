import { FC, useState } from "react";
import { RaceWinners } from "./results-race";
import { PreviousRace } from "./previous-race";

type FormulaOneDetailProps = {
  raceId: string;
};

export const FormulaOneDetail: FC<FormulaOneDetailProps> = ({ raceId }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="w-full grid grid-cols-[1fr_1fr] text-xs sm:text-sm md:text-lg">
        <div
          className={`transition ease-in-out text-center ${
            activeTab === 0 ? "bg-slate-600" : "bg-slate-800"
          } p-2 rounded-l-lg hover:bg-slate-700 cursor-pointer`}
          onClick={() => handleChangeTab(0)}
        >
          <p>Results</p>
        </div>
        <div
          className={`transition ease-in-out text-center ${
            activeTab === 1 ? "bg-slate-600" : "bg-slate-800"
          } p-2 rounded-r-lg hover:bg-slate-700 cursor-pointer`}
          onClick={() => handleChangeTab(1)}
        >
          <p>Last Race Results</p>
        </div>
      </div>
      <div>
        {activeTab === 0 ? (
          <RaceWinners raceId={raceId} />
        ) : (
          <PreviousRace raceId={raceId} />
        )}
      </div>
    </div>
  );
};
