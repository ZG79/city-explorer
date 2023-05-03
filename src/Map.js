import React from 'react';

class Map extends React.Component {
  render() {
    const { lat, lon } = this.props;
    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${lat},${lon}&zoom=13&size=800x800&format=jpg&markers=icon:large-red-cutout|${lat},${lon}`;
    return (
      <img src={mapUrl} alt="Map" />
    );
  }
}

export default Map;
