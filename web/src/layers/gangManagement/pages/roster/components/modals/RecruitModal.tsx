import React from 'react';
import { Button, Loader, Stack, Center } from '@mantine/core';
import { fetchNui } from '../../../../../../utils/fetchNui';
import { modals } from '@mantine/modals';
import { useSetRosterRecords } from '../../../../../../state/roster';
import { Roster } from '../../../../../../typings';
import NotFound from '../../../../components/NotFound';
import { IconMoodLookDown } from '@tabler/icons-react';
import locales from '../../../../../../locales';

interface NearbyPlayer {
  citizenid: string;
  firstname: string;
  lastname: string;
  source: number;
  distance: number;
}

const DEBUG_DATA: NearbyPlayer[] = [
  {
    citizenid: 'AF32142',
    lastname: 'Arc',
    firstname: 'Joana',
    source: 1,
    distance: 3,
  },
  {
    citizenid: 'QE32142',
    lastname: 'Tusk',
    firstname: 'Elon',
    source: 2,
    distance: 5,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    distance: 7,
  },
];

interface RecruitMember {
  status: boolean;
  data: Roster;
}

const DEBUG_RETURN_DATA: RecruitMember = {
  status: true,
  data: {
    citizenid: 'AAAAAAA',
    firstname: 'Leroy',
    lastname: 'Jenkins',
    source: 123,
    role: 1,
    label: 'Goon',
    phoneNumber: '555-555-5555',
    online: true,
  }
}

const RecruitModal: React.FC = () => {
  const [data, setData] = React.useState<NearbyPlayer[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState('');
  const setRecords = useSetRosterRecords();

  React.useEffect(() => {
    const fetchData = async () => await fetchNui<NearbyPlayer[]>('getNearbyPlayers', null, { data: DEBUG_DATA, delay: 500 });

    fetchData().then((resp) => {
      setData(resp);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <Center p="md">
        <Loader />
      </Center>
    );

  return (
    <Stack>
      {data.length > 0 ? (
        data.map((player) => (
          <Button
            key={player.citizenid}
            variant="outline"
            color="blue"
            type="submit"
            loading={isSubmitting === player.citizenid}
            disabled={isSubmitting !== ''}
            onClick={async () => {
              setIsSubmitting(player.citizenid);
              const { status, data } = await fetchNui<RecruitMember>('recruitPlayer', player.citizenid, {
                data: DEBUG_RETURN_DATA,
                delay: 500,
              });
              if (status) setRecords((prev) => [...prev, data]);
              modals.closeAll();
            }}
          >
            {`${player.firstname} ${player.lastname} (${player.distance.toFixed(2)}m)`}
          </Button>
        ))
      ) : (
        <NotFound icon={<IconMoodLookDown size={36} />} label={locales.no_one_nearby} />
      )}
    </Stack>
  );
};

export default RecruitModal;
