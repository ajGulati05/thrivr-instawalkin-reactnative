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

  initiateSingleBookingRequest: null,// will be used for saga
  fetchSingleBookingLoading: null, //
  fetchSingleBookingSuccess:['booking'],// if a booking is a success
  fetchSingleBookingFailure:['errorMessage'],//if a booking is a error
  fetchAllBookings:null,
  fetchAllBookingsLoading:null,
  fetchAllBookingsSuccess:['bookings'],
  fetchAllBookingsFailure:['errorMessage'],
  initiateNativePayRequest:null,
  initiateTipRequest: ['tip_amount','booking_id'],
  requestTipLoading: null,
  requestTipSuccess:['tip_amount','booking_id'],
  requestTipError:['errorMessage'],
  requestReceiptSaga:['booking_id'],
  initiateCancelBooking:['booking'],
  initiateRescheduleBooking:['booking'],
  requestCancelBooking:['booking_id'],
  requestCancelBookingLoading:null,
  requestCancelBookingSuccess:['booking_id'],
  requestCancelBookingError:['errorMessage'],
  reuestRescheduleBooking:[,'booking_id'],
  setDefaultLoadValues:null

 // initiateStatusChangeBooking:['booking','status'],// TODO for cancel and reschedule
 // fetchStatusChangeBookingSuccess:['booking','status'],
  //fetchStatusChangeBookingFailure:['errorMessage'],
})

export const BookingTypes = Types
export default Creators
