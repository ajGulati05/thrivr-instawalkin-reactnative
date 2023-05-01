import axios from 'axios'
import { Config } from 'App/Config'



/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */


function fetchOpenSlots(state) {
  // Simulate an error 50% of the time just for testing purposes

  var filterPayload={
                          project_id:state.duration_value.id,
                          manager_speciality_code:'SW',
                          startDateTime:state.date_value.set_start_of_day_utc,
                          endDateTime:state.date_value.set_end_of_day_utc,
                          lattitude:state.location_value.latitude,
                          longitude:state.location_value.longitude
                    };

  return axios.post(Config.GET_OPEN_SLOTS_BY_DATE,filterPayload).then((response) => {
  return response.data.data;
  
  })
}

export const openSlotsService = {
  fetchOpenSlots,
}
