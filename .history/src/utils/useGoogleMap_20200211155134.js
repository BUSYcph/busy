import { useEffect, useState, useRef } from "react";
import { theme } from "../theme";
import GoogleMapsApiLoader from "google-maps-api-loader";

const apiKey = "AIzaSyAHIHYkeD-a8b9hFGl772oSS1xqf4K_XOI";

const eventsMapping = {
  onCenterChanged: ["center_changed", map => map.getCenter()],
  onBoundsChanged: ["bounds_changed", map => map.getBounds()]
};

export default function useGoogleMap({ zoom, center, events }) {
  const [mapState, setMapState] = useState({ loading: true });
  const mapRef = useRef();
  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      const map = new google.maps.Map(mapRef.current, { 
		  zoom,
		  center,
		  styles: theme.mapStyles
		});
	
      setMapState({ maps: google.maps, map, loading: false });
    });
  }, []);
  return { mapRef, ...mapState };
}