/**
 * The initial values for the redux state.
 */

 const Saskatoon = { description: 'Saskatoon', geometry: { location: { lat: 52.1332, lng: -106.6700 } }};
const Regina = { description: 'Regina', geometry: { location: { lat: 50.4452, lng: -104.6189 } }};


export const INITIAL_STATE = {
  permissionAllowedCalendar:false,
  permissionAllowedNotification:false,
  permissionAllowedLocation:null, //NATIVE_PAY, or CARD ID 
  askModalAllowedCalendar:true,
  askModalAllowedNotification:true,
  firstAskModalCalendar:true,
  firstAskModalNotification:true,
  nearBy:[Saskatoon,Regina],
  locationPermissionLoading:false
}
