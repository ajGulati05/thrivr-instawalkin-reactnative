/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AppStateTypes } from './Actions'

export const toggleShowModal = (state,{payload}) => (console.log(JSON.stringify(payload)),{
  ...state,
  showShowModal: payload.flag,
  type:payload.typeName,
  cancel_booking_id:payload.cancel_booking_id,
  reschedule_booking_id:payload.reschedule_booking_id,
  modal_title:payload.modal_title,
  modal_message:payload.modal_message,
  cancelWithFine:payload.cancelWithFine
})
export const createBookingPayloadLoading = (state) => ({
  ...state,
  booking_payload: null,
  bookingPayloadLoading:true,
  bookingPayloadError:null
})
export const createBookingPayloadError = (state,{errorMessage}) => ({
  ...state,
  booking_payload: null,
  bookingPayloadLoading:false,
  bookingPayloadError:errorMessage
})
export const createBookingPayloadSuccess = (state,{booking_payload}) => ({
  ...state,
  booking_payload: booking_payload,
  bookingPayloadLoading:false,
  bookingPayloadError:null
})
export const canPayWithNativePay = (state,{flag}) => (console.log("is thus happeing"+flag),{
  ...state,
  can_pay_with_native_pay: flag,
})
export const setDefaultPayMethod = (state,{id}) => (console.log("is thus happeing"+id),{
  ...state,
  defaultPayMethod: id,
})
export const setDefaultLoadValues = (state) => ({
  ...state,
  bookingPayloadLoading:false,

})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [AppStateTypes.TOGGLE_SHOW_MODAL]:toggleShowModal,
  [AppStateTypes.CAN_PAY_WITH_NATIVE_PAY]:canPayWithNativePay,
  [AppStateTypes.SET_DEFAULT_PAY_METHOD]:setDefaultPayMethod,
    [AppStateTypes.CREATE_BOOKING_PAYLOAD_SUCCESS]:createBookingPayloadSuccess,
    [AppStateTypes.CREATE_BOOKING_PAYLOAD_LOADING]:createBookingPayloadLoading,
    [AppStateTypes.CREATE_BOOKING_PAYLOAD_ERROR]:createBookingPayloadError,
    [AppStateTypes.SET_DEFAULT_LOAD_VALUES]:setDefaultLoadValues,

})

