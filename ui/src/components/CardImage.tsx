import { FC } from "react";

type CardImageProps = {
  url: string;
};

export const CardImage: FC<CardImageProps> = ({ url }) => {
  if (url === "") {
    return <></>;
  }

  return <img src={url} className="w-full" alt="Image" />;
};
