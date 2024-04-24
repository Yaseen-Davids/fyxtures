"use client";

import { useRouter } from "next/navigation";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export const BackButton = () => {
  const router = useRouter();
  return (
    <div
      className="absolute top-3 left-6 cursor-pointer hover:text-gray-600"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon width={20} height={20} />
    </div>
  );
};
