import React, { FC } from "react";
// import { getFixtureById } from "./header";

type PreviousGamesProps = {
  eventId: number;
};

const getPreviousGames = async (teams: number[]): Promise<void> => {
  const timezone = "Africa/Harare";

  try {
    const result = await fetch(
      `https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-40&timezone=${timezone}`,
      {
        headers: {
          "x-apisports-key": process.env.SPORTS_API_KEY || "",
        },
      }
    );

    const response = await result.json();
    console.log(response);
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch data");
  }
};

export const PreviousGames: FC<PreviousGamesProps> = async ({ eventId }) => {
  console.log("Server eventId", eventId);

  // const { teams } = await getFixtureById(eventId);
  // console.log("teams", teams);

  // const data = await getPreviousGames([33, 40]);
  // console.log("data", data);

  return <div></div>;
};
