"use client";

import React, { FC, useState } from "react";
import { PreviousGames } from "./previousgames";

type FootballDetailProps = {
  eventId: number;
};

export const FootballDetail: FC<FootballDetailProps> = ({ eventId }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (tab: number) => {
    setActiveTab(tab);
  };

  console.log("Client eventId", eventId);

  return (
    <div>
      <div className="w-full grid grid-cols-[1fr_1fr]">
        <div
          className={`transition ease-in-out text-center ${
            activeTab === 0 ? "bg-slate-600" : "bg-slate-800"
          } p-2 rounded-l-lg hover:bg-slate-700 cursor-pointer`}
          onClick={() => handleChangeTab(0)}
        >
          <p>Previous Games</p>
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
      <div>{activeTab === 0 ? <PreviousGames eventId={eventId} /> : <></>}</div>
    </div>
  );
};
