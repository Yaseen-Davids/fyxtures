import { FC } from "react";
import { BackButton } from "../../components/BackButton";
import { Header } from "./header";
import { FootballDetail } from "./detail";

type FootballProps = {
  params: { eventId: number };
};

const Football: FC<FootballProps> = ({ params }) => {
  return (
    <div className="p-4 relative">
      <BackButton />
      <div className="flex flex-col gap-4">
        {/* TODO: use Context instead */}
        <Header eventId={params.eventId} />
        <FootballDetail eventId={params.eventId} />
      </div>
    </div>
  );
};

export default Football;
