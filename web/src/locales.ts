import { isEnvBrowser } from './utils/misc';
import locale from '../locales/en.json';
import { printf } from 'fast-printf';

type Translations = Record<string, string | number>

const locales: Translations = {};

declare global {
  interface String {
    format(...args: any[]): string;
  }
}

String.prototype.format = function (...args: any[]): string {
  return printf(this as string, ...args);
};

export async function setLocale(data: string) {
  for (const key in locales) locales[key] = key;
  const locale: Translations = await import(`../locales/${data}.json`)
  for (const [key, value] of Object.entries(locale.default)) {
    locales[key] = value;
  }
}

if (isEnvBrowser()) {
  for (const [key, value] of Object.entries(locale)) {
    locales[key] = value;
  }
}

export default locales as typeof locale;
