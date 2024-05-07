import axios from "axios";
import { Football } from "src/types/football";
import { FootballEvent } from "src/types/football-event";
import { HeadToHeadReponse } from "src/types/football-headtohead";

interface FootballFixtureProps {
  pageSize?: number;
  startDate?: string;
  teams?: string;
}

export const getFootballFixtures = async (
  props: FootballFixtureProps
): Promise<Football[]> => {
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

export const getFootballFixtureById = async (
  eventId: number
): Promise<FootballEvent> => {
  const { data } = await axios.get(
    `https://footballapi.pulselive.com/football/fixtures/${eventId}`,
    {
      headers: {
        Origin: "https://www.premierleague.com",
      },
    }
  );
  return data;
};

export const getFootballHeadToHead = async (
  teamIds: string
): Promise<HeadToHeadReponse> => {
  const { data } = await axios.get(
    `https://footballapi.pulselive.com/football/stats/headtohead?teams=${teamIds}`,
    {
      headers: {
        Origin: "https://www.premierleague.com",
      },
    }
  );
  return data;
};
