import { FC, useMemo } from "react";
import { format } from "date-fns";
import { CalendarIcon, ClockIcon, MapIcon } from "@heroicons/react/24/solid";

import { FormulaOneRace } from "../../types/formula-one";

type HeaderProps = {
  race: FormulaOneRace;
  raceType: string;
};

const typeFormat: { [index: string]: string } = {
  "1st Practice": "FirstPractice",
  "2nd Practice": "SecondPractice",
  "3rd Practice": "ThirdPractice",
  Qualifying: "Qualifying",
};

export const Header: FC<HeaderProps> = ({ race, raceType }) => {
  const time = useMemo(
    () =>
      typeFormat[raceType]
        ? `${(race as any)[typeFormat[raceType]].date} ${
            (race as any)[typeFormat[raceType]].time
          }`
        : `${race.date} ${race.time}`,
    [race, raceType]
  );

  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <div className="flex justify-center gap-2 md:gap-6 text-xxs md:text-sm text-gray-200">
        <div className="flex flex-row gap-1 items-center">
          <CalendarIcon className="w-3" />
          <p>{format(new Date(time), "MMM, dd MMM yyyy")}</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <ClockIcon className="w-3" />
          <p>Start time: {format(new Date(time), "kk:mm")}</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <MapIcon className="w-3" />
          <p>
            {race.Circuit.circuitName}, {race.Circuit.Location.country}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[2fr_1fr_2fr] font-bold rounded bg-slate-800 p-2">
        <HeaderTeam
          name={`${race.Circuit.Location.country} GP`}
          circuitId={race.Circuit.circuitId}
        />
        <HeaderTime time={time} />
        <HeaderTeam
          right
          track
          name={raceType}
          circuitId={race.Circuit.circuitId}
        />
      </div>
    </div>
  );
};

const HeaderTime: FC<{ time: string | number }> = ({ time }) => (
  <div className="text-center content-center">
    <p className="text-xl sm:text-4xl md:text-6xl">
      {format(new Date(time), "kk:mm")}
    </p>
  </div>
);

const HeaderTeam: FC<{
  name: string;
  circuitId: string;
  right?: boolean;
  track?: boolean;
}> = ({ name, right, track, circuitId }) => (
  <div
    className={`flex items-center gap-2 sm:gap-6 ${
      right ? "flex-row-reverse" : "flex-row"
    }`}
  >
    <div className="w-10 h-10 md:w-20 md:h-20 content-center">
      <img
        className="w-6 sm:w-full"
        alt="Track"
        src={`/formula-one/${circuitId}${track ? "" : "-flag"}.png`}
      />
    </div>
    <p className="text-sm sm:text-2xl md:text-3xl">{name}</p>
  </div>
);
