export type FixtureTeam = {
  home: {
    logo: string;
    name: string;
  };
  away: {
    logo: string;
    name: string;
  };
};

export type FixtureLeague = {
  name: string;
  round: string;
  logo: string;
};

export type FixtureCircuit = {
  name: string;
  image: string;
};

export type Fixture = {
  id: number;
  sport: "football" | "formula-one";
  date: string;
  league?: FixtureLeague;
  teams?: FixtureTeam;
  competition?: string;
  type?: string;
  image?: string;
  circuit?: FixtureCircuit;
};
