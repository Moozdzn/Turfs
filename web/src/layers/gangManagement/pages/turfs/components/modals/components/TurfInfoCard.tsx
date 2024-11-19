import { Card, Text, Group, Badge, List, Tooltip, createStyles, rem, Title, Stack } from '@mantine/core';
import { IconChevronRight, IconInfoCircleFilled } from '@tabler/icons-react';
import { TurfTypeLevel } from '../../../../../../../typings';
import RequirementBadge from './RequirementBadge';

interface Props {
  turfLevel: number;
  level: number;
  levelData: TurfTypeLevel;
}

const useStyles = createStyles((theme) => ({
  currentCard: {
    background: theme.colors.durple[5],
    borderWidth: rem(1),
    borderRadius: theme.radius.md,
    borderStyle: 'solid',
  },
}));

const TurfInfoCard: React.FC<Props> = ({ turfLevel, level, levelData }) => {
  const { classes } = useStyles();
  const isCurrentLevel = turfLevel === level;
  const isHigherLevel = turfLevel > level;

  const formatListItem = (item: {name: string, min: number, max: number, chance: number, info?: { type?: string; value?: number; percentage?: number; [key: string]: any }}) => {
    const amount = item.min === item.max ? item.min : `${item.min}~${item.max}`
    return `${item.chance * 100}% ${item.name} (${item?.info?.type || amount})`
  }

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      className={classes.currentCard}
      sx={(theme) => ({ borderColor: isCurrentLevel ? theme.colors.blue[1] : theme.colors.durple[5] })}
    >
      <Group position="center">
        <Title order={1} weight={500}>{`Level ${level}`}</Title>
      </Group>
      <Group position="center">
        <Text size="sm" color="dimmed">{isHigherLevel ? 'Purchased' : `Price: $${levelData.price}`}</Text>
      </Group>
      <Group position="left" mt="md" mb="xs">
        <RequirementBadge completed={isHigherLevel} label={`Minimum points: ${levelData.requirements.minimum_points}`} />
        <RequirementBadge completed={isHigherLevel} label={`Minimum hours in control: ${levelData.requirements.hours}`} />
      </Group>
      <Group position="apart">
        <Text>Rewards</Text>
        <Tooltip
          label={`Chances of receiving each item, min and max amounts you can received depending on how many points the turf has.`}
          width={300}
          withinPortal
          multiline
        >
          <IconInfoCircleFilled size={20} />
        </Tooltip>
      </Group>
      <List withPadding size="xs" icon={<IconChevronRight />} center>
        {levelData.items.map((item) => (
          <List.Item key={item.name}>{formatListItem(item)}</List.Item>
        ))}
        {levelData.increment && (
          <List.Item>
            {`Drug selling payout increased ${levelData.increment}x`}
          </List.Item>
        )}
      </List>
    </Card>
  );
};

export default TurfInfoCard;
