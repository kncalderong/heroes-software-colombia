export interface HeroeBiography {
  firstAppearance: string;
  placeOfBirth: string;
  aliases: string[];
  fullName: string;
  publisher: string;
  alterEgos: string;
  alignment: string;
}

export interface HeroeWork {
  occupation: string;
  base: string;
}

export interface HeroeImages {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export interface HeroeAppearance {
  weight: string[];
  hairColor: string;
  gender: string;
  race: string;
  eyeColor: string;
  height: string[];
}

export interface HeroeConnections {
  groupAffiliation: string;
  relatives: string;
}

export interface HeroeStats {
  combat: number;
  power: number;
  strength: number;
  speed: number;
  intelligence: number;
  durability: number;
}

export interface Heroe {
  biography: HeroeBiography;
  work: HeroeWork;
  slug: string;
  images: HeroeImages;
  appearance: HeroeAppearance;
  connections: HeroeConnections;
  id: number;
  name: string;
  powerStats: HeroeStats;
}

export interface HeroesResponse {
  length: number;
  size: number;
  page: number;
  firstPage: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
  items: Heroe[];
}
