import { atom, useAtomValue, useSetAtom } from 'jotai';
import L from 'leaflet';

const turfMapAtom = atom<L.Map | null>(null);

export const useTurfMap = () => useAtomValue(turfMapAtom);
export const useSetTurfMap = () => useSetAtom(turfMapAtom);
