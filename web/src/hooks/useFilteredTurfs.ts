import { useTurfFilter, useTurfs, useGang } from '../state';

export const useFilteredTurfs = () => {
  const turfs = useTurfs();
  const turfType = useTurfFilter();
  const gang = useGang();

  if (turfType === 'inControl') return turfs.filter((turf) => turf.controllingGang.name === gang.name);
  else if (turfType === 'contesting')
    return turfs.filter((turf) => turf.contestingGangs.find((contestingGang) => contestingGang.name === gang.name));

  return turfs;
};
