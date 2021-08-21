import React from 'react'

import { connect } from 'react-redux'
import { showLocationModal } from '../../redux/actions'
import stringManager from '../../utility/stringManager'

export const Location = ({ location, showLocationModal }) => {
  //no modal 'cause no informations to display
  return (
    <div>
      <h3>{stringManager.titleCase(location.properties.nome)}</h3>

      {location.properties.descrizion && (
        <h4>{stringManager.titleCase(location.properties.descrizion)}</h4>
      )}
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = { showLocationModal }

export default connect(mapStateToProps, mapDispatchToProps)(Location)
