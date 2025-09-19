import { FormulaOneSession } from "../../types/formulaone";

export interface FormattedFormulaOneEvent {
  id: string;
  date: string;
  name: string;
  venue: string;
  type: "formulaone";
  tournament: string;
  left: {
    display: string;
    icon: string;
  };
  right: {
    display: string;
    icon: string;
  };
}

export const formatFormulaOneEvent = (
  match: FormulaOneSession
): FormattedFormulaOneEvent => ({
  id: match.id,
  date: match.startTime,
  name: match.name,
  venue: match.venue,
  type: "formulaone",
  tournament: "Formula 1 Grand Prix",
  right: {
    display: match.description,
    icon: `/formula-one/${match.track.toLowerCase().replace(" ", "_")}.png`,
  },
  left: {
    display: match.venue,
    icon: match.flag,
  },
});
