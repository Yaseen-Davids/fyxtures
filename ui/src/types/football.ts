export interface Football {
  eventDateEnd: string;
  eventDateStart: string;
  eventId: string;
  eventName: string;
  scoreCoverage: {
    id: number;
    name: string;
  };
  score: {
    total: {
      home: number;
      away: number;
    };
    shootout: null;
    winner: null;
  };
  status: {
    id: number;
    name: string;
  };
  gameStatus: null;
  subStatus: {
    id: number;
    name: string;
  };
  teams: {
    away: {
      countryCode: string;
      countryISO3: string;
      name: string;
      shortName: string;
      id: string;
      teamId: string;
      icon: string;
      color: string;
    };
    home: {
      countryCode: string;
      countryISO3: string;
      name: string;
      shortName: string;
      id: string;
      teamId: string;
      icon: string;
      color: string;
    };
  };
  tournament: {
    name: string;
    icon: string;
    id: string;
    seasonId: string;
    leaguePath: string;
  };
  resultDescription: string;
  resultType: string;
  venueName: string;
  feedId: string;
  isKnockoutFixture: boolean;
  hasAggregate: boolean;
  areLineUpsAvailable: boolean;
  matchDayWeek: string;
}
