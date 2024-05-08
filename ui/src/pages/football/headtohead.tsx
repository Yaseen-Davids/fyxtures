import { FC } from "react";

import { useQuery } from "@tanstack/react-query";
import { HeadToHeadReponse } from "../../types/football-headtohead";
import axios from "axios";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { FootballCard } from "../../components/FootballCard";

type HeadToHeadProps = {
  teamsId: number[];
};

export const HeadToHead: FC<HeadToHeadProps> = ({ teamsId }) => {
  const { data, isLoading } = useQuery<{ data: HeadToHeadReponse }, Error>(
    ["getEventById", teamsId],
    () => axios.get(`/api/football/headtohead/${teamsId.join(",")}`)
  );

  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center p-4">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="flex flex-col gap-2 w-full p-4">
      <h3 className="font-bold text-blue-100 text-xl">Recent Meetings</h3>
      {data?.data.headToHeads.map((event, index) => (
        <FootballCard
          completed
          key={`${event.id}-${index}`}
          event={{
            id: event.id,
            sport: "football",
            date: new Date(event.kickoff.millis),
            league: {
              name: event.gameweek.compSeason.competition.description,
            },
            teams: event.teams.map(({ team, score }) => ({
              id: team.id,
              name: team.name,
              abbr: team.club.abbr,
              shortName: team.shortName,
              score: score,
            })),
            ground: event.ground,
          }}
        />
      ))}
    </div>
  );
};
