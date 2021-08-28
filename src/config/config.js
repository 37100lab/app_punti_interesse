export const url =
  process.env.NODE_ENV === 'development'
    ? 'https://37100lab.it/geoserver/geoapp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geoapp%3Apunti_di_interesse_geom&outputFormat=application%2Fjson'
    : `https://37100lab.it/geoserver/geoapp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geoapp%3Apunti_di_interesse_geom&outputFormat=application%2Fjson`
