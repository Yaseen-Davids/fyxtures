import { Request, Response, Router, NextFunction } from "express";
import { footballTeamsDataSet } from "../db/teams";

const router = Router();

router.get("/all", (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.json({ teams: footballTeamsDataSet });
  } catch (err) {
    return next(err);
  }
});

export default router;
