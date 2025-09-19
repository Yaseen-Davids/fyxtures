import { Football } from "../../types/football";

export interface FormattedFootballMatch {
  id: string;
  date: string;
  name: string;
  venue: string;
  type: "football";
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

export const formatFootballMatch = (
  match: Football
): FormattedFootballMatch => ({
  id: match.eventId,
  date: match.eventDateStart,
  name: match.eventName,
  venue: match.venueName,
  type: "football",
  tournament: match.tournament.name,
  right: {
    display: match.teams.away.name,
    icon: `https://images.supersport.com${match.teams.away.icon}`,
  },
  left: {
    display: match.teams.home.name,
    icon: `https://images.supersport.com${match.teams.home.icon}`,
  },
});
