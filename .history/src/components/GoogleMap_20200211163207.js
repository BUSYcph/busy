import React, { useEffect } from "react";
import styled from "styled-components";
import useGoogleMap from "../utils/useGoogleMap";

const MapContainer = styled.div`	
	height: 375px;
	width: 100%;
	${props => props.theme.breakpoints('sm')`
		height: 500px;
	`}
`;

const MapRef = styled.div`
	height: 100%;
`;

export default function Map({ center, zoom, children, events }) {
  const { maps, map, mapRef, loading } = useGoogleMap({ zoom, center, events });

  useEffect(
    () => {
      map && map.panTo(center);
    },
    [center.lat, center.lng]
  );

  const icon = {
	url: gasworksPin,
	fillColor: '#222',
	fillOpacity: 0.6,
	anchor: new window.google.maps.Point(0, 71),
	size: new window.google.maps.Size(48, 71),
	origin: new window.google.maps.Point(0, 0),
	strokeWeight: 0,
	scale: 1,
  }

  return (
    <MapContainer>
      <MapRef ref={mapRef} />
	  
      {!loading &&
        React.Children.map(children, child => {
          return React.cloneElement(child, { map, maps });
        })}
    </MapContainer>
  );
}
