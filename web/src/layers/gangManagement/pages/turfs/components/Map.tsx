import React from 'react';
import { ImageOverlay, useMap } from 'react-leaflet';
import L from 'leaflet';
import MapImg from '../../../../../../public/map.jpg';

const Map: React.FC = () => {
  const map = useMap();

  const bounds = new L.LatLngBounds(map.unproject([0, 1024], 3 - 1), map.unproject([1024, 0], 3 - 1));

  map.setMaxBounds(bounds);

  map.attributionControl.setPrefix(false);
  map.setMaxBounds(bounds);
  map.setView([0, 0], 2);

  return <ImageOverlay url={MapImg} bounds={bounds} />;
};

export default Map;
