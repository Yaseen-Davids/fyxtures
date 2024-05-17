import { FC } from "react";

import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { BackButton } from "../../components/BackButton";
import { Header } from "./header";
import { FormulaOneDetail } from "./detail";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { FormulaOneRace } from "../../types/formula-one";

type FormulaOneProps = {};

const FormulaOne: FC<FormulaOneProps> = ({}) => {
  const { raceId } = useParams();
  const [searchParams] = useSearchParams();
  const raceType = searchParams.get("type");

  const { data, isLoading } = useQuery<{ data: FormulaOneRace }, Error>(
    ["getRace", raceId],
    () => axios.get(`/api/formula-one/race?raceId=${raceId}`)
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
        <Header race={data!.data} raceType={raceType || "Race"} />
        <FormulaOneDetail raceId={raceId || ""} />
      </div>
    </div>
  );
};

export default FormulaOne;
