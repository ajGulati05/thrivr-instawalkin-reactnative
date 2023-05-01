
import axios from 'axios'
import { Config } from 'App/Config'



/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */


function getPaymentOptions() {
  // Simulate an error 50% of the time just for testing purposes



  return axios.get(Config.GET_PAYMENT_OPTIONS).then((response) => {
  return response.data
  
  })
}



/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */


function addStripeCard(payload) {
  // Simulate an error 50% of the time just for testing purposes



  return axios.post(Config.POST_CREATE_STRIPE,payload).then((response) => {
  return response.data
  
  })
}
function deleteStripeCard(stripedatas_id) {
  // Simulate an error 50% of the time just for testing purposes



  return axios.post(Config.DELETE_STRIPE_CARD,{stripedatas_id}).then((response) => {
  return response.data
  
  })
}


export const paymentsService = {
  getPaymentOptions,
  addStripeCard,
  deleteStripeCard
}
