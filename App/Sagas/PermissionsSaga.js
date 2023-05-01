import { put, call } from 'redux-saga/effects'
import PermissionActions from 'App/Stores/Permission/Actions'
import { iosPermissionServices } from 'App/Services/iosPermissionService'
import { androidPermissionServices } from 'App/Services/androidPermissionService'
import { stripeService } from 'App/Services/StripeServices'
import Geolocation from '@react-native-community/geolocation';

import {
  Platform
} from 'react-native';
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* initiateLocationPermission() {
yield put(PermissionActions.setLocationPermissionLoading())

  // Fetch user informations from an API
 if(Platform.OS === 'ios')
   {
  var flag = yield call(iosPermissionServices.checkLocationPermissionValues)
   }
  else{
    var flag = yield call(androidPermissionServices.requestLocationPermissionValues)
  }
  if (flag==='granted') {
  yield call(requestNearBy,flag)
  } else if (flag==='denied') {
   if(Platform.OS === 'ios')
   {
    flag = yield call(iosPermissionServices.requestLocationPermissionValues)
  }
  else{
     flag = yield call(androidPermissionServices.requestLocationPermissionValues)
  }
     yield call(requestNearBy,flag)
  
  }
  //not denied just blocked
else{
      yield call(requestNearBy,'blocked')
}



}


const getUserLocation = () => new Promise((resolve, reject) => {
 Geolocation.getCurrentPosition(
  location => resolve(location),
  error => reject(error),
 )
})




export function* requestNearBy(flag) {
 const Saskatoon = { description: 'Saskatoon', geometry: { location: { lat: 52.1332, lng: -106.6700 } }};
const Regina = { description: 'Regina', geometry: { location: { lat: 50.4452, lng: -104.6189 } }};

var payload=[Saskatoon,Regina]
if(flag=='granted'){
  const info = yield call(getUserLocation)
    payloadNear={description:'Near me',geometry: { location: { lat:info.coords.latitude, lng: info.coords.longitude } }};
    payload=[payloadNear,Saskatoon,Regina]
  
}

yield put(PermissionActions.setNearBy(payload))
yield put(PermissionActions.setLocationPermission(flag))


}


