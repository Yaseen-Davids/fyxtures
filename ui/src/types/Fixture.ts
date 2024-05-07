export type FixtureTeam = {
  id: number;
  name: string;
  shortName: string;
  abbr: string;
  score?: number;
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

export type Fixture = {
  id?: number;
  sport: "football" | "formula-one";
  date: Date;
  league?: FixtureLeague;
  teams?: FixtureTeam[];
  competition?: string;
  type?: string;
  image?: string;
  circuit?: FixtureCircuit;
  ground?: FixtureGround;
};
