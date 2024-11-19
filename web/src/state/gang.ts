import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { isEnvBrowser } from '../utils/misc';
import { Gang, GangRole, GangAccess } from '../typings/gang';

const DEBUG_GANG: Gang = {
    name: 'sweetline',
    label: 'Sweetline Mafia',
    roles: [
        { name: 'recruit' },
        { name: "enforcer" },
        { name: "underboss" },
        { name: "boss", isboss: true },
    ],
    color: 'blue'
};

const DEBUG_GANG_ACCESS: GangAccess = [
  { name: 'cars', label: 'Cars', grades: ['1', '3'], description: 'Access to cars' },
  { name: 'stash', label: 'Stash', grades: ['2', '3'], description: 'Access to stash' },
  { name: 'rewards', label: 'Rewards', grades: ['2', '3'], description: 'Access to rewards' },
];


const gangAtom = atom<Gang>(
  isEnvBrowser()
    ? DEBUG_GANG
    : {
        name: '',
        label: '',
        color: 'blue',
        roles: [
          { name: '' }
        ]
      }
);

const gangRolesAtom = atom<GangRole[]>((get) => get(gangAtom).roles);

const gangAccessAtom = atom<GangAccess>(
  isEnvBrowser()
    ? DEBUG_GANG_ACCESS
    : []
);

export const useGangAccess = () => useAtom(gangAccessAtom);
export const useSetGangAccess = () => useSetAtom(gangAccessAtom);

export const useGangRoles = () => useAtomValue(gangRolesAtom);

export const useGang = () => useAtomValue(gangAtom);
export const useSetGang = () => useSetAtom(gangAtom);
export const useGangState = () => useAtom(gangAtom);