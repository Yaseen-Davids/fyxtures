import { FC, useState } from "react";
import { HeadToHead } from "./headtohead";

type FootballDetailProps = {
  eventId: number;
  teamsId: number[];
};

export const FootballDetail: FC<FootballDetailProps> = ({
  eventId,
  teamsId,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="w-full grid grid-cols-[1fr_1fr]">
        <div
          className={`transition ease-in-out text-center ${
            activeTab === 0 ? "bg-slate-600" : "bg-slate-800"
          } p-2 rounded-l-lg hover:bg-slate-700 cursor-pointer`}
          onClick={() => handleChangeTab(0)}
        >
          <p>Head to Head</p>
        </div>
        <div
          className={`transition ease-in-out text-center ${
            activeTab === 1 ? "bg-slate-600" : "bg-slate-800"
          } p-2 rounded-r-lg hover:bg-slate-700 cursor-pointer`}
          onClick={() => handleChangeTab(1)}
        >
          <p>Predictions</p>
        </div>
      </div>
      <div>{activeTab === 0 ? <HeadToHead teamsId={teamsId} /> : <></>}</div>
    </div>
  );
};
