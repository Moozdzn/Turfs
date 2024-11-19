import { atom, useAtomValue, useSetAtom, useAtom } from "jotai";

const entryLeaveAlertsAtom = atom<boolean>(false);

export const useEntryLeaveAlert = () => useAtomValue(entryLeaveAlertsAtom);
export const useSetEntryLeaveAlert = () => useSetAtom(entryLeaveAlertsAtom);
export const useEntryLeaveAlertState = () => useAtom(entryLeaveAlertsAtom);
