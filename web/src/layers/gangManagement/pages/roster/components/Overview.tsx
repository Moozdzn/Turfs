import React from 'react';
import { IconInfoCircleFilled, IconKey, IconUsersGroup } from '@tabler/icons-react';
import locales from '../../../../../locales';
import { Stack, createStyles, Text, MultiSelect, Button, Group, Switch } from '@mantine/core';
import CardTitle from '../../../components/CardTitle';
import {
  useGangRoles,
  useGangAccess,
  useOnlineRosterRecords,
  useTotalRosterRecords,
  useCharacter,
} from '../../../../../state';
import { fetchNui } from '../../../../../utils/fetchNui';
import { hasPermission } from '../../../../../helpers';

const useStyles = createStyles((theme) => ({
  overviewContainer: {
    background: theme.colors.durple[6],
    boxShadow: theme.shadows.md,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
  },
  cardContainer: {
    background: theme.colors.durple[4],
    boxShadow: theme.shadows.md,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
  }
}));

const Overview: React.FC = () => {
  const { classes } = useStyles();

  const character = useCharacter();

  const totalRoster = useTotalRosterRecords();
  const onlineRoster = useOnlineRosterRecords();

  const roles = useGangRoles();

  const [gangAccess, setGangAccess] = useGangAccess();
  const data = React.useMemo(
    () => roles.map((role, index) => ({ label: role.name, value: index.toString() })),
    [roles]
  );

  const leaveGang = () => fetchNui('leaveGang', {}, { data: true });

  return (
    <Stack spacing={20} p="xs" className={classes.overviewContainer}>
      <CardTitle title="Information" icon={<IconUsersGroup />} />
      <Stack className={classes.cardContainer} spacing={20}>
        <Text>{locales.total_members.format(totalRoster)}</Text>
        <Text>{locales.members_online.format(onlineRoster)}</Text>
      </Stack>
      <CardTitle title="Access" icon={<IconKey />} />
      {gangAccess.map(({ name, label, grades, description }) => (
        <Stack className={classes.cardContainer} spacing={5} key={name}>
          <CardTitle title={label} icon={<IconInfoCircleFilled />} tooltip={description} />
          <MultiSelect
            data={data}
            label="Select roles"
            value={grades.map((v) => v.toString())}
            onChange={async (value: string[]) => {
              const resp = await fetchNui(
                'setGangAccess',
                { access: name, grades: value.map((v) => Number.parseInt(v)) },
                { data: true }
              );
              if (!resp) return;
              setGangAccess((prev) => prev.map((v) => (v.name === name ? { ...v, grades: value } : v)) as typeof prev);
            }}
            disabled={!hasPermission(character, 'manage_accesses')}
          />
        </Stack>
      ))}
      <CardTitle title="Actions" />
      <Group position="left">
        <Button color="red" onClick={leaveGang}>
          {locales.leave_gang}
        </Button>
      </Group>
    </Stack>
  );
};

export default Overview;
