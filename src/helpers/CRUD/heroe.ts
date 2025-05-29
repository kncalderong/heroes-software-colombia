"use server";

import { Heroe, HeroesResponse } from "@/types/heroe";

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

export async function getHeroes(pageSize: number, page: number) {
  try {
    const targetUrl = `https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/heroes?size=${pageSize}&page=${page}`;
    const response = await fetch(targetUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch heroes");
    }
    const data: HeroesResponse = await response.json();
    return data.items;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch heroes");
  }
}

export async function getHeroById(id: string) {
  try {
    const targetUrl = `https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api/hero?id=${id}`;
    const response = await fetch(targetUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch hero");
    }
    const data: Heroe = await response.json();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch hero");
  }
}
