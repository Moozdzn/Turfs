import React from 'react';
import CardTitle from '../../../../components/CardTitle';
import { IconBuildingCastle } from '@tabler/icons-react';
import TurfTypeSwitcher from './TurfTypeSwitcher';
import TurfList from './TurfList';
import locales from '../../../../../../locales';

const TurfsContainer: React.FC = () => {
  return (
    <>
      <CardTitle title={locales.turfs} icon={<IconBuildingCastle />} />
      <TurfTypeSwitcher />
      <TurfList />
    </>
  );
};

export default TurfsContainer;
