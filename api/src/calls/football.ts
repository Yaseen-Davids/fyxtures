import axios from "axios";
import { Football } from "../types/football";
import { getUnixTime } from "date-fns";
import https from "https";

interface FootballFixtureProps {
  startDate: Date; // time
}

export const getFootballFixtures = async ({
  startDate,
}: FootballFixtureProps): Promise<Football[]> => {
  const baseUrl = process.env.FOOTBALL_URL;

  if (!baseUrl) {
    throw new Error("FOOTBALL_URL is not defined");
  }

  const sportIds = [
    process.env.FOOTBALL_PREMIER_LEAGUE_ID,
    process.env.FOOTBALL_FA_CUP_ID,
    process.env.FOOTBALL_CHAMPIONS_LEAGUE_CUP_ID,
  ].join(",");

  const url = `${baseUrl}?skip=0&top=50&eventStatusIds=1,2&entityTagIds=${sportIds}&startDate=${getUnixTime(
    startDate,
  )}&orderAscending=true&region=za&platform=indaleko-web`;

  const agent = new https.Agent({ rejectUnauthorized: false });

  const { data } = await axios.get(url, {
    httpsAgent: agent,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      "Accept-Encoding": "gzip, deflate",
    },
  });

  if (!data.Summary) return [];

  return (data || { Summary: [] }).Summary;
};

export const getFixturesByTeamId = async ({ teamId }: { teamId: string }): Promise<Football[]> => {
  const baseUrl = process.env.FOOTBALL_URL;

  if (!baseUrl) {
    throw new Error("FOOTBALL_URL is not defined");
  }

  const url = `${baseUrl}?skip=0&top=50&eventStatusIds=1,2&entityTagIds=${
    teamId
  }&startDate=${getUnixTime(new Date())}&orderAscending=true&region=za&platform=indaleko-web`;

  const agent = new https.Agent({ rejectUnauthorized: false });

  const { data } = await axios.get(url, {
    httpsAgent: agent,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      "Accept-Encoding": "gzip, deflate",
    },
  });

  if (!data.Summary) return [];

  return (data || { Summary: [] }).Summary;
};
