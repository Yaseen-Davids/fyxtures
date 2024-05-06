import { Request, Response, Router, NextFunction } from "express";
import { port } from "../start";

import { getFootballFixtures } from "../calls/football";
import { getFormulaOneRaces } from "../calls/formulaone";
import { formatFixture } from "src/utils/formatFixture";
import { Football } from "src/types/football";
import { FormulaOneRace } from "src/types/formulaone";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render("index", { port });
  } catch (err) {
    return next(err);
  }
});

router.get("/fixtures", async (req, res, next) => {
  try {
    const { teams, startDate, includeFOne } = req.query;

    const requests: any[] = [getFootballFixtures({ teams, startDate })];

    if (JSON.parse(includeFOne)) {
      requests.push(getFormulaOneRaces({ next: true }));
    }

    const [fooball, formulaOne] = await Promise.all(requests);

    const data = formatFixture([
      ...fooball,
      ...(formulaOne || []),
    ] as (Football & FormulaOneRace)[]);
    return res.json(data);
  } catch (error) {
    return next(error);
  }
});

export default router;
