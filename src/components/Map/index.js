import React, { useState } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './index.module.styl';

const MapWrapper = ({ google }) => {
  const [marker, setMarker] = useState({});
  const [isWindowShowing, setWindowShowing] = useState(false);

  const markerClick = (props, marker) => {
    setMarker(marker);
    setWindowShowing(true);
  };

  return (
    <div className={styles.wrapper}>
      <Map
        style={{ width: '100%', height: '100%', flex: 1, position: 'relative' }}
        google={google}
        initialCenter={{ lat: 47.709727, lng: -122.129865 }}
        zoom={12}
      >
        <Marker
          position={{ lat: 47.709727, lng: -122.129865 }}
          name="Eastside Swim School"
          onClick={markerClick}
        />

        <InfoWindow visible={isWindowShowing} marker={marker}>
          <Paper>
            <Typography variant="h5" component="h4">
              Willows Prep Pool
            </Typography>
            <Typography component="p">
              12280 Redmond-Woodinville Rd. NE
              <br />
              Redmond, WA 98052
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.GATSBY_GOOGLE_MAPS_KEY,
})(MapWrapper);
