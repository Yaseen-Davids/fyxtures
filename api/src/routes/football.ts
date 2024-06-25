import { Request, Response, Router, NextFunction } from "express";
import { footballTeamsDataSet } from "../db/teams";
import {
  getFootballFixtureById,
  getFootballHeadToHead,
} from "../calls/football";

const router = Router();

router.get("/teams", (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({ teams: footballTeamsDataSet });
  } catch (err) {
    return next(err);
  }
});

router.get(
  "/event/:eventId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { eventId } = req.params;
      const data = await getFootballFixtureById(parseInt(eventId));
      return res.json(data);
    } catch (err) {
      return next(err);
    }
  }
);

router.get(
  "/team-logo/:teamId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { teamId } = req.params;
      const { sport } = req.query;

      const url = (
        footballTeamsDataSet.find(
          (tds) => tds.teamId == parseInt(teamId) && tds.league === sport
        ) || {
          image: {
            url: "https://img.icons8.com/?size=100&id=8672&format=png&color=000000",
          },
        }
      ).image.url;
      return res.json({ url });
    } catch (err) {
      return next(err);
    }
  }
);

router.get(
  "/headtohead/:teams",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { teams } = req.params;
      const data = await getFootballHeadToHead(teams);
      return res.json(data);
    } catch (err) {
      return next(err);
    }
  }
);

export default router;
