import { Request, Response, Router, NextFunction } from "express";
import { getFootballFixtures } from "../calls/football";
import { getRugbyFixtures } from "../calls/rugby";
import { formatFootballMatch } from "../lib/formatters/football";
import { formatRugbyMatch } from "../lib/formatters/rugby";
import { getFormulaOneFixtures } from "../calls/formula-one";
import { formatFormulaOneEvent } from "../lib/formatters/formulaone";
import { format } from "date-fns";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    res.render("index", { port: 4000 });
  } catch (err) {
    return next(err);
  }
});

router.post("/fixtures", async (req, res, next) => {
  try {
    const { dateFrom } = req.body;

    const [footballFixtures, rugbyFixtures, formulaOneFixtures] =
      await Promise.all([
        getFootballFixtures({
          startDate: new Date(dateFrom),
          sportIds: process.env.FOOTBALL_PREMIER_LEAGUE_ID || "",
        }),
        getRugbyFixtures({
          startDate: new Date(dateFrom),
          sportIds: process.env.RUGBY_CHAMPIONSHIP_ID || "",
        }),
        getFormulaOneFixtures({
          startDate: format(new Date(dateFrom), "yyyy-MM-dd"),
        }),
      ]);

    const formattedFootballMatchs = footballFixtures.map(formatFootballMatch);
    const formattedRugbyMatchs = rugbyFixtures.map(formatRugbyMatch);
    const formattedFormulaOneEvents = formulaOneFixtures.map(
      formatFormulaOneEvent
    );

    return res.json([
      ...formattedFootballMatchs,
      ...formattedRugbyMatchs,
      ...formattedFormulaOneEvents,
    ]);
  } catch (error) {
    return next(error);
  }
});

export default router;
