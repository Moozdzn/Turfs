import { Divider, Group, SimpleGrid, Text } from '@mantine/core';
import { Turf } from '../../../../../../typings';
import TurfInfoCard from './components/TurfInfoCard';
import { useTurfTypes } from '../../../../../../state';

interface Props {
  turf: Turf;
}

const TurfInfo: React.FC<Props> = ({ turf }) => {
	const turfTypes = useTurfTypes();
  	const turfData = turfTypes[turf.perk];

  return (
    <>
      <SimpleGrid cols={turfData.LEVEL.length} spacing="md">
        {turfData.LEVEL.map((level, index) => (
          <TurfInfoCard key={index + 1} turfLevel={turf.level} level={index + 1} levelData={level} />
        ))}
      </SimpleGrid>
      <Divider m="md"/>
      <Group position="center" >
        <Text size="xs" color="dimmed">
          Turf can be leveled up by interacting with the turf local when all requirements have been met.
        </Text>
      </Group>
    </>
  );
};

export default TurfInfo;
