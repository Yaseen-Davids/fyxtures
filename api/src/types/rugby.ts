export interface Rugby {
  areLineUpsAvailable: boolean;
  isScoredLive: boolean;
  eventDateEnd: string;
  eventDateStart: string;
  eventId: string;
  eventName: string;
  matchStatus: string;
  matchSubStatus: string;
  round: {
    name: string;
    type: string;
  };
  status: {
    id: number;
    name: string;
  };
  subStatus: {
    id: number;
    name: string;
  };
  score: {
    total: {
      home: null;
      away: null;
    };
    winner: {
      side: null;
      teamId: null;
    };
  };
  penalties: null;
  rugbyTeam: {
    home: {
      name: string;
      shortName: string;
      id: string;
      teamId: string;
      icon: string;
    };
    away: {
      name: string;
      shortName: string;
      id: string;
      teamId: string;
      icon: string;
    };
  };
  tour: {
    name: string;
    icon: string;
    id: string;
  };
  tourId: string;
  venue: {
    venueName: string;
    venueShortName: string;
    country: {
      fifaCode: string;
      iso3Code: string;
      name: string;
      flag: string;
    };
  };
  feedId: string;
  isKnockoutFixture: boolean;
}
