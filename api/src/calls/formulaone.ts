import axios from "axios";
import { addMonths } from "date-fns";
import { FormulaOneResponse, FormulaOneRace } from "../types/formulaone";

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
      (row) => new Date(row.date) >= new Date()
      // && new Date(row.date) <= addMonths(new Date(), 2)
    ).sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
  }

  return data.MRData.RaceTable.Races;
};
