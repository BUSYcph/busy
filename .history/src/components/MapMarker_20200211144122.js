import { useEffect } from "react";
import useGoogleMapMarker from "./useGoogleMapMarker";
import mapPin from "../../static/map.svg"

const activeIcon = mapPin;
const inactiveIcon = mapPin;

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

  useEffect(
    () => {
      marker &&
        (active ? marker.setIcon(activeIcon) : marker.setIcon(inactiveIcon));
    },
    [active]
  );

  return null;
}
