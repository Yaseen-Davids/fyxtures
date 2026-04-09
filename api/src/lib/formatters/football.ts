import { Football } from "../../types/football";

export interface FormattedFootballMatch {
  id: string;
  date: string;
  name: string;
  venue: string;
  type: "football";
  tournament: string;
  left: {
    id: string;
    display: string;
    icon: string;
  };
  right: {
    id: string;
    display: string;
    icon: string;
  };
}

export const formatFootballMatch = (match: Football): FormattedFootballMatch => ({
  id: match.eventId,
  date: match.eventDateStart,
  name: match.eventName,
  venue: match.venueName,
  type: "football",
  tournament: match.tournament.name,
  right: {
    id: match.teams.away.id,
    display: match.teams.away.name,
    icon: `https://images.supersport.com${match.teams.away.icon}`,
  },
  left: {
    id: match.teams.home.id,
    display: match.teams.home.name,
    icon: `https://images.supersport.com${match.teams.home.icon}`,
  },
});
