import React from 'react';
import { Button } from '@mantine/core';
import { IconUserPlus } from '@tabler/icons-react';
import { modals } from '@mantine/modals';
import RecruitModal from './modals/RecruitModal';
import { useCharacter } from '../../../../../state';
import { hasPermission } from '../../../../../helpers';
import locales from '../../../../../locales';

const RecruitButton: React.FC = () => {
  const character = useCharacter();

  return (
    <Button
      disabled={!hasPermission(character, 'hire')}
      variant="light"
      leftIcon={<IconUserPlus size={20} />}
      onClick={() => modals.open({ title: locales.recruit, size: 'xs', children: <RecruitModal /> })}
    >
      {locales.recruit}
    </Button>
  );
};

export default RecruitButton;
