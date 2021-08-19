import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import poi from '../../assets/icons/locations/poi.svg'
import Location from './Location'

const poiIcon = L.icon({
  iconUrl: poi,
  iconSize: [50, 50],
})

const locationConfig = {
  poi: {
    icon: poiIcon,
  },
}

// not yet icon custom 
export const LocationList = ({ myloc }) => {

  return (
    <div>
      {myloc &&
        myloc.length &&
        myloc.map(loc => (
          <Marker
            key={loc.id}
            position={[loc.geometry.coordinates[1], loc.geometry.coordinates[0]]}
             icon={locationConfig["poi"].icon}
          >
            <Popup>
              <Location location={loc}/>
            </Popup>
           
          </Marker>
        ))}
    </div>
  )
}



export default LocationList
