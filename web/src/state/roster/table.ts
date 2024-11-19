import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { Roster} from '../../typings';

const rosterRecordsAtom = atom<Roster[]>([]);
const totalRosterRecordsAtom = atom<number>(0);
const onlineRoasterRecordsAtom = atom<number>(0);

export const useTotalRosterRecords = () => useAtomValue(totalRosterRecordsAtom);
export const useTotalRosterRecordsState = () => useAtom(totalRosterRecordsAtom);

export const useOnlineRosterRecords = () => useAtomValue(onlineRoasterRecordsAtom);
export const useSetOnlineRosterRecords = () => useSetAtom(onlineRoasterRecordsAtom);

export const useRosterRecords = () => useAtomValue(rosterRecordsAtom);
export const useSetRosterRecords = () => useSetAtom(rosterRecordsAtom);
export const useRosterRecordsState = () => useAtom(rosterRecordsAtom);
