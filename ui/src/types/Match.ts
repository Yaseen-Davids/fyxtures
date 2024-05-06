export type Match = {
  fixture: Fixture;
  teams: Team;
  league: League;
};

export type Fixture = {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: any;
    second: any;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
  status: {
    long: string;
    short: string;
    elapsed: string;
  };
};

export type Team = {
  home: {
    id: number;
    name: string;
    logo: string;
    winner: string;
  };
  away: {
    id: number;
    name: string;
    logo: string;
    winner: string;
  };
};

export type League = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
};
