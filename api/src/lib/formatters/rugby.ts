import { Rugby } from "../../types/rugby";

export interface FormattedRugbyMatch {
  id: string;
  date: string;
  name: string;
  venue: string;
  type: "rugby";
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

export const formatRugbyMatch = (match: Rugby): FormattedRugbyMatch => ({
  id: match.eventId,
  date: match.eventDateStart,
  name: match.eventName,
  venue: match.venue.venueName,
  type: "rugby",
  tournament: match.tour.name,
  right: {
    display: match.rugbyTeam.away.name,
    icon: `https://images.supersport.com${match.rugbyTeam.away.icon}`,
  },
  left: {
    display: match.rugbyTeam.home.name,
    icon: `https://images.supersport.com${match.rugbyTeam.home.icon}`,
  },
});
