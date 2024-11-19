import React, { useEffect, useState } from 'react';
import { DataTable, type DataTableColumn } from 'mantine-datatable';
import { fetchNui } from '../../../../../utils/fetchNui';
import { Avatar, createStyles, Tooltip, Text } from '@mantine/core';
import type { Roster } from '../../../../../typings';
import RosterMemberMenu from './RosterOfficerMenu';
import { useRosterRecordsState, useSetOnlineRosterRecords, useTotalRosterRecordsState } from '../../../../../state/roster';
import { useIsRosterDebouncing, useRosterSearchDebouncedValue } from '../../../../../state/roster/tableSearch';
import { IconWorld, IconWorldOff } from '@tabler/icons-react';
import locales from '../../../../../locales';
import { setClipboard } from '../../../../../utils/setClipboard';

const DEBUG_DATA: Roster[] = [
  {
    citizenid: 'AF32142',
    lastname: 'Doe',
    firstname: 'John',
    source: 1,
    label: 'Boss',
    role: 3,
    phoneNumber: '555-555-5555',
    online: true,
    isboss: true,
  },
  {
    citizenid: 'QE32142',
    lastname: 'Doe',
    firstname: 'John',
    source: 2,
    label: 'Goon',
    role: 1,
    phoneNumber: '555-555-5555',
    online: false,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    label: 'Manager',
    role: 2,
    phoneNumber: '555-555-5555',
    online: false,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    label: 'Manager',
    role: 2,
    phoneNumber: '555-555-5555',
    online: false,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    label: 'Manager',
    role: 2,
    phoneNumber: '555-555-5555',
    online: false,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    label: 'Manager',
    role: 2,
    phoneNumber: '555-555-5555',
    online: false,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    label: 'Manager',
    role: 2,
    phoneNumber: '555-555-5555',
    online: false,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    label: 'Manager',
    role: 2,
    phoneNumber: '555-555-5555',
    online: false,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    label: 'Manager',
    role: 2,
    phoneNumber: '555-555-5555',
    online: false,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    label: 'Manager',
    role: 2,
    phoneNumber: '555-555-5555',
    online: false,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    label: 'Manager',
    role: 2,
    phoneNumber: '555-555-5555',
    online: false,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    label: 'Manager',
    role: 2,
    phoneNumber: '555-555-5555',
    online: false,
  },
  {
    citizenid: 'CA92151',
    lastname: 'Doe',
    firstname: 'John',
    source: 3,
    label: 'Manager',
    role: 2,
    phoneNumber: '555-555-5555',
    online: false,
  },
];

const TextToCopy: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const styles = {
    '&:hover': {
      cursor: 'copy',
    },
  };

  const copy = () => {
    setClipboard(text);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <Tooltip color={copied ? 'green' : undefined} label={copied ? locales.copied : locales.click_copy} withinPortal>
      <Text sx={styles} onClick={copy}>
        {text}
      </Text>
    </Tooltip>
  );
};

const COLUMNS: DataTableColumn<Roster>[] = [
  {
    accessor: 'online',
    title: 'Status',
    render: (record) => {
      return (
        <Avatar color={record.online ? 'green' : 'red'} radius="md" size="lg">
          {record.online ? <IconWorld /> : <IconWorldOff />}
        </Avatar>
      );
    },
  },
  {
    accessor: 'name',
    title: locales.name,
    render: (record) => `${record.firstname} ${record.lastname}`,
  },
  {
    accessor: 'phoneNumber',
    title: locales.phoneNumber,
    render: (record) => <TextToCopy text={record.phoneNumber} />,
  },
  {
    accessor: 'citizenid',
    title: locales.citizenid,
    render: (record) => <TextToCopy text={record.citizenid} />,
  },
  {
    accessor: 'label',
    title: locales.title,
  },
  {
    accessor: 'actions',
    title: '',
    render: (record) => <RosterMemberMenu member={record} />,
  },
];

const useStyles = createStyles((theme, params: { isEmpty: boolean }) => ({
  root: {
    backgroundColor: theme.colors.durple[6],
    '&& td': {
      backgroundColor: theme.colors.durple[params.isEmpty ? 6 : 5],
    },
  },
  header: {
    '&& th': {
      backgroundColor: theme.colors.durple[6],
    },
  },
  pagination: {
    backgroundColor: theme.colors.durple[6],
    button: {
      backgroundColor: theme.colors.durple[4],
      border: 'none',
      '&:not([data-active="true"]):hover': {
        backgroundColor: `${theme.colors.durple[2]} !important`,
      },
    },
  },
}));

const RosterTable: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const [records, setRecords] = useRosterRecordsState();
  const setOnlineRosterRecords = useSetOnlineRosterRecords();
  const [totalRosterRecords, setTotalRosterRecords] = useTotalRosterRecordsState();
  const { classes } = useStyles({ isEmpty: records.length === 0 });
  const isRosterDebouncing = useIsRosterDebouncing();
  const rosterSearchDebouncedValue = useRosterSearchDebouncedValue();

  React.useEffect(() => {
    setIsLoading(true);
    setPage(1);
    const fetchData = async () => {
      return await fetchNui<{ totalRecords: number; members: Roster[]; totalOnline: number }>(
        'fetchRoster',
        { page: 1, search: rosterSearchDebouncedValue },
        {
          data: {
            totalRecords: DEBUG_DATA.length,
            members: DEBUG_DATA,
            totalOnline: DEBUG_DATA.reduce((acc, curr) => (curr.online ? acc + 1 : acc), 0),
          },
        }
      );
    };

    fetchData().then((resp) => {
      setRecords(resp.members);
      setTotalRosterRecords(resp.totalRecords);
      setOnlineRosterRecords(resp.totalOnline);
      setIsLoading(false);
    });
  }, [rosterSearchDebouncedValue, setOnlineRosterRecords, setRecords, setTotalRosterRecords]);

  return (
    <DataTable
      height={650}
      classNames={{ ...classes }}
      idAccessor="citizenid"
      columns={COLUMNS}
      records={records}
      totalRecords={totalRosterRecords}
      borderRadius="md"
      shadow="md"
      withBorder={false}
      page={page}
      fetching={isLoading || isRosterDebouncing}
      noRecordsText={locales.no_records}
      onPageChange={async (newPage) => {
        setIsLoading(true);
        setPage(newPage);
        const resp = await fetchNui<{ totalRecords: number; members: Roster[]; totalOnline: number }>(
          'fetchRoster',
          { page: newPage, search: rosterSearchDebouncedValue },
          {
            data: {
              totalRecords: 0,
              members: DEBUG_DATA,
              totalOnline: DEBUG_DATA.reduce((acc, curr) => (curr.online ? acc + 1 : acc), 0),
            },
            delay: 2000,
          }
        );
        setRecords(resp.members);
        setIsLoading(false);
        setOnlineRosterRecords(resp.totalOnline);
      }}
      recordsPerPage={9}
    />
  );
};

export default RosterTable;
