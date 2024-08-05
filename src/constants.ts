import type { PlasmoCSConfig } from 'plasmo';

export const DEFAULT_URLS = ['https://www.nytimes.com/crosswords/game/*'];

export const DEFAULT_WORLD = 'MAIN';

export const DEFAULT_PLASMO_CONFIG: PlasmoCSConfig = {
  matches: DEFAULT_URLS,
  world: DEFAULT_WORLD
};
