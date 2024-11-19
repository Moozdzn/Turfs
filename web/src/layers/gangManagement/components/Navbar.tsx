import { createStyles, Stack } from '@mantine/core';
import { IconUsersGroup, IconMap2, IconSettings, IconLetterX, IconZoom } from '@tabler/icons-react';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import NavButton from './NavButton';
import { fetchNui } from '../../../utils/fetchNui';
import { useSetVisibility } from '../../../state/visibility';
import locales from '../../../locales';

const useStyles = createStyles((theme) => ({
  navContainer: {
    backgroundColor: theme.colors.durple[6],
    borderTopLeftRadius: theme.radius.md,
    borderBottomLeftRadius: theme.radius.md,
    width: 300,
    height: '100%',
    padding: theme.spacing.xs,
  },
}));

const Navbar: React.FC = () => {
  const { classes } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const setVisible = useSetVisibility();
  const NAV_BUTTONS = React.useMemo(
    () => [
      {
        label: locales.roster,
        icon: IconUsersGroup,
        path: '/',
      },
      {
        label: locales.turfs,
        icon: IconMap2,
        path: '/turfs',
      },
      {
        label: locales.logs,
        icon: IconZoom,
        path: '/logs',
      },
    ],
    []
  );

  return (
    <Stack w={80} className={classes.navContainer} justify='space-between'>
      <Stack spacing={1} justify="center" align="center">
        {NAV_BUTTONS.map((button) => (
          <NavButton
            key={button.path}
            icon={button.icon}
            label={button.label}
            path={button.path}
            isActive={location.pathname === button.path}
            handleClick={() => navigate(button.path)}
          />
        ))}
      </Stack>
      <Stack spacing={1} justify="center" align="center">
        <NavButton
          key='close'
          icon={IconLetterX}
          label='Close'
          isActive={false}
          color='red'
          handleClick={() => {
            setVisible(false);
            fetchNui('hideUi');
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Navbar;
