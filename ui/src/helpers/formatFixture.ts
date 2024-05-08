import { Fixture } from "../types/Fixture";

export const formatFixture = (row: any): Fixture | undefined => {
  if (row.fixture) {
    return {
      id: row.fixture.id,
      sport: "football",
      date: row.fixture.date,
      league: {
        name: row.league.name,
        round: row.league.round,
        logo: row.league.logo,
      },
      teams: row.teams,
    };
  } else {
    if (
      ![
        "2nd Sprint Shootout",
        "3rd Sprint Shootout",
        "2nd Qualifying",
        "3rd Qualifying",
      ].includes(row.type)
    ) {
      return {
        id: row.id,
        sport: "formula-one",
        date: row.date,
        competition: row.competition.name,
        type: row.type,
        circuit: {
          id: row.circuit.circuitId,
          name: row.circuit.name,
          image: row.circuit.image,
        },
      };
    }
  }
  return undefined;
};
