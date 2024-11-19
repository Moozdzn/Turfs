import React from 'react';
import TurfCard from './TurfCard';
import { Stack } from '@mantine/core';
import { useFilteredTurfs } from '../../../../../../hooks/useFilteredTurfs';

const TurfList: React.FC = () => {
  const turfs = useFilteredTurfs();

  return (
    <Stack sx={{ overflowY: 'scroll', flex: '1 1 0' }}>
      {turfs.map((turf) => (
        <TurfCard key={turf.name} turf={turf} />
      ))}
    </Stack>
  );
};

export default TurfList;
