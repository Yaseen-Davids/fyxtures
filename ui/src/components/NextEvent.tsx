import { FC, useMemo } from "react";
import { Fixture } from "../types/Fixture";
import { format } from "date-fns";

type NextEventProps = {
  data: Fixture[];
};

export const NextEvent: FC<NextEventProps> = ({ data }) => {
  const sortedData = useMemo(
    () =>
      data.sort(
        (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
      ),
    [data]
  );

  const nextFootballEvent = useMemo(
    () => sortedData.find((row) => row.sport === "football"),
    [sortedData]
  );

  const nextFormulaOneEvent = useMemo(
    () => sortedData.find((row) => row.sport === "formula-one"),
    [sortedData]
  );

  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold text-gray-200 capitalize text-lg sm:text-lg">
        Next Events
      </p>
      <div className="flex flex-col sm:flex-row gap-4 rounded">
        <div className="flex flex-row gap-4 rounded bg-gray-800 p-4">
          <div className="flex self-center">
            <img
              className="max-w-6 max-h-6"
              alt="Image of soccer ball"
              src={"/soccer-ball.png"}
            />
          </div>
          {nextFootballEvent ? (
            <div className="flex flex-col gap-0 text-xs sm:text-base">
              <p className="text-xs">
                {format(nextFootballEvent?.date, "EEEE, dd MMM yyyy HH:mm")}
              </p>
              <p className="font-bold">
                {(nextFootballEvent?.teams || [])[0].shortName} vs{" "}
                {(nextFootballEvent?.teams || [])[1].shortName}
              </p>
            </div>
          ) : (
            <div className="flex items-center">
              <p className="text-xs">No upcoming football events</p>
            </div>
          )}
        </div>
        <div className="flex flex-row gap-4 rounded bg-gray-800 p-4">
          <div className="flex self-center">
            <img
              className="max-w-6 max-h-6 sm:max-w-8"
              alt="F1 Logo"
              src="/F1-Logo.png"
            />
          </div>
          {nextFormulaOneEvent ? (
            <div className="flex flex-col gap-0 text-xs sm:text-base">
              <p className="text-xs">
                {format(nextFormulaOneEvent?.date, "EEEE, dd MMM yyyy HH:mm")}
              </p>
              <p className="font-bold">
                {nextFormulaOneEvent.raceName} - {nextFormulaOneEvent.type}
              </p>
            </div>
          ) : (
            <div className="flex items-center">
              <p className="text-xs">No upcoming F1 events</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
