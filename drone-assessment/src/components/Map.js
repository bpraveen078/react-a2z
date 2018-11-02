import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
class Map extends Component {
  render() {
    const { data } = this.props;
     
    const GoogleMapExample = withGoogleMap(props => (
      <div>
        { (
          <GoogleMap
            defaultCenter={{ lat: data.latitude, lng: data.longitude }}
            defaultZoom={4}
          >
            <Marker
              position={{ lat: data.latitude, lng: data.longitude }}
            />
          </GoogleMap>
        )}
      </div>
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
export default Map;


{/* <GoogleMap
defaultCenter={{ lat: 24.895358908888557, lng: -96.49592442730332 }}
defaultZoom={4}
>
<Marker
  position={{ lat: 24.895358908888557, lng: -96.49592442730332 }}
/>
</GoogleMap> */}