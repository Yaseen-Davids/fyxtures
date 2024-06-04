import { FC } from "react";
import { FormulaOneRaceWinResults } from "../../types/formula-one-win";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type PreviousRaceProps = {
  raceId: string;
};

export const PreviousRace: FC<PreviousRaceProps> = ({ raceId }) => {
  const { data, isLoading } = useQuery<
    { data: FormulaOneRaceWinResults },
    Error
  >(["getPreviousRaceResults", raceId], () =>
    axios.get(`/api/formula-one/last-result?raceId=${raceId}`)
  );

  console.log("Data", data);

  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center p-4">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="flex flex-col gap-4 w-full p-1">
      <div className="flex flex-col gap-2 w-full">
        <h3 className="font-bold text-sm sm:text-base md:text-2xl">
          {data?.data.season} Race Result
        </h3>
        <table className="w-full text-xxs sm:text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
          <tr className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th className="px-2 sm:px-6 py-2 sm:py-3">Pos</th>
            <th className="px-2 sm:px-6 py-2 sm:py-3">No</th>
            <th className="px-2 sm:px-6 py-2 sm:py-3">Driver</th>
            <th className="px-2 sm:px-6 py-2 sm:py-3">Team</th>
            <th className="px-2 sm:px-6 py-2 sm:py-3">Time</th>
          </tr>
          {data?.data.Results.map((row, i) => (
            <tr
              key={i}
              className={`${
                i % 2 == 0 ? "dark:bg-gray-800" : "dark:bg-gray-700"
              }`}
            >
              <td className="px-2 sm:px-6 py-2 sm:py-3">{row.position}</td>
              <td className="px-2 sm:px-6 py-2 sm:py-3">{row.number}</td>
              <td className="px-2 sm:px-6 py-2 sm:py-3">{`${row.Driver.givenName} ${row.Driver.familyName}`}</td>
              <td className="px-2 sm:px-6 py-2 sm:py-3">
                {row.Constructor.name}
              </td>
              <td className="px-2 sm:px-6 py-2 sm:py-3">
                {row.Time
                  ? row.Time.time
                  : row.positionText == row.position
                  ? row.status
                  : `DNF - ${row.status}`}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
