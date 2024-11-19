import React from 'react';
import { ActionIcon, Menu } from '@mantine/core';
import { IconDots, IconInfoCircleFilled, IconMap2 } from '@tabler/icons-react';
import locales from '../../../../../../locales';
import { Turf } from '../../../../../../typings';
import { useTurfMap } from '../../../../../../state';
import { LatLngBoundsExpression } from 'leaflet';
import { modals } from '@mantine/modals';
import TurfInfo from '../modals/TurfInfo';

interface Props {
  turf: Turf;
}

const TurfActionMenu: React.FC<Props> = ({ turf }) => {
  const map = useTurfMap();

  return (
    <>
      <Menu withArrow position="right-start">
        <Menu.Target>
          <ActionIcon variant="light" color="blue">
            <IconDots size={20} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            icon={<IconMap2 size={20} />}
            onClick={() => {
              if (map) {
                map.fitBounds(turf.position as LatLngBoundsExpression);
              }
            }}
          >
            {locales.find_on_map}
          </Menu.Item>
          <Menu.Item
            icon={<IconInfoCircleFilled size={20} />}
            onClick={() => modals.open({ title: locales.information, size:"auto", children: <TurfInfo turf={turf} />})}
          >
            {locales.information}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default TurfActionMenu;
