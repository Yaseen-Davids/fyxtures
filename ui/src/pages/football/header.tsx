import { FC } from "react";
import { format } from "date-fns";
import { CalendarIcon, ClockIcon, MapIcon } from "@heroicons/react/24/solid";

import { FootballEvent } from "../../types/Football-Event";
import { FootballImage } from "../../components/FootballImage";
import { Teams } from "../../types/Football-Event";

type HeaderProps = {
  fixture: FootballEvent;
};

export const Header: FC<HeaderProps> = ({ fixture }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center gap-6 text-xs text-gray-200">
        <div className="flex flex-row gap-1 items-center">
          <CalendarIcon className="w-3" />
          <p>{format(new Date(fixture.kickoff.millis!), "MMM, dd MMM yyyy")}</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <ClockIcon className="w-3" />
          <p>Kick Off: {format(new Date(fixture.kickoff.millis!), "kk:mm")}</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <MapIcon className="w-3" />
          <p>
            {fixture.ground.name}, {fixture.ground.city}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1fr_2fr] font-bold rounded bg-slate-800 p-2">
        <HeaderTeam team={fixture.teams[0]} />
        <div className="text-center">
          <p className="text-4xl md:text-7xl">
            {format(new Date(fixture.kickoff.millis!), "kk:mm")}
          </p>
        </div>
        <HeaderTeam right team={fixture.teams[1]} />
      </div>
    </div>
  );
};

const HeaderTeam: FC<{ team: Teams; right?: boolean }> = ({ team, right }) => {
  return (
    <div
      className={`flex items-center gap-6 ${
        right ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-10 h-10 md:w-20 md:h-20">
        <FootballImage teamId={team.team.id} />
      </div>
      <p className="text-2xl md:text-3xl">{team.team.shortName}</p>
    </div>
  );
};
