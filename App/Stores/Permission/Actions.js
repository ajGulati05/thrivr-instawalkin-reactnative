import { createActions } from 'reduxsauce'

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Stores/Example/Reducers.js
 * - to trigger sagas, for example in App/Sagas/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in App/App.js
 * - in sagas using `yield put(...)`, for example in App/Sagas/ExampleSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
initiateLocationPermission:null,
setLocationPermission:['flag'],
setLocationPermissionLoading:null,
requestNearBy:['flag'],
setNearBy:['payload'],
  initiateCalendarPermission:null, //check to see if we can get calendar notification
  initiateNotificationPermission:null, //check to see if we can get calendar notification
   //check to see if we can get calendar notification
  requestCalendarPermission:null,
  requestNotificationPermission:null, //check to see if we can get calendar notification
  
 
  createCalendarSuccess:['flag'],// on success
  // on success
  createNotificationSuccess:['flag'],// on success
  createCalendarError:['flag'],// permission modal cannot be used any more
  // permission modal cannot be used any more
  createNotificationError:['flag'],// permission modal cannot be used any more
  setDefaultLoadValues:null
  
})

export const PermissionTypes = Types
export default Creators
