import React from 'react';
import { Badge, createStyles, Divider, Group, Stack, Text, Tooltip } from '@mantine/core';
import { Turf } from '../../../../../../typings';
import TurfActionMenu from './TurfActionMenu';
import ItemBadge from './ItemBadge';
import {
  IconBuildingCastle,
  IconSparkles,
  IconStarFilled,
  IconSwords,
  type Icon,
  IconCannabis,
  IconMedicineSyrup,
  IconBong,
  IconHexagonFilled
} from '@tabler/icons-react';
import sf from 'seconds-formater';

const useStyles = createStyles((theme) => ({
  callContainer: {
    background: theme.colors.durple[5],
    boxShadow: theme.shadows.md,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
  },
}));

const icons: Record<string, Icon> = {
	weed: IconCannabis,
	opium: IconMedicineSyrup,
	meta: IconBong,
  coke: IconHexagonFilled
}

const getDrugIcon = (drug: string) => {
  const Icon = icons[drug]
  return <Icon size={16} />
}

const TurfCard: React.FC<{ turf: Turf }> = ({ turf }) => {
  const { classes } = useStyles();

  return (
    <Stack className={classes.callContainer}>
      <Group spacing="xs" position="apart" noWrap>
        <Group spacing="xs" position="left" noWrap>
          <Text lineClamp={1}>{turf.label}</Text>
          <Tooltip
            label={
              turf.mode === 'WARZONE'
                ? 'Sprays, presence, drugs, kills, crafting etc...'
                : 'Delivering illegal items (boosting, heists, robberies) to the local'
            }
          >
            <Badge>{turf.mode}</Badge>
          </Tooltip>
          {turf.metadata?.drug && <Badge
            leftSection={getDrugIcon(turf.metadata.drug.name)}
            >{turf.metadata.drug.label}</Badge>}
        </Group>
        <TurfActionMenu turf={turf} />
      </Group>
      <Stack spacing={2} c="dark.2">
        <Group spacing="xs">
          <IconBuildingCastle size={16} />
          <Text size="sm">{turf.controllingGang.label}</Text>
        </Group>
        <Group spacing="xs">
          <IconStarFilled size={16} />
          <Text size="sm">{turf.level}</Text>
        </Group>
        <Group spacing="xs">
          <IconSparkles size={16} />
          <Text size="sm">{turf.points}p</Text>
        </Group>
        {turf.contestingGangs && turf.contestingGangs.length > 0 && (
          <Group spacing="xs">
            <IconSwords size={16} />
            <Stack spacing={0}>
              {turf.contestingGangs.map((gang) => (
                <Text size="sm">
                  {gang.label} | {sf.convert(gang.timeLeft / 1000).format()}
                </Text>
              ))}
            </Stack>
          </Group>
        )}
      </Stack>
      {turf.items && Array.isArray(turf.items) && turf.items.length > 0 && (
        <>
          <Divider label="Rewarding" labelPosition="center" />
          <Group spacing="xs">
            {turf.items.map((item) => (
              <ItemBadge key={item.label} item={item} />
            ))}
          </Group>
        </>
      )}
    </Stack>
  );
};

export default React.memo(TurfCard);
