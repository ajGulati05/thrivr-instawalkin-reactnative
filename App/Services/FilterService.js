import axios from 'axios'
import { Config } from 'App/Config'



/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */


function initiateAllPricingDurationLoad() {
  // Simulate an error 50% of the time just for testing purposes

  
  return axios.get(Config.GET_ALL_PRICING_DURATION).then((response) => {
 return response.data;
  
  })
}
function initiateAllSpecialitiesLoad() {
  // Simulate an error 50% of the time just for testing purposes

  
  return axios.get(Config.GET_ALL_SPECIALITIES).then((response) => {
 return response.data;
  
  })
}
export const filterService = {
initiateAllPricingDurationLoad,
initiateAllSpecialitiesLoad
//initiateAllSpecialitiesLoad,
//initiateGenderCodeLoad
}
