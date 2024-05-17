import { Request, Response, Router, NextFunction } from "express";
import {
  getFormulaOneRaceById,
  getPreviousRaceResults,
  getRaceWinnersByRace,
} from "../calls/formula-one";

const router = Router();

router.get(
  "/results",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { raceId } = req.query;
      const data = await getRaceWinnersByRace(raceId);
      return res.json(data);
    } catch (err) {
      return next(err);
    }
  }
);

router.get("/race", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { raceId } = req.query;
    const data = await getFormulaOneRaceById(raceId);
    return res.json(data);
  } catch (err) {
    return next(err);
  }
});

router.get(
  "/last-result",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { raceId } = req.query;
      const data = await getPreviousRaceResults(raceId);
      return res.json(data);
    } catch (err) {
      return next(err);
    }
  }
);

export default router;
