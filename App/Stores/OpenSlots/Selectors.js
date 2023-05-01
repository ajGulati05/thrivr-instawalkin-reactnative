/**
 * Selectors let us factorize logic that queries the state.
 *
 * Selectors can be used in sagas or components to avoid duplicating that logic.
 *
 * Writing selectors is optional as it is not always necessary, we provide a simple example below.
 */

export const openSlotsPayload = (state) => {

  var payload={
                          project_id:state.duration_value.id,
                          manager_speciality_code:'SW',
                          startDateTime:state.date_value.set_start_of_day_utc,
                          endDateTime:state.date_value.set_end_of_day_utc,
                          lattitude:state.location_value.latitude,
                          longitude:state.location_value.longitude
                    };


                    return payload;
}
