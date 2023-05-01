import { takeEvery,takeLatest, all } from 'redux-saga/effects'
import { UserTypes } from 'App/Stores/User/Actions'
import { PaymentTypes } from 'App/Stores/Payment/Actions'
import { AuthTypes } from 'App/Stores/Auth/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchUser,requestUpdateProfile } from './UserSaga'
import { fetchAllPaymentOptions,addCard,deleteACardSaga,setDefaultCard } from './PaymentSaga'
import { initiateLogin,initiateLogout,requestRegister,initiateForgotPassword } from './AuthSaga'
import { startup } from './StartupSaga'
import { initiateLoadingFilter,setValues,initiateLoadingAllSpecialities,setDefaultValues } from './FilterSaga'
import { FilterTypes } from 'App/Stores/Filter/Actions'
import { ModalTypes } from 'App/Stores/Modal/Actions'
import {toggleModal } from './ModalSaga'
import {showShowLoadingModal,hideShowModal,showServerMessageModal,showCancelMessageModal,showRescheduleMessageModal } from './LoadingModalSaga'
import { OpenSlotsTypes } from 'App/Stores/OpenSlots/Actions'
import {fetchOpenSlots } from './OpenSlotsSaga'
import { BookingTypes } from 'App/Stores/Booking/Actions'
import { AppStateTypes } from 'App/Stores/AppState/Actions'
import {initiateSingleBookingRequest,
    createBookingPayload,
fetchAllBookings,initiateNativePayRequest,initiateTipRequest
,requestReceiptSaga,requestCancelBooking} from './BookingSaga'

import { PermissionTypes } from 'App/Stores/Permission/Actions'
import {initiateLocationPermission,requestNearBy} from './PermissionsSaga'
import { NotificationTypes } from 'App/Stores/Notification/Actions'
import {initiateNotificationSettings,updateNotificationSettingsSaga} from './NotificationSaga'
export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(StartupTypes.STARTUP,initiateLoadingAllSpecialities),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(UserTypes.FETCH_USER, fetchUser),
    takeLatest(UserTypes.REQUEST_UPDATE_PROFILE,requestUpdateProfile),
  	takeLatest(AuthTypes.INITIATE_LOGIN, initiateLogin),
    takeLatest(AuthTypes.REQUEST_REGISTER, requestRegister),
    takeEvery(ModalTypes.TOGGLE_MODAL, toggleModal),
    takeEvery(NotificationTypes.INITIATE_NOTIFICATION_SETTINGS, initiateNotificationSettings),
    takeEvery(NotificationTypes.UPDATE_NOTIFICATION_SETTINGS_SAGA,updateNotificationSettingsSaga),
    takeEvery(FilterTypes.INITIATE_LOADING_FILTER, initiateLoadingFilter),
    takeLatest(OpenSlotsTypes.FETCH_OPEN_SLOTS,fetchOpenSlots),
    takeLatest(OpenSlotsTypes.FETCH_OPEN_SLOTS,setDefaultValues),
    takeLatest(AuthTypes.INITIATE_LOGOUT, initiateLogout),
    takeLatest(FilterTypes.SET_VALUES,setValues),
    takeLatest(PaymentTypes.FETCH_ALL_PAYMENT_OPTIONS,fetchAllPaymentOptions),
    takeLatest(PaymentTypes.DELETE_A_CARD_SAGA,deleteACardSaga),
    takeLatest(PaymentTypes.FETCH_PAYMENTS_SUCCESS,setDefaultCard),
    takeLatest(PaymentTypes.FETCH_ADD_CARD_SUCCESS,setDefaultCard),
    takeLatest(PaymentTypes.ADD_A_CARD_SAGA,addCard),
    takeLatest(BookingTypes.INITIATE_SINGLE_BOOKING_REQUEST,initiateSingleBookingRequest),
    takeLatest(BookingTypes.FETCH_ALL_BOOKINGS,fetchAllBookings),
    takeLatest(BookingTypes.INITIATE_NATIVE_PAY_REQUEST,initiateNativePayRequest),
    takeLatest(AppStateTypes.CREATE_BOOKING_PAYLOAD,createBookingPayload),
    takeLatest(AppStateTypes.CREATE_BOOKING_PAYLOAD,createBookingPayload),
    takeLatest(BookingTypes.INITIATE_TIP_REQUEST,initiateTipRequest),
    takeLatest(BookingTypes.REQUEST_RECEIPT_SAGA,requestReceiptSaga),
    takeLatest(AuthTypes.INITIATE_FORGOT_PASSWORD,initiateForgotPassword),
    //SHOW LOADING MODAL ON LOADING

    takeLatest(PermissionTypes.INITIATE_LOCATION_PERMISSION, initiateLocationPermission),
    takeLatest(PermissionTypes.REQUEST_NEAR_BY,requestNearBy),
    takeLatest(OpenSlotsTypes.FETCH_OPEN_SLOTS_LOADING, showShowLoadingModal),
    takeLatest(BookingTypes.INITIATE_SINGLE_BOOKING_REQUEST,showShowLoadingModal),
    takeLatest(BookingTypes.REQUEST_CANCEL_BOOKING,showShowLoadingModal),
    //HIDE LOADING MODAL ON SUCCESS
    takeLatest(AppStateTypes.SET_DEFAULT_LOAD_VALUES,hideShowModal),
    takeLatest(OpenSlotsTypes.FETCH_OPEN_SLOTS_SUCCESS,hideShowModal),
    takeLatest(AppStateTypes.CREATE_BOOKING_PAYLOAD_SUCCESS,hideShowModal),
    takeLatest(BookingTypes.REQUEST_CANCEL_BOOKING_SUCCESS,hideShowModal),
     takeLatest(BookingTypes.FETCH_SINGLE_BOOKING_SUCCESS,hideShowModal),
    //HIDE LOADING MODAL ON ERROR
    takeLatest(OpenSlotsTypes.FETCH_OPEN_SLOTS_FAILURE,hideShowModal),
    takeLatest(AppStateTypes.CREATE_BOOKING_PAYLOAD_ERROR,hideShowModal),
    takeLatest(AppStateTypes.CLOSE_MODAL,hideShowModal),
     takeLatest(BookingTypes.FETCH_SINGLE_BOOKING_FAILURE,hideShowModal),
    takeLatest(BookingTypes.REQUEST_CANCEL_BOOKING_ERROR,hideShowModal),

    takeLatest(AppStateTypes.SHOW_SERVER_MESSAGE_MODAL,showServerMessageModal),
    

    takeLatest(BookingTypes.INITIATE_CANCEL_BOOKING,showCancelMessageModal),
    takeLatest(BookingTypes.INITIATE_RESCHEDULE_BOOKING,showRescheduleMessageModal),
    takeLatest(BookingTypes.REQUEST_CANCEL_BOOKING,requestCancelBooking)

    //takeLatest(BookingTypes.INITIATE_SINGLE_BOOKING_REQUEST,hideLoadingModal),
    //takeLatest(AuthTypes.C, initiateLogout),
  ])
}
