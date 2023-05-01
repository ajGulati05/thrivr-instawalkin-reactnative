



import {
Platform
} from 'react-native';

import RNPermissions, {
  PermissionStatus,
  Permission,
  NotificationsResponse,
  check, PERMISSIONS, RESULTS
} from 'react-native-permissions';




//const {PERMISSIONS, RESULTS} = RNPermissions;


async function checkLocationPermissionValues(){


return await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
  .then(result => {
    var value="denied"
    switch (result) {
      case RESULTS.UNAVAILABLE:
      value="unavailable"
        console.log(
          'This feature is not available (on this device / in this context)',
        );

        break;
      case RESULTS.DENIED:
      value="denied"
        console.log(
          'The permission has not been requested / is denied but requestable',
        );
        break;
      case RESULTS.GRANTED:
      value="granted"
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
       value="blocked"
        console.log('The permission is denied and not requestable anymore');
        break;

    }

         return value
  })
  .catch(error => {
     return 'unavailable'
  });
}
async function requestLocationPermissionValues(){


return await RNPermissions.request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
  
  console.log("here is the result")
  console.log(JSON.stringify(result))
  return result
});
}

export const androidPermissionServices = {
  checkLocationPermissionValues,
  requestLocationPermissionValues,

}


