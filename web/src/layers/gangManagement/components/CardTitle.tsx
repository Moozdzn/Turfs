import React from 'react';
import { Group, Text, Tooltip } from '@mantine/core';

interface Props {
  title: string;
  icon?: React.ReactNode;
  tooltip?: string;
}

const CardTitle: React.FC<Props> = (props) => {
  return (
    <Group w="100%" position="apart">
      <Text size="xl">{props.title}</Text>
      {props.tooltip ? 
        <Tooltip label={props.tooltip}>
          {props.icon}
        </Tooltip> 
        : props.icon
      }
    </Group>
  );
};

export default CardTitle;
