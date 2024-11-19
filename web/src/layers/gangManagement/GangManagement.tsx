import React from 'react';
import { useVisibilityState } from '../../state/visibility';
import { useSetCharacter, useSetEntryLeaveAlert, useSetGang, useSetGangAccess, useSetRosterRecords, useSetTurfTypes, useSetTurfs } from '../../state';
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { default as locales, setLocale } from '../../locales';
import type  { Character, Turf, TurfTypeData } from '../../typings';
import { fetchNui } from '../../utils/fetchNui';
import { AppShell, Box, createStyles, Transition } from '@mantine/core';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Turfs from './pages/turfs/Turfs';
import Logs from './pages/logs/Logs';
import LoaderModal from './components/LoaderModal';
import { ModalsProvider } from '@mantine/modals';
import Roster from './pages/roster/Roster';
import type  { Roster as RosterType } from '../../typings';

import type { Gang, GangAccess } from '../../typings/gang';

const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: 1650,
    height: 825,
    zIndex: 1,
    "@media (max-width: 1599px)": {
      width: 1200,
      height: 700,
    },

    "@media (max-width: 1279px)": {
      width: 1000,
      height: 600,
    },
  },
  body: {
    width: 'inherit',
    height: 'inherit',
    backgroundColor: theme.colors.durple[7],
    borderRadius: theme.radius.md,
  },
  main: {
    padding: theme.spacing.xs,
  },
}));

interface setVisibleData {
  player: Character;
  gang: Gang;
  gangAccess: GangAccess;
  turfData: { [key: string]: Partial<Turf>};
}

const GangManagement: React.FC = () => {
  const { classes } = useStyles();
  const [visible, setVisible] = useVisibilityState();
  const setCharacter = useSetCharacter();
  const setGang = useSetGang();
  const setGangAccess = useSetGangAccess();
  const setRecords = useSetRosterRecords();
  const setTurfs = useSetTurfs();
  const setTurfTypes = useSetTurfTypes();
  const setEntryLeaveAlert = useSetEntryLeaveAlert();

  useNuiEvent(
    'setInitData',
    async (data: {
      locale: string;
      turfTypes: TurfTypeData;
      entryLeave: boolean
    }) => {
      setLocale(data.locale);
      setTurfTypes(data.turfTypes)
      setEntryLeaveAlert(data.entryLeave)
    }
  );

  useNuiEvent('setVisible', (data?: setVisibleData) => {
    setVisible(!!data);
    if (data) {
      setCharacter(data.player)
      setGang(data.gang)
      setGangAccess(data.gangAccess)
      setTurfs((prevTurfs) => (prevTurfs.map((prevTurf) => ({ ...prevTurf, ...data.turfData[prevTurf.name] }))));
    }
  });

  useNuiEvent('updateMember', (data: {[key in keyof RosterType]: any}) => {
    setRecords((records) => records.map((record) => record.citizenid === data.citizenid ? { ...record, data } : record));
  })

  useNuiEvent('addMember', (data: RosterType) => {
    setRecords((records) => [...records, data]);
  })

  useNuiEvent('removeMember', (data: {citizenid: string}) => {
    setRecords((records) => records.filter((record) => record.citizenid !== data.citizenid));
  })

  React.useEffect(() => {
    const handleESC = (e: KeyboardEvent) => {
      if (visible && e.key === 'Escape') {
        setVisible(false);
        fetchNui('hideUi');
      }
    };

    window.addEventListener('keydown', handleESC);

    return () => window.removeEventListener('keydown', handleESC);
  }, [visible, setVisible]);

  return (
    <>
      <Box className={classes.container}>
        <Transition transition="slide-up" mounted={visible}>
          {(style) => (
            <AppShell
              style={style}
              navbar={<Navbar />}
              fixed={false}
              className="modal-container"
              classNames={{ root: classes.root, body: classes.body, main: classes.main }}
            >
              <ModalsProvider modalProps={{ target: '.modal-container' }}>
                <Routes>
                  <Route path="/" element={<Roster />} />
                  <Route path="/turfs" element={<Turfs />} />
                  <Route path="/logs" element={<Logs />} />
                </Routes>
                <LoaderModal />
              </ModalsProvider>
            </AppShell>
          )}
        </Transition>
      </Box>
    </>
  );
};

export default GangManagement;