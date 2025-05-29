"use server";

import { HeroesResponse } from "@/types/heroe";

export async function getHeroesTotalPages(pageSize: number) {
  try {
    const targetUrl = `https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes?size=${pageSize}`;
    const response = await fetch(targetUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch total number of pages");
    }
    const data: HeroesResponse = await response.json();
    return data.lastPage;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of pages");
  }
}
