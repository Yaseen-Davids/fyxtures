import { FC, useMemo } from "react";

type Stats = {
  name: any;
  value: number;
  color?: string;
};

type StatsBarProps = {
  data: Stats[];
};

export const StatsBar: FC<StatsBarProps> = ({ data }) => {
  const total = useMemo(() => data.reduce((a, b) => (a += b.value), 0), [data]);

  return (
    <div className="flex flex-row">
      {data.map((d) => (
        <Section stats={d} total={total} />
      ))}
    </div>
  );
};

type SectionProps = {
  total: number;
  stats: Stats;
};

const Section: FC<SectionProps> = ({ total, stats }) => {
  return (
    <div
      style={{ width: `${(stats.value / total) * 100}%` }}
      className={`${stats.color} text-xxs sm:text-sm md:text-sm p-2 sm:p-3 md:p-4 text-center font-bold text-nowrap`}
    >
      <p>{stats.name}</p>
    </div>
  );
};
