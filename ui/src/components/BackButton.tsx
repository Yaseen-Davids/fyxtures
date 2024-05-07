import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="absolute top-3 left-6 cursor-pointer hover:text-gray-600"
      onClick={() => navigate(-1)}
    >
      <ArrowLeftIcon width={20} height={20} />
    </div>
  );
};
