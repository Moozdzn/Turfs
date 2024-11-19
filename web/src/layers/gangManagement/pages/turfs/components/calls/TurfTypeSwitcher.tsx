import React from 'react';
import { SegmentedControl } from '@mantine/core';
import { useTurfFilterState } from '../../../../../../state';
import locales from '../../../../../../locales';

const TurfTypeSwitcher: React.FC = () => {
  const [turfType, setTurfType] = useTurfFilterState();

  return (
    <SegmentedControl
      styles={{
        root: { height: 36 },
        label: { height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' },
      }}
      fullWidth
      value={turfType}
      onChange={(value: 'all' | 'inControl' | 'contesting') => setTurfType(value)}
      data={[
        { label: locales.all, value: 'all' },
        { label: locales.inControl, value: 'inControl' },
        { label: locales.contesting, value: 'contesting' },
      ]}
    />
  );
};

export default TurfTypeSwitcher;
