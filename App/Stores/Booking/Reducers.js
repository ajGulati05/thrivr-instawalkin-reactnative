/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { BookingTypes } from './Actions'

export const fetchSingleBookingLoading = (state) => ({
  ...state,

  singleBookingLoading: true,
  singleBookingErrorMessage: null,
})

export const fetchSingleBookingSuccess = (state, { booking }) => (console.log("got caled"+JSON.stringify(booking)),{
  ...state,
   singleBookingLoading: false,
  singleBookingErrorMessage: null,
  bookings:{
    ...state.bookings,
    ...booking
  },
})

export const fetchSingleBookingFailure = (state, { errorMessage }) => ({
  ...state,

  singleBookingLoading: false,
  singleBookingErrorMessage: errorMessage,
})


export const fetchAllBookingsLoading = (state) => ({
  ...state,

  bookingsLoading: true,
  bookingsErrorMessage: null,
})

export const fetchAllBookingsSuccess = (state, { bookings }) => (console.log("booking got caled"+JSON.stringify(bookings)),{
  ...state,
   bookingsLoading: false,
  bookingsErrorMessage: null,
  bookings:bookings,
})

export const fetchAllBookingFailure = (state, { errorMessage }) => ({
  ...state,
  bookingsLoading: false,
  bookingsErrorMessage: errorMessage,
})


 
export const requestTipLoading = (state) => ({
  ...state,

  tipLoading: true,
  tipErrorMessage: null,
})

export const requestTipSuccess = (state, { tip_amount,booking_id }) => ({
  ...state,
   tipLoading: false,
  tipErrorMessage: null,
  bookings:{ ...state.bookings,
    [booking_id]: { ...state.bookings[booking_id],tip_amount: tip_amount,closed:true,},
   
  },
})

export const requestTipError = (state, { errorMessage }) => ({
  ...state,
  tipLoading: false,
  tipErrorMessage: errorMessage,
})



export const requestCancelBookingLoading = (state) => ({
  ...state,

  singleBookingLoading: true,
  singleBookingErrorMessage: null,
})

export const requestCancelBookingSuccess = (state, { booking_id }) => (console.log("got caled"+JSON.stringify(booking_id)),{
  ...state,
   singleBookingLoading: false,
  singleBookingErrorMessage: null,
  bookings:{
     ...state.bookings,
   [booking_id]: {...state.bookings[booking_id],booking_status:'C',closed:true, },
   
  },
})

export const requestCancelBookingError = (state, { errorMessage }) => ({
  ...state,

  singleBookingLoading: false,
  singleBookingErrorMessage: errorMessage,
})


export const setDefaultLoadValues = (state) => ({
  ...state,
  singleBookingLoading:false,
  tipLoading:false,
  bookingsLoading:false,
  singleBookingLoading:false
})
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [BookingTypes.FETCH_SINGLE_BOOKING_LOADING]:fetchSingleBookingLoading,
  [BookingTypes.FETCH_SINGLE_BOOKING_SUCCESS]:fetchSingleBookingSuccess,
  [BookingTypes.FETCH_SINGLE_BOOKING_FAILURE]: fetchSingleBookingFailure,
  [BookingTypes.FETCH_ALL_BOOKINGS_LOADING]:fetchAllBookingsLoading,
  [BookingTypes.FETCH_ALL_BOOKINGS_SUCCESS]: fetchAllBookingsSuccess,
  [BookingTypes.FETCH_ALL_BOOKINGS_FAILURE]: fetchAllBookingFailure,
  [BookingTypes.REQUEST_TIP_LOADING]:requestTipLoading,
  [BookingTypes.REQUEST_TIP_SUCCESS]:requestTipSuccess,
  [BookingTypes.REQUEST_TIP_ERROR]:requestTipError,
  [BookingTypes.REQUEST_CANCEL_BOOKING_LOADING]:requestCancelBookingLoading,
  [BookingTypes.REQUEST_CANCEL_BOOKING_SUCCESS]:requestCancelBookingSuccess,
  [BookingTypes.REQUEST_CANCEL_BOOKING_ERROR]:requestCancelBookingError,
  [BookingTypes.SET_DEFAULT_LOAD_VALUES]:setDefaultLoadValues
})






