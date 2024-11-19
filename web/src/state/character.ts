import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { Character } from '../typings';
import { isEnvBrowser } from '../utils/misc';

const DEBUG_CHARACTER: Character = {
  citizenid: '1993201',
  firstname: 'Svetozar',
  lastname: 'Miletić',
  grade: 3,
};


const characterAtom = atom<Character>(
  isEnvBrowser()
    ? DEBUG_CHARACTER
    : {
        citizenid: '',
        firstname: '',
        lastname: '',
        grade: 0,
      }
);

export const useCharacter = () => useAtomValue(characterAtom);
export const useSetCharacter = () => useSetAtom(characterAtom);
export const useCharacterState = () => useAtom(characterAtom);
