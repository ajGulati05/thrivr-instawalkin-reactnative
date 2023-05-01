/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { NotificationTypes } from './Actions'



export const requestNotificationLoading = (state) => ({
  ...state,
notification_settings:null,
  notification_settings_loading: true,
  notification_settings_error: null,
})

export const requestNotificationSuccess = (state, { notification_settings }) => (console.log("notification_settings got caled"+JSON.stringify(notification_settings)),{
  ...state,
   notification_settings_loading: false,
  notification_settings_error: null,
  notification_settings:notification_settings,
})

export const requestNotificationFailure = (state, { errorMessage }) => ({
  ...state,
  notification_settings:null,
  notification_settings_loading: false,
  notification_settings_error: errorMessage,
})
export const updateNotificationSettings = (state, { flag,notificationType }) => ({
  ...state,
  notification_settings:{ ...state.notification_settings,
  [notificationType]:flag
},
  notification_settings_loading: false,
  notification_settings_error: null,
})

export const setDefaultLoadValues = (state) => ({
  ...state,
  notification_settings_loading:false,

})
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [NotificationTypes.REQUEST_NOTIFICATION_SUCCESS]:requestNotificationSuccess,
  [NotificationTypes.REQUEST_NOTIFICATION_LOADING]:requestNotificationLoading,
  [NotificationTypes.REQUEST_NOTIFICATION_FAILURE]: requestNotificationFailure,
 [NotificationTypes.UPDATE_NOTIFICATION_SETTINGS]:updateNotificationSettings,
 [NotificationTypes.SET_DEFAULT_LOAD_VALUES]:setDefaultLoadValues
})

 

