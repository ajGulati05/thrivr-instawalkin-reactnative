/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { PermissionTypes } from './Actions'


export const setLocationPermissionLoading=(state)=>({
  ...state,
  locationPermissionLoading:true
})
export const setLocationPermission = (state,{flag}) => ({
  ...state,
 permissionAllowedLocation:flag,
 locationPermissionLoading:false

})
export const setNearBy = (state,{payload}) => ({
  ...state,
 nearBy:payload

})
export const setDefaultLoadValues = (state) => ({
  ...state,
  locationPermissionLoading:false,

})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [PermissionTypes.SET_LOCATION_PERMISSION]:setLocationPermission,
  [PermissionTypes.SET_NEAR_BY]: setNearBy,
  [PermissionTypes.SET_LOCATION_PERMISSION_LOADING]:   setLocationPermissionLoading,
   [PermissionTypes.SET_DEFAULT_LOAD_VALUES]:setDefaultLoadValues

})

/*
  permissionAllowedCalendar:false,
  permissionAllowedNotification:false,
  permissionAllowedLocation:false, //NATIVE_PAY, or CARD ID 
  askModalAllowedCalendar:true,
  askModalAllowedNotification:true,
  askModalAllowedLocation:true,
  firstAskModalCalendar:true,
  firstAskModalPermission:true,
  firstAskModalNotification:true,
initiateLocationPermission:null,
requestLocationPermission:['flag'],*/