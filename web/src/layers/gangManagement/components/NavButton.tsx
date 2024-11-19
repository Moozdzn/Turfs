import React from 'react';
import { createStyles, Stack, Tooltip, UnstyledButton } from '@mantine/core';

const useStyles = createStyles((theme, params: { isSmall?: boolean; isActive?: boolean, color?: string }) => {
  const colors = theme.fn.variant({ color: params.color || 'blue', variant: 'light' });

  return {
    button: {
      color: params.isActive ? colors.color : theme.colors.dark[0],
      backgroundColor: params.isActive ? colors.background : undefined,
      padding: !params.isSmall ? theme.spacing.md : 8,
      borderRadius: theme.radius.md,
      fontWeight: 500,
      transition: '150ms',
      width: params.isSmall ? 50 : undefined,
      '&:hover': !params.isActive && { backgroundColor: params.color && colors.background || theme.colors.durple[2], color: 'white' },
    },
  };
});

const NavButton: React.FC<{
  icon: React.ComponentType;
  label: string;
  isActive: boolean;
  handleClick: () => void;
  path?: string;
  color?: string;
  isSmall?: boolean;
}> = (props) => {
  const { classes } = useStyles({ isSmall: props.isSmall, isActive: props.isActive, color: props.color });

  return (
    <UnstyledButton mb='md' onClick={props.handleClick} className={classes.button}>
      <Tooltip label={props.label} position="right">
        <Stack align="center">
          <props.icon />
        </Stack>
      </Tooltip>
    </UnstyledButton>
  );
};

export default React.memo(NavButton);
