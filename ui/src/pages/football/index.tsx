import { FC, useMemo } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { BackButton } from "../../components/BackButton";
import { Header } from "./header";
import { FootballDetail } from "./detail";
import { FootballEvent } from "../../types/Football-Event";
import { LoadingSpinner } from "../../components/LoadingSpinner";

type FootballProps = {};

const Football: FC<FootballProps> = ({}) => {
  const { footballId } = useParams();

  const { data: fixture, isLoading } = useQuery<{ data: FootballEvent }, Error>(
    ["getEventById", footballId],
    () => axios.get(`/api/football/event/${footballId}`)
  );

  const teams = useMemo(
    () => (isLoading ? [] : fixture!.data.teams.map((team) => team.team.id)),
    [fixture, isLoading]
  );

  if (isLoading)
    return (
      <div className="w-full h-full flex justify-center p-4">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="p-4 relative">
      <BackButton />
      <div className="flex flex-col gap-4">
        <Header fixture={fixture!.data} />
        <FootballDetail eventId={parseInt(footballId || "")} teamsId={teams} />
      </div>
    </div>
  );
};

export default Football;
