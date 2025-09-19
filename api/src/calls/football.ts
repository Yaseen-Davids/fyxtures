import axios from "axios";
import { Football } from "../types/football";
import { getUnixTime } from "date-fns";

interface FootballFixtureProps {
  startDate: Date; // time
  sportIds: string; // comma separated sport ids
}

export const getFootballFixtures = async ({
  startDate,
  sportIds,
}: FootballFixtureProps): Promise<Football[]> => {
  const baseUrl = process.env.FOOTBALL_URL;

  if (!baseUrl) {
    throw new Error("FOOTBALL_URL is not defined");
  }

  const url = `${baseUrl}?skip=0&top=25&eventStatusIds=1,2&entityTagIds=${sportIds}&startDate=${getUnixTime(
    startDate
  )}&orderAscending=true&region=za&platform=indaleko-web`;

  const { data } = await axios.get(url, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      "Accept-Encoding": "gzip, deflate",
    },
  });

  return (data || { Summary: [] }).Summary;
};
