import { put, call,select } from 'redux-saga/effects'
import NotificationActions from 'App/Stores/Notification/Actions'
import { notificationService } from 'App/Services/NotificationService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* initiateNotificationSettings() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(NotificationActions.requestNotificationLoading())

  // Fetch user informations from an API
  const notification_settings = yield call(notificationService.requestNotification)
 
  if (notification_settings) {
    yield put(NotificationActions.requestNotificationSuccess(notification_settings))
  } else {
    yield put(
      NotificationActions.requestNotificationFailure('There was an error while fetching user informations.')
    )
  }
}


export function* updateNotificationSettingsSaga({flag,notificationType})
{

   yield put(NotificationActions.updateNotificationSettings(flag,notificationType))
    const notificationStore = state => state.notification_settings.notification_settings;
  const payload = yield select(notificationStore);
const notification_settings_save = yield call(notificationService.updateNotificationSettings,payload)

  }