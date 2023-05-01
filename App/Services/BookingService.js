import axios from 'axios'
import { Config } from 'App/Config'



/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */


function fetchAllBookings() {

   return axios.get(Config.GET_ALL_BOOKINGS).then((response) => {
  return response.data;
  
  })
}

function makeSingleBooking(booking_payload) {
	console.log("hello bookings");
   return axios.post(Config.POST_SINGLE_MASSAGE,booking_payload).then((response) => {
  return response.data;
  
  })
.catch((error)=>{
  console.log('error'+error);
})
}

function postTip(tip_amount,booking_id) {
  var payload={tip_amount,booking_id}

   return axios.post(Config.POST_TIP,payload).then((response) => {
    console.log('response'+response.data);
  return response.data;
  
  }).catch((error)=>{
  console.log('error'+error);
})
}

function getReceipt(booking_id) {


   return axios.post(Config.GET_RECEIPT,{booking_id}).then((response) => {
  return response.data;
  
  })
}


function cancelOrReschduleBooking(booking_id,booking_status) {


   return axios.post(Config.CANCEL_BOOKING,{booking_id,booking_status}).then((response) => {
  return response.data;
  
  })
}
export const bookingService = {
  fetchAllBookings,
  makeSingleBooking,
  postTip,
  getReceipt,
  cancelOrReschduleBooking
}
