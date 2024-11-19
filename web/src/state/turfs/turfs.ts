import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { Turf, TurfStaticData, turfType, TurfTypeData } from '../../typings';
import { debugTurfs, debugTurfTypes } from '../../layers/dev/debug';
import { isEnvBrowser } from '../../utils/misc';
import { fetchNui } from '../../utils/fetchNui';

const UNCLAIMED_COLOR = 'rgb(100, 100, 100)';

const Turfs: Turf[] = []
//@ts-ignore
const TurfTypes: TurfTypeData = {}

const turfFilterAtom = atom<'all' | 'inControl' | 'contesting'>('all');
export const useTurfFilterState = () => useAtom(turfFilterAtom);
export const useTurfFilter = () => useAtomValue(turfFilterAtom);

const turfsAtom = atom<Turf[]>(Turfs);
export const useTurfs = () => useAtomValue(turfsAtom);
export const useSetTurfs = () => useSetAtom(turfsAtom);

const turfTypesAtom = atom<TurfTypeData>(TurfTypes);
export const useTurfTypes = () => useAtomValue(turfTypesAtom);
export const useSetTurfTypes = () => useSetAtom(turfTypesAtom);

export const loadTurfs = async () => {
  const setTurfs = useSetTurfs();
  const setTurfTypes = useSetTurfTypes();

  let data;
  let res;

  if (isEnvBrowser()) {
    res = [
      debugTurfs,
      debugTurfTypes
    ]
  } else {

    const serverTag = await fetchNui('uiReady', {}, { data: 'PT-pub'});

    data = await Promise.all([
      fetch(`../../../../settings/${serverTag}/turfs.json`),
      fetch(`../../../../settings/${serverTag}/turfTypes.json`)
    ])
    if (data[0].status !== 404) {
      await Promise.all([
        fetch(`../../../../settings/EN-pub/turfs.json`),
        fetch(`../../../../settings/EN-pub/turfTypes.json`)
      ])
    }
    res = await Promise.all(data.map((d) => d.json()));
  }

  const staticData = res[0] as TurfStaticData[];
  const result = staticData.map((turf) => ({
    label: turf.label,
    name: turf.name,
    perk: turf.perk as turfType,
    controllingGang: {
      name: 'none',
      label: 'No Gang',
      color: UNCLAIMED_COLOR,
    },
    position: turf.area.map((point) => [point.y, point.x]),
    level: 0,
    items: [],
    points: 0,
    contestingGangs: [],
    mode: turf.mode as 'WARZONE' | 'RELAXED',
    metadata: turf.metadata
  })
  );

  setTurfs(result);
  setTurfTypes(res[1]);
}