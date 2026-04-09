import { Request, Response, Router, NextFunction } from "express";
import { getFixturesByTeamId } from "../calls/football";
import { formatFootballMatch } from "../lib/formatters/football";

const router = Router();

router.get("/:teamId/fixtures", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { teamId } = req.params;
    const fixtures = await getFixturesByTeamId({ teamId });
    const formattedFixtures = fixtures.map(formatFootballMatch);
    res.json(formattedFixtures);
  } catch (error) {
    next(error);
  }
});

export default router;
