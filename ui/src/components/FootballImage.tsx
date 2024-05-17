import { FC } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type FootballImageProps = {
  teamId: number;
};

export const FootballImage: FC<FootballImageProps> = ({ teamId }) => {
  const { data, isLoading } = useQuery<{ data: { url: string } }, Error>(
    ["getEventById", teamId],
    () => axios.get(`/api/football/team-logo/${teamId}`)
  );

  if (isLoading) return <LoadingSpinner />;

  return <img className="w-full" src={data?.data.url} alt="Football Image" />;
};
