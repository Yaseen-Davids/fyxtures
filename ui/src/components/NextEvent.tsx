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
    () => sortedData.find((row) => row.type === "football"),
    [sortedData]
  );

  const nextFormulaOneEvent = useMemo(
    () => sortedData.find((row) => row.type === "formulaone"),
    [sortedData]
  );

  return (
    <div className="flex flex-col gap-1 sm:mt-8">
      <p className="font-bold text-gray-200 capitalize text-lg sm:text-lg">
        Upcoming Events
      </p>
      <div className="grid grid-cols-[1fr_1fr] sm:flex-row gap-4 rounded">
        <div className="flex flex-row gap-4 rounded bg-gray-800 p-2">
          <div className="flex self-center">
            <img
              className="max-w-6 max-h-6"
              alt="Image of soccer ball"
              src={"/soccer-ball.png"}
            />
          </div>
          {nextFootballEvent ? (
            <div className="flex flex-col gap-1 text-xs sm:text-base">
              <p className="text-xs">
                {format(nextFootballEvent?.date, "dd MMM yyyy HH:mm")}
              </p>
              <p className="font-bold">
                {nextFootballEvent.left.display} vs{" "}
                {nextFootballEvent.right.display}
              </p>
            </div>
          ) : (
            <div className="flex items-center">
              <p className="text-xs">No upcoming football events</p>
            </div>
          )}
        </div>
        <div className="flex flex-row gap-4 rounded bg-gray-800 p-2">
          <div className="flex self-center">
            <img
              className="max-w-6 max-h-6 sm:max-w-8"
              alt="F1 Logo"
              src="/formulaone.png"
            />
          </div>
          {nextFormulaOneEvent ? (
            <div className="flex flex-col gap-1 text-xs sm:text-base">
              <p className="text-xs">
                {format(nextFormulaOneEvent?.date, "dd MMM yyyy HH:mm")}
              </p>
              <p className="font-bold">
                {nextFormulaOneEvent.left.display} -{" "}
                {nextFormulaOneEvent.right.display}
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
