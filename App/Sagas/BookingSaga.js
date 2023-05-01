import { put, call,select } from 'redux-saga/effects'
import BookingActions from 'App/Stores/Booking/Actions'
import AppStateActions from 'App/Stores/AppState/Actions'
import { bookingService } from 'App/Services/BookingService'
import NavigationService from 'App/Services/NavigationService'  
import {stripeService} from 'App/Services/StripeServices'  
import _ from 'lodash'
import moment from 'moment';
import 'moment-timezone';
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */


export function* createBookingPayload({booking_payload_initial}){
	yield put(AppStateActions.createBookingPayloadSuccess(booking_payload))
	console.log(booking_payload_initial);
		const getFilter = state => state.filter;
		const getMassageFilter = state => state.openslots.openslots;
  		const filter = yield select(getFilter);
  		const massageInfo = yield select(getMassageFilter);
  		const massage_place_info=_.filter(massageInfo, { timekit_resource_id:booking_payload_initial.resource_id });
  		const getProjectPricing =_.filter(filter.all_pricing_duration,{id:filter.duration_value.id})
  		var booking_payload={
  			massage_description:filter.duration_value.description+" "+filter.set_default_all_specialities.description,
  			massage_time:filter.date_value.text +" "+booking_payload_initial.display_time,
  			location_address:massage_place_info[0].address,
  			person_name:massage_place_info[0].manager_first_name,
  			lat:massage_place_info[0].latitude,
  			lng:massage_place_info[0].longitude,
        address_description:massage_place_info[0].address_description,
        parking_description:massage_place_info[0].parking_description,
  			start_time_zoned_utc:moment(booking_payload_initial.start,'YYYY-MM-DDTH:mm:ss').utc().toISOString(),
  			end_time_zoned_utc:moment(booking_payload_initial.end,'YYYY-MM-DDTH:mm:ss').utc().toISOString(),
  			start:booking_payload_initial.start,
  			end:booking_payload_initial.end,
        manager_id:booking_payload_initial.manager_id,
  			project_id:filter.duration_value.id,
  			manager_speciality_id:filter.set_default_all_specialities.id,
  			timekit_resource_id:booking_payload_initial.resource_id,
  			price:getProjectPricing[0].project_pricings.amount,
  			tax_percent:getProjectPricing[0].project_pricings.taxes,
  			taxlabel:getProjectPricing[0].project_pricings.taxlabel,
        tip_amount:null,
  			coupon_amount:null,
  			total_amount:null,
  			app_source:'USER_MOBILE',
  			direct_billing:false
			}
  		yield put(AppStateActions.createBookingPayloadSuccess(booking_payload))
		NavigationService.navigate('CheckoutScreen')
}
export function* initiateSingleBookingRequest() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html

		const getBooking = state => state.appstate;
  		const payload = yield select(getBooking);
  		const booking_payload={ ...payload.booking_payload,...payload.defaultPayMethod}
  		//payload.defaultPayMethod. -- contains how  its paid
  		//payload.booking_payload --contains booking values
  yield put(BookingActions.fetchSingleBookingLoading())



  const booking = yield call(bookingService.makeSingleBooking,booking_payload)
 

if (booking) {
    yield put(BookingActions.fetchSingleBookingSuccess(booking))
    NavigationService.navigateAndReset('TabScreens');
    var booking_payload_new=Object.values(booking)[0];
   yield put( AppStateActions.showServerMessageModal('Success!','Your booking was successfully made.'))
  NavigationService.navigate('HistoryDetailScreen',{booking_payload:booking_payload_new})
  } else {
    yield put(AppStateActions.showServerMessageModal('Oops!','Looks like there was an issue on our side we are looking into it'))

    yield put(
      BookingActions.fetchSingleBookingFailure('There was an error while trying to make a booking.')
    )
  }
}

export function* fetchAllBookings(){
	console.log("calling bookings");
 yield put(BookingActions.fetchAllBookingsLoading())

  // Fetch user informations from an API
  const bookings = yield call(bookingService.fetchAllBookings)
  console.log(JSON.stringify(bookings));
  if (bookings) {
    yield put(BookingActions.fetchAllBookingsSuccess(bookings))
  } else {
    yield put(
      BookingActions.fetchAllBookingsFailure('There was an error while fetching user informations.')
    )
  }
}

export function* initiateNativePayRequest(){
    const native_pay = yield call(stripeService.customPaymentRequestWithApplePay)
    console.log(JSON.stringify(native_pay));
}



export function* initiateTipRequest({tip_amount,booking_id}){
  yield put(BookingActions.requestTipLoading())
  const bookings = yield call(bookingService.postTip,tip_amount,booking_id)
  
  if (bookings) {
    yield put(BookingActions.requestTipSuccess(tip_amount,booking_id))
     yield put(AppStateActions.showServerMessageModal('Success!','Tip added, thank you.'))

  } else {
     yield put(AppStateActions.showServerMessageModal('Oops!','Looks like there was an issue on our side we are looking into it'))

    yield put(
      
      BookingActions.requestTipError('There was an issue with the tip')
    )
  }
}

export function* initiateRescheduleRequest({booking_id}){
  yield put(BookingActions.requestTipLoading())
  const bookings = yield call(bookingService.postTip,tip_amount,booking_id)
  
  if (bookings) {
    yield put(BookingActions.requestTipSuccess(tip_amount,booking_id))
  } else {
    yield put(
      BookingActions.requestTipError('There was an issue with the tip')
    )
  }
}

export function* requestCancelBooking({booking_id}){
  yield put(BookingActions.fetchSingleBookingLoading())
  const cancelbooking = yield call(bookingService.cancelOrReschduleBooking,booking_id,'C')

  if (cancelbooking) {
    yield put(BookingActions.requestCancelBookingSuccess(booking_id))
  } else {
    yield put(
      BookingActions.fetchSingleBookingFailure('There was an error while trying to make a booking.')
    )
  }
  
}

export function* requestReceiptSaga({booking_id}){
  console.log("in here"+booking_id)
   yield call(bookingService.getReceipt,booking_id)
}