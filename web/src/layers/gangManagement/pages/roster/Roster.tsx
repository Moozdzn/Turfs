import type React from 'react';
import { createStyles, Group, SimpleGrid, Stack } from '@mantine/core';
import RosterTable from './components/RosterTable';
import ListSearch from '../../components/ListSearch';
import { tableSearchAtoms, useSetRosterSearchDebounce } from '../../../../state/roster/tableSearch';
import HireMemberButton from './components/RecruitButton';
import CardTitle from '../../components/CardTitle';
import Overview from './components/Overview';

const useStyles = createStyles((theme) => ({
  searchContainer: {
    backgroundColor: theme.colors.durple[6],
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
    width: '100%',
  },
}));

const Roster: React.FC = () => {
  const { classes } = useStyles();
  const setRosterDebounce = useSetRosterSearchDebounce();

  return (
    <SimpleGrid cols={2} spacing='xs' h='80%'>
      <Stack spacing="xs" p='xs'>
        <CardTitle title="Members"/>
        <Group p="xs" className={classes.searchContainer} noWrap spacing="xs">
          <ListSearch
            setDebouncedValue={setRosterDebounce}
            valueAtom={tableSearchAtoms.currentValueAtom}
            style={{ flex: '1 0 0' }}
          />
          <HireMemberButton />
        </Group>
        <RosterTable />
      </Stack>
      <Overview />
    </SimpleGrid>
  );
};

export default Roster;
