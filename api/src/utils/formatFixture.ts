import { Fixture } from "../types/fixture";
import { Football } from "../types/football";
import { FormulaOneRace } from "../types/formulaone";

export const formatFixture = (
  data: (Football & FormulaOneRace)[]
): Fixture[] => {
  return data.reduce((arr, row) => {
    if (row.raceName) {
      arr.push({
        id: parseInt(row.round),
        sport: "formula-one",
        date: new Date(`${row.date} ${row.time}`),
        competition: row.raceName,
        type: "Race",
        circuit: {
          name: row.Circuit.circuitName,
          image: "",
          id: row.Circuit.circuitId,
        },
      });

      const f1events = [
        "FirstPractice",
        "SecondPractice",
        "ThirdPractice",
        "Sprint",
        "Qualifying",
      ];

      for (const event of f1events) {
        if ((row as any)[event]) {
          arr.push({
            sport: "formula-one",
            date: new Date(
              `${(row as any)[event].date} ${(row as any)[event].time}`
            ),
            competition: row.raceName,
            type:
              row["Sprint"] && event === "SecondPractice"
                ? "Sprint Qualifying"
                : event.replace(/([A-Z])/g, " $1").trim(), // add space between capital letters
            circuit: {
              name: row.Circuit.circuitName,
              image: "",
              id: row.Circuit.circuitId,
            },
          });
        }
      }
    } else {
      arr.push({
        id: row.id,
        sport: "football",
        date: new Date(row.kickoff.millis),
        league: {
          name: row.gameweek.compSeason.competition.description,
        },
        teams: row.teams.map(({ team }) => ({
          id: team.id,
          name: team.name,
          abbr: team.club.abbr,
          shortName: team.shortName,
          score: team.score,
        })),
        ground: row.ground,
      });
    }
    return arr;
  }, [] as Fixture[]);
};
