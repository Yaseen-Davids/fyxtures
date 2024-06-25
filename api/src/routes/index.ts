import { Request, Response, Router, NextFunction } from "express";
import { port } from "../Server";

import {
  getFootballFixtures,
  getUefaFootballFixtures,
} from "../calls/football";
import { getFormulaOneRaces } from "../calls/formula-one";
import { formatFixture } from "../utils/formatFixture";
import { Football } from "../types/football";
import { FormulaOneRace } from "../types/formulaone";
import { FootballUefaType } from "src/types/fooball-uefa";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render("index", { port });
  } catch (err) {
    return next(err);
  }
});

router.post("/fixtures", async (req, res, next) => {
  try {
    const { teams, startDate, includeFOne } = req.body;

    const teamsObj = (teams as { id: number; league: string }[]).reduce(
      (obj: any, team: any) => {
        obj[team.league] = [...(obj[team.league] || []), team.id];
        return obj;
      },
      {}
    );

    const requests: any[] = [
      getFootballFixtures({
        teams: teamsObj["premier-league"],
        startDate,
      }),
      getUefaFootballFixtures({
        teams: teamsObj["uefa"],
        startDate,
      }),
    ];

    if (JSON.parse(includeFOne)) {
      requests.push(getFormulaOneRaces({ next: true }));
    }

    const [fooball, uefa, formulaone] = await Promise.all(requests);

    const data = formatFixture([
      ...fooball,
      ...uefa,
      ...(formulaone || []),
    ] as (Football & FormulaOneRace & FootballUefaType)[]);
    return res.json(data);
  } catch (error) {
    return next(error);
  }
});

// router.get("/footballimages", async (req, res, next) => {
//   const dataSetOne = await Promise.all([
//     axios.get(
//       `https://footballapi.pulselive.com/football/teams?pageSize=1000&page=0`,
//       {
//         headers: {
//           Origin: "https://www.premierleague.com",
//         },
//       }
//     ),
//     axios.get(
//       `https://footballapi.pulselive.com/football/teams?pageSize=1000&page=1`,
//       {
//         headers: {
//           Origin: "https://www.premierleague.com",
//         },
//       }
//     ),
//     axios.get(
//       `https://footballapi.pulselive.com/football/teams?pageSize=1000&page=2`,
//       {
//         headers: {
//           Origin: "https://www.premierleague.com",
//         },
//       }
//     ),
//   ]);

//   console.log("GOT dataSetOne");

//   const footballApiData = dataSetOne.reduce((arr: any[], row: any) => {
//     arr.push(...row.data.content);
//     return arr;
//   }, []);

//   console.log("FORMATTED dataSetOne");

//   const requests = [];
//   let offset = 0;

//   while (offset <= 5000) {
//     requests.push(
//       axios.get(
//         `https://api.football-data.org/v4/teams?limit=500&offset=${offset}`,
//         {
//           headers: {
//             "x-auth-token": "c4c9ab8b422440dc90e471000af5dde4",
//           },
//         }
//       )
//     );
//     offset += 500;
//   }

//   const dataSetTwo = await Promise.all(requests);
//   console.log("GOT dataSetTwo");

//   const footballImages = dataSetTwo.reduce((arr: any[], row: any) => {
//     arr.push(...row.data.teams);
//     return arr;
//   }, []);

//   const list = footballApiData.reduce((arr, row) => {
//     const exists = footballImages.filter((img) => img.name.includes(row.name));

//     if (exists.length > 0) {
//       arr.push(
//         ...exists.map((img) => ({
//           id: row.id,
//           name: row.name,
//           image: {
//             id: img.id,
//             url: img.crest,
//           },
//         }))
//       );
//     }
//     return arr;
//   }, []);

//   return res.json({ list });
// });

export default router;
