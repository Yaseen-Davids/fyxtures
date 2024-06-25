import { FootballUefaType } from "src/types/fooball-uefa";
import { Fixture } from "../types/fixture";
import { Football } from "../types/football";
import { FormulaOneRace } from "../types/formulaone";

import { format } from "date-fns";

const formatRaceType: { [index: string]: string } = {
  FirstPractice: "1st Practice",
  SecondPractice: "2nd Practice",
  ThirdPractice: "3rd Practice",
  Qualifying: "Qualifying",
  Sprint: "Sprint",
};

export const formatFixture = (
  data: (Football & FormulaOneRace & FootballUefaType)[]
): Fixture[] => {
  return data.reduce((arr, row) => {
    if (row.raceName) {
      arr.push({
        id: parseInt(row.round),
        sport: "formula-one",
        date: new Date(`${row.date} ${row.time}`),
        competition: row.raceName,
        type: "Race",
        raceName: `${row.Circuit.Location.country} GP`,
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
        if (
          (row as any)[event] &&
          format((row as any)[event].date, "yyyy-MM-dd") >=
            format(new Date(), "yyyy-MM-dd")
        ) {
          arr.push({
            sport: "formula-one",
            date: new Date(
              `${(row as any)[event].date} ${(row as any)[event].time}`
            ),
            competition: row.raceName,
            type:
              row["Sprint"] && event === "SecondPractice"
                ? "Sprint Qualifying"
                : formatRaceType[event],
            raceName: `${row.Circuit.Location.country} GP`,
            circuit: {
              name: row.Circuit.circuitName,
              image: "",
              id: row.Circuit.circuitId,
            },
          });
        }
      }
    } else if (row.awayTeam) {
      // UEFA Football Match Data
      arr.push({
        id: row.id,
        sport: "football-uefa",
        date: new Date(
          row.kickOffTime.dateTime
            ? row.kickOffTime.dateTime
            : row.kickOffTime.date
        ),
        league: {
          name: row.competition.metaData.name,
        },
        teams: [
          {
            id: parseInt(row.awayTeam.associationId),
            name: row.awayTeam.internationalName,
            abbr: row.awayTeam.countryCode,
            shortName:
              row.awayTeam.countryCode || row.awayTeam.internationalName,
            score: row.score ? row.score.total.away : null,
          },
          {
            id: parseInt(row.homeTeam.associationId),
            name: row.homeTeam.internationalName,
            abbr: row.homeTeam.countryCode,
            shortName:
              row.homeTeam.countryCode || row.homeTeam.internationalName,
            score: row.score ? row.score.total.home : null,
          },
        ],
        ground: {
          id: parseInt(row.stadium ? row.stadium.id : "0"),
          city: row.stadium ? row.stadium.city.translations.name.EN : "",
          name: row.stadium ? row.stadium.translations.mediaName.EN : "",
          source: row.stadium ? row.stadium.translations.mediaName.EN : "",
        },
        clock: row.minute
          ? { label: `${row.minute.normal}"`, secs: row.minute.normal }
          : null,
      });
    } else {
      // PREMIER LEAGUE Football Match Data
      arr.push({
        id: row.id,
        sport: "football",
        date: new Date(row.kickoff.millis),
        league: {
          name: row.gameweek.compSeason.competition.description,
        },
        teams: row.teams.map(({ team, score }) => ({
          id: team.id,
          name: team.name,
          abbr: team.club.abbr,
          shortName: team.shortName,
          score: score,
        })),
        ground: row.ground,
        clock: row.clock,
      });
    }
    return arr;
  }, [] as Fixture[]);
};
