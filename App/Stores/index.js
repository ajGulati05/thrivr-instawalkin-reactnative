import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as UserReducer } from './User/Reducers'
import { reducer as AuthReducer } from './Auth/Reducers'
import { reducer as ModalReducer } from './Modal/Reducers'
import { reducer as FilterReducer } from './Filter/Reducers'
import { reducer as OpenSlotsReducer } from './OpenSlots/Reducers'
import { reducer as AppStateReducer } from './AppState/Reducers'
import { reducer as PaymentReducer } from './Payment/Reducers'
import { reducer as BookingReducer } from './Booking/Reducers'
import { reducer as PermissionReducer } from './Permission/Reducers'
import { reducer as NotificationReducer } from './Notification/Reducers'
import { resettableReducer } from 'reduxsauce'


const resettable = resettableReducer('RESET')

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    user: resettable(UserReducer),
    auth:resettable(AuthReducer),
    modal:resettable(ModalReducer),
    filter:FilterReducer,
    openslots:resettable(OpenSlotsReducer),
    appstate:resettable(AppStateReducer),
    payment:resettable(PaymentReducer),
    booking:resettable(BookingReducer),
    permission:resettable(PermissionReducer),
    notification_settings:resettable(NotificationReducer)
  })
  
  return configureStore(rootReducer, rootSaga)
}
