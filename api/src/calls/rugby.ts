import axios from "axios";
import { Rugby } from "../types/rugby";
import { getUnixTime } from "date-fns";
import https from "https";

interface RugbyFixtureProps {
  startDate: Date; // datetime
  sportIds: string; // comma separated sport ids
}

export const getRugbyFixtures = async ({
  sportIds,
  startDate,
}: RugbyFixtureProps): Promise<Rugby[]> => {
  const baseUrl = process.env.RUGBY_URL;

  if (!baseUrl) {
    throw new Error("RUGBY_URL is not defined");
  }

  const url = `${baseUrl}?skip=0&top=25&eventStatusIds=1,2&entityTagIds=${sportIds}&startDate=${getUnixTime(
    startDate
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
