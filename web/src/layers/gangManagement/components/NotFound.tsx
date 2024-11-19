import React from 'react';
import { Stack, Text } from '@mantine/core';
import type { IconProps } from '@tabler/icons-react';

interface Props {
  icon: JSX.Element;
  label: string;
}

const NotFound: React.FC<Props> = ({icon, label}) => {
  return (
    <Stack spacing={0} c="dark.2" justify="center" align="center">
      {icon}
      <Text size="xl">{label}</Text>
    </Stack>
  );
};

export default NotFound;
