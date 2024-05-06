import React, { FC } from "react";

import { format } from "date-fns";
import { Fixture, FixtureTeam } from "../types/Fixture";

type FootballCardProps = {
  event: Fixture;
};

export const FootballCard: FC<FootballCardProps> = ({ event }) => {
  const { id, date, teams, league } = event;

  return (
    <div
      className="flex flex-col items-center bg-gray-800 rounded p-4 h-full gap-1 text-xs md:text-sm relative hover:bg-gray-700 cursor-pointer"
      // onClick={() => router.push(`/football/${id}`)}
    >
      <div className="grid grid-cols-[1fr_50px_1fr] items-center gap-5">
        <FootballCardDetail home teams={teams![0]} />
        <p className="border rounded p-2 border-slate-500 justify-self-center">
          {format(date, "kk:mm")}
        </p>
        <FootballCardDetail teams={teams![1]} />
      </div>
      <div className="w-full text-center">
        <p className="text-xs text-gray-500 leading-0">
          <span className="text-gray-400">{league!.name}</span>
          {/* {league!.name} */}
        </p>
      </div>
      <div className="absolute right-2 bottom-2 max-w-6 sm:max-w-8">
        {/* <image src={league!.logo} /> */}
      </div>
    </div>
  );
};

type FootballCardDetailProps = {
  home?: boolean;
  teams: FixtureTeam;
};

const FootballCardDetail: FC<FootballCardDetailProps> = ({ home, teams }) => {
  return home ? (
    <div className="grid grid-cols-[1fr_30px] gap-1 items-center text-right font-bold">
      <p>{teams.name}</p>
      <div>
        {/* <Image
          alt="Home team logo"
          src={teams["home"]["logo"]}
          width={30}
          height={30}
        /> */}
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-[30px_1fr] gap-1 items-center text-left font-bold">
      <div>
        {/* <Image
          alt="Home team logo"
          src={teams["away"]["logo"]}
          width={30}
          height={30}
        /> */}
      </div>
      <p>{teams.name}</p>
    </div>
  );
};
