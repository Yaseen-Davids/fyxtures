import axios from "axios";
// import { addMonths } from "date-fns";
import { FormulaOneResponse, FormulaOneRace } from "../types/formulaone";
import {
  FormulaOneRaceWin,
  FormulaOneRaceWinResults,
} from "../types/formula-one-win";
import { format } from "date-fns";

interface FormulaOneRacesProps {
  next?: boolean;
}

export const getFormulaOneRaces = async ({
  next,
}: FormulaOneRacesProps): Promise<FormulaOneRace[]> => {
  const { data }: { data: FormulaOneResponse } = await axios.get(
    `https://ergast.com/api/f1/current.json`
  );

  // only show next races from current date
  if (next) {
    return data.MRData.RaceTable.Races.filter(
      (row) =>
        format(new Date(row.date), "yyyy-MM-dd") >=
        format(new Date(), "yyyy-MM-dd")
      // && new Date(row.date) <= addMonths(new Date(), 2)
    ).sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
  }

  return data.MRData.RaceTable.Races;
};

export const getFormulaOneRaceById = async (
  raceId: string
): Promise<FormulaOneRace> => {
  const { data }: { data: FormulaOneResponse } = await axios.get(
    `https://ergast.com/api/f1/current.json`
  );
  return data.MRData.RaceTable.Races.filter(
    (row) => row.Circuit.circuitId == raceId
  )[0];
};

export const getPreviousSeason = async (raceId: string): Promise<string> => {
  const { data }: { data: FormulaOneRaceWin } = await axios.get(
    `https://ergast.com/api/f1/circuits/${raceId}/results/1.json?limit=1000`
  );
  return data.MRData.RaceTable.Races.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  )[0].season;
};

export const getRaceWinnersByRace = async (
  raceId: string,
  limit: number = 5
): Promise<FormulaOneRaceWinResults[]> => {
  const { data }: { data: FormulaOneRaceWin } = await axios.get(
    `https://ergast.com/api/f1/circuits/${raceId}/results/1.json?limit=1000`
  );
  return data.MRData.RaceTable.Races.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  ).slice(0, limit);
};

export const getPreviousRaceResults = async (
  raceId: string
): Promise<FormulaOneRaceWinResults> => {
  const season = await getPreviousSeason(raceId);
  const { data }: { data: FormulaOneRaceWin } = await axios.get(
    `https://ergast.com/api/f1/${season}/circuits/${raceId}/results/0.json`
  );
  return {
    ...data.MRData.RaceTable.Races.sort(
      (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
    )[0],
    season,
  };
};
