import { FC, useMemo } from "react";

import { useQuery } from "@tanstack/react-query";
import { HeadToHeadReponse } from "../../types/football-headtohead";
import axios from "axios";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { FootballCard } from "../../components/FootballCard";
import { StatsBar } from "../../components/StatsBar";
import { FootballImage } from "../../components/FootballImage";

type HeadToHeadProps = {
  teamsId: number[];
};

const StatsKey: { [index: string]: string } = {
  goals: "Goals",
  clean_sheet: "Clean Sheet",
  own_goals: "Own Goals",
  total_yel_card: "Yellow Cards",
  total_red_card: "Red Cards",
};

export const HeadToHead: FC<HeadToHeadProps> = ({ teamsId }) => {
  const { data, isLoading } = useQuery<{ data: HeadToHeadReponse }, Error>(
    ["getEventById", teamsId],
    () => axios.get(`/api/football/headtohead/${teamsId.join(",")}`)
  );

  const team1Stats = useMemo(
    () => (!isLoading ? data?.data.stats[teamsId[0]] : []),
    [data, teamsId, isLoading]
  );

  const team2Stats = useMemo(
    () => (!isLoading ? data?.data.stats[teamsId[1]] : []),
    [data, teamsId, isLoading]
  );

  const stats = [
    "goals",
    "clean_sheet",
    "own_goals",
    "total_yel_card",
    "total_red_card",
  ];

  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center p-4">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">Stats</h3>
        <div>
          <div className="h-20 flex flex-row justify-between pl-20 pr-20">
            <FootballImage teamId={teamsId[0]} />
            <FootballImage teamId={teamsId[1]} />
          </div>
        </div>
        <div>
          <StatsBar
            data={[
              {
                name:
                  team1Stats!.find((stat) => stat.name === "wins")?.value || 0,
                value:
                  team1Stats!.find((stat) => stat.name === "wins")?.value || 0,
                color: "bg-red-700",
              },
              {
                name: `Drawn: ${
                  team1Stats!.find((stat) => stat.name === "draws")?.value || 0
                }`,
                value:
                  team1Stats!.find((stat) => stat.name === "draws")?.value || 3,
                color: "bg-gray-700",
              },
              {
                name:
                  team2Stats!.find((stat) => stat.name === "wins")?.value || 0,
                value:
                  team2Stats!.find((stat) => stat.name === "wins")?.value || 0,
                color: "bg-blue-800",
              },
            ]}
          />
          {stats.map((key, i) => (
            <StatsBar
              data={[
                {
                  name:
                    team1Stats!.find((stat) => stat.name === key)?.value || 0,
                  value: 1,
                  color: i % 2 === 0 ? "bg-gray-900" : "bg-gray-800",
                },
                {
                  name: StatsKey[key],
                  value: 1,
                  color: i % 2 === 0 ? "bg-gray-900" : "bg-gray-800",
                },
                {
                  name:
                    team2Stats!.find((stat) => stat.name === key)?.value || 0,
                  value: 1,
                  color: i % 2 === 0 ? "bg-gray-900" : "bg-gray-800",
                },
              ]}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">Recent Premier League Meetings</h3>
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
    </div>
  );
};
