import { Box, createStyles, Grid, Stack, Switch } from '@mantine/core';
import MapWrapper from './components/MapWrapper';
import TurfsContainer from './components/calls/TurfsContainer';
import locales from '../../../../locales';
import TurfActions from './components/actions/TurfActions';

const useStyles = createStyles((theme) => ({
  container: {
    height: '100%',
    backgroundColor: theme.colors.durple[6],
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
    padding: theme.spacing.md,
  },
}));

const Turfs: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Grid grow h="100%" mt={0} mb={0}>
      <Grid.Col span={6} pb={0} pt={0} px="xs">
        <Box className={classes.container} p={0}>
          <MapWrapper />
        </Box>
      </Grid.Col>
      <Grid.Col span={4} p={0} pr="xs">
        <Stack className={classes.container}>
          <TurfsContainer />
          <TurfActions />
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default Turfs;
