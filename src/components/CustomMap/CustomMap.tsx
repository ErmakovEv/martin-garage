import { YMaps, Map } from '@pbe/react-yandex-maps';

function CustomMap() {
  return (
    <div className="map-container">
      <YMaps>
        <Map
          defaultState={{ center: [55.75, 37.57], zoom: 11 }}
          width="100%"
          height="32vh"
        />
      </YMaps>
    </div>
  );
}

export default CustomMap;
