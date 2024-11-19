import React from 'react';
import { Polygon, useMap } from 'react-leaflet'
import { useFilteredTurfs } from '../../../../../hooks/useFilteredTurfs';
import { Text } from '@mantine/core';
import MarkerPopup from './MarkerPopup';

const MapPolygons: React.FC = () => {
    const turfs = useFilteredTurfs();
    const map = useMap();

    return (
        <>
            {turfs.map((turf) => (
                    <Polygon
                        key={turf.name}
                        positions={turf.position as L.LatLngExpression[]}
                        pathOptions={{color: turf.controllingGang.color}}
                        eventHandlers={
                            {
                                click: () => {
                                    map.fitBounds(turf.position as L.LatLngBoundsExpression);
                                }
                            }
                        }
                    >
                        <MarkerPopup>
                            <Text>
                                {turf.label} | 
                                {turf.controllingGang.name === 'none' ?
                                    ' (Uncontrolled)' :
                                    ` (${turf.controllingGang.label})`
                                }
                            </Text>
                        </MarkerPopup>
                    </Polygon>
                ))
            }
        </>
    )
};

export default MapPolygons;
