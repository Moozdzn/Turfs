import React from 'react';
import { ActionIcon, Group, Menu, Text } from '@mantine/core';
import { IconArrowBadgeUp, IconSettings, IconUserX } from '@tabler/icons-react';
import { Roster } from '../../../../../typings';
import locales from '../../../../../locales';
import { modals } from '@mantine/modals';
import SetRoleModal from './modals/SetRoleModal';
import { useSetRosterRecords } from '../../../../../state/roster';
import { fetchNui } from '../../../../../utils/fetchNui';
import { useCharacter } from '../../../../../state';
import { hasPermission } from '../../../../../helpers';

const RosterMemberMenu: React.FC<{ member: Roster }> = ({ member }) => {
  const setRecords = useSetRosterRecords();
  const character = useCharacter();

  return (
    <Group position="center">
      <Menu withinPortal withArrow position="bottom-end">
        <Menu.Target>
          <ActionIcon
            disabled={!hasPermission(character, ['set_role', 'fire'])}
            variant="light"
            size="lg"
            color="blue"
          >
            <IconSettings />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            disabled={!hasPermission(character, 'set_role')}
            icon={<IconArrowBadgeUp size={20} />}
            onClick={() =>
              modals.open({ title: locales.set_role, size: 'xs', children: <SetRoleModal member={member} /> })
            }
          >
            {locales.set_role}
          </Menu.Item>
          <Menu.Item
            disabled={!hasPermission(character, 'fire')}
            icon={<IconUserX size={20} />}
            color="red"
            onClick={() =>
              modals.openConfirmModal({
                title: locales.fire,
                children: (
                  <Text c="dark.2" size="sm">
                    {locales.fire_modal_description.format(member.firstname, member.lastname)}
                  </Text>
                ),
                labels: { confirm: locales.confirm, cancel: locales.cancel },
                centered: true,
                groupProps: {
                  spacing: 6,
                },
                confirmProps: {
                  color: 'red',
                },
                onConfirm: async () => {
                  const resp = await fetchNui('fireMember', member.citizenid, { data: true });
                  if (!resp) return;
                  setRecords((prev) => prev.filter((record) => record.citizenid !== member.citizenid));
                  modals.closeAll();
                },
              })
            }
          >
            {locales.fire}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};

export default React.memo(RosterMemberMenu);
