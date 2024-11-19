import { Button, Select, Stack } from '@mantine/core';
import React from 'react';
import locales from '../../../../../../locales';
import { Roster } from '../../../../../../typings';
import { fetchNui } from '../../../../../../utils/fetchNui';
import { useSetRosterRecords } from '../../../../../../state/roster';
import { modals } from '@mantine/modals';
import { useGang } from '../../../../../../state/gang';

interface Props {
  member: Roster;
}

const SetRoleModal: React.FC<Props> = ({ member }) => {
  const [role, setRole] = React.useState<number | null>(null);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const setRecords = useSetRosterRecords();
  const gang = useGang();

  const handleConfirm = async () => {
    if (role === null) return;
    setConfirmLoading(true);
    const resp = await fetchNui<boolean>(
      'setMemberRole',
      { citizenid: member.citizenid, grade: +role },
      { data: true }
    );
    if (!resp) return;
    setRecords((prev) =>
      prev.map((record) =>
        record.citizenid === member.citizenid
          ? { ...record, role, label: gang.roles[role].name }
          : record
      )
    );
    setConfirmLoading(false);
    modals.closeAll();
  };

  return (
    <Stack>
      <Select
        value={role !== null ? role.toString() : null}
        data={gang.roles.map((role, index) => ({ label: role.name, value: index.toString() }))}
        onChange={(value) => setRole(value !== null ? +value : null)}
        label={locales.member_role}
      />
      <Button variant="light" onClick={handleConfirm} loading={confirmLoading}>
        {locales.confirm}
      </Button>
    </Stack>
  );
};

export default SetRoleModal;
