import axios from "axios";
import { Football } from "src/types/football";

interface FootballFixtureProps {
  pageSize?: number;
  startDate?: string;
  teams?: string;
}

export const getFootballFixtures = async (
  props: FootballFixtureProps
): Promise<Football[]> => {
  console.log("props", props);
  const keys = Object.keys(props).reduce((str, k, i) => {
    if (i === 0) {
      str += "?";
    } else {
      str += "&";
    }
    str += `${k}=${(props as any)[k]}`;
    return str;
  }, "");

  const { data } = await axios.get(
    `https://footballapi.pulselive.com/football/fixtures${keys}`,
    {
      headers: {
        Origin: "https://www.premierleague.com",
      },
    }
  );
  return data.content;
};
