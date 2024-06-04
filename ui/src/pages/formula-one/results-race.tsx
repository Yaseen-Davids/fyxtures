import { FC } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { FormulaOneRaceWinResults } from "../../types/formula-one-win";
import { LoadingSpinner } from "../../components/LoadingSpinner";

type RaceWinnersProps = {
  raceId: string;
};

export const RaceWinners: FC<RaceWinnersProps> = ({ raceId }) => {
  const { data, isLoading } = useQuery<
    { data: FormulaOneRaceWinResults[] },
    Error
  >(["getRaceWinners", raceId], () =>
    axios.get(`/api/formula-one/results?raceId=${raceId}`)
  );

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
          Previous Race Winners
        </h3>
        <table className="w-full text-xxs sm:text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
          <tr className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th className="px-2 sm:px-6 py-2 sm:py-3">Season</th>
            <th className="px-2 sm:px-6 py-2 sm:py-3">No</th>
            <th className="px-2 sm:px-6 py-2 sm:py-3">Driver</th>
            <th className="px-2 sm:px-6 py-2 sm:py-3">Team</th>
            <th className="px-2 sm:px-6 py-2 sm:py-3">Time</th>
          </tr>
          {data?.data.map((row, i) => (
            <tr
              key={i}
              className={`${
                i % 2 == 0 ? "dark:bg-gray-800" : "dark:bg-gray-700"
              }`}
            >
              <td className="px-2 sm:px-6 py-2 sm:py-3">{row.season}</td>
              <td className="px-2 sm:px-6 py-2 sm:py-3">
                {row.Results[0].number}
              </td>
              <td className="px-2 sm:px-6 py-2 sm:py-3">{`${row.Results[0].Driver.givenName} ${row.Results[0].Driver.familyName}`}</td>
              <td className="px-2 sm:px-6 py-2 sm:py-3">
                {row.Results[0].Constructor.name}
              </td>
              <td className="px-2 sm:px-6 py-2 sm:py-3">
                {row.Results[0].Time.time}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
