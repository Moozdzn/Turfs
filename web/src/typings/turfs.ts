export interface TurfUpgradeItem {
  name: string;
  label: string;
  description: string;
  amount: number;
}

export type turfType = 'MONEY' | 'MATERIALS' | 'GUN_PARTS' | 'DRUGS';

export interface TurfStaticData {
  name: string;
  label: string;
  perk: turfType;
  npc: {
    model: string;
    position: { x: number; y: number; z: number };
    heading: number;
  };
  area: Array<{ x: number; y: number}>;
  mode: 'WARZONE' | 'RELAXED';
  metadata?: {
    [key: string]: any;
  }
}

export interface Turf extends Omit<TurfStaticData, 'npc' | 'area'> {
  position: number[][];
  controllingGang: { name: string; color: string; label: string };
  contestingGangs: { name: string; label: string; timeLeft: number }[];
  level: number;
  points: number;
  items: TurfUpgradeItem[];
}

export interface TurfTypeLevel {
  price: number;
  requirements: {
    minimum_points: number;
    hours: number;
  };
  items: { name: string; min: number; max: number; chance: number; info?: { type?: string; value?: number; percentage?: number; [key: string]: any } }[];
  increment: number;
}

export type TurfTypeData = {
  [key in turfType]: {
    LEVEL: TurfTypeLevel[];
  };
};
