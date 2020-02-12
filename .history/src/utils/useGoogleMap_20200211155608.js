import { useEffect, useState, useRef } from "react";
import { theme } from "../theme";
import GoogleMapsApiLoader from "google-maps-api-loader";
import mapPin from "../../static/map.svg";

const apiKey = "AIzaSyAHIHYkeD-a8b9hFGl772oSS1xqf4K_XOI";

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

		const icon = {
			url: mapPin
		}

		new google.maps.Marker({
			position: center,
			title: "BUSY ApS",
			anchor: new google.maps.Point(0, 71),
			size: new google.maps.Size(48, 71),
			origin: new google.maps.Point(0, 0),
			map,
			icon
		})

      setMapState({ maps: google.maps, map, loading: false });
    });
  }, []);
  return { mapRef, ...mapState };
}