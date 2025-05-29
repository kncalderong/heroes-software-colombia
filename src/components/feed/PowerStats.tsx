"use client";

import { HeroeStats } from "@/types/heroe";
import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

export default function PowerStats({ powerStats }: { powerStats: HeroeStats }) {
  console.log(powerStats);
  const [stats, setStats] = useState<HeroeStats>({
    combat: 0,
    durability: 0,
    intelligence: 0,
    power: 0,
    speed: 0,
    strength: 0,
  });
  useEffect(() => {
    console.log("powerStats", powerStats);
    if (!powerStats) return;
    const timer = setTimeout(
      () =>
        setStats({
          combat: powerStats.combat,
          durability: powerStats.durability,
          intelligence: powerStats.intelligence,
          power: powerStats.power,
          speed: powerStats.speed,
          strength: powerStats.strength,
        }),
      500
    );
    return () => clearTimeout(timer);
  }, [powerStats]);

  return (
    <div className="w-full space-y-4">
      <p className="font-bold text-lg underline">Power Stats</p>
      <div className="flex">
        <div className="w-1/4 flex flex-col gap-2">
          {Object.entries(stats).map(([key, value]) => (
            <p key={key} className="capitalize font-medium text-sm">
              {key}: <span className="text-white">{value}</span>
            </p>
          ))}
        </div>
        <div className="w-3/4 flex flex-col gap-2">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="h-[20px] flex items-center">
              <Progress value={value} className="h-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
