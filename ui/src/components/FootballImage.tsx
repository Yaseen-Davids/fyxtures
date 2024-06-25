import { FC } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type FootballImageProps = {
  sport: string;
  teamId: number;
};

export const FootballImage: FC<FootballImageProps> = ({ teamId, sport }) => {
  const { data, isLoading, isError } = useQuery<
    { data: { url: string } },
    Error
  >(
    ["getEventById", teamId, sport],
    () => axios.get(`/api/football/team-logo/${teamId}?sport=${sport}`),
    { retry: false, refetchOnMount: false }
  );

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <p>?</p>;

  return <img className="w-full" src={data?.data.url} alt="Football Image" />;
};
