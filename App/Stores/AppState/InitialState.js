/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  showShowModal:false,
  type:null,
  cancelWithFine:false,
  cancel_booking_id:null,
  reschedule_booking_id:null,
  modal_title:null,
  modal_message:null,
  can_pay_with_native_pay:false,
  defaultPayMethod:null, //NATIVE_PAY, or CARD ID 
  bookingPayload:null,
  bookingPayloadLoading:false,
  bookingPayloadError:null
}
