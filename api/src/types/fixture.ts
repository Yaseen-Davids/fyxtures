export type FixtureTeam = {
  id: number;
  name: string;
  shortName: string;
  abbr: string;
  score?: number | null;
};

export type FixtureLeague = {
  name: string;
  round?: string;
  logo?: string;
};

export type FixtureCircuit = {
  name: string;
  image: string;
  id: string;
};

export type FixtureGround = {
  name: string;
  city: string;
  source: string;
  id: number;
};

export type FixtureClock = {
  secs: number;
  label: string;
};

export type Fixture = {
  id?: number;
  sport: "football" | "formula-one" | "football-uefa";
  date: Date;
  league?: FixtureLeague;
  teams?: FixtureTeam[];
  competition?: string;
  type?: string;
  image?: string;
  circuit?: FixtureCircuit;
  ground?: FixtureGround;
  clock?: FixtureClock | null;
  raceName?: string;
};
