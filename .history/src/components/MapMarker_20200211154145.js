import { useEffect } from "react";
import useGoogleMapMarker from "../utils/useGoogleMapMarker";
import mapPin from "../../static/map.svg"

const icon = mapPin;

export default function MapMarker({
  position,
  type,
  maps,
  map,
  events,
  active = false,
  title
}) {
  const marker = useGoogleMapMarker({
    position,
    type,
    maps,
    map,
    events,
    title
  });

  console.log(marker);

  useEffect(
    () => {
      marker.setIcon(mapPin)
    },
    [active]
  );

  return null;
}
