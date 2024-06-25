import axios from "axios";
import { Football } from "../types/football";
import { FootballEvent } from "../types/football-event";
import { HeadToHeadReponse } from "../types/football-headtohead";
import { FootballUefaType } from "../types/fooball-uefa";

interface FootballFixtureProps {
  pageSize?: number;
  startDate?: string;
  teams?: number[];
}

export const getFootballFixtures = async (
  props: FootballFixtureProps
): Promise<Football[]> => {
  const keys = Object.keys(props).reduce((str, k: any, i) => {
    if (i === 0) {
      str += "?";
    } else {
      str += "&";
    }
    if (typeof k === "object") {
      k = k.join(",");
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

export const getUefaFootballFixtures = async ({
  teams,
  startDate,
}: FootballFixtureProps): Promise<FootballUefaType> => {
  const limit = 60,
    offset = 0;

  const { data } = await axios.get(
    `https://match.uefa.com/v5/matches?fromDate=${startDate}&limit=${limit}&offset=${offset}&order=ASC`,
    {
      headers: {
        Origin: "https://match.uefa.com",
      },
    }
  );

  if ((teams || []).length === 0) return data;

  // The api doesn't filter by 'teamId' (even though teamId is a valid paramater)
  // so we'll have to manually filter the results

  return data.filter((match: FootballUefaType) =>
    (teams || []).find(
      (team) =>
        team == parseInt(match.awayTeam.associationId) ||
        team == parseInt(match.homeTeam.associationId)
    )
  );
};
