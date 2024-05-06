export type FixtureTeam = {
  id: number;
  name: string;
  shortName: string;
  abbr: string;
  logo?: string;
};

export type FixtureLeague = {
  name: string;
  round?: string;
  logo?: string;
};

export type FixtureCircuit = {
  name: string;
  image: string;
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
};
