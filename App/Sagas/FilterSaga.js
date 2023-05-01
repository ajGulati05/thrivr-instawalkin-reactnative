import { put,call,select } from 'redux-saga/effects'
import FilterActions from 'App/Stores/Filter/Actions'
import OpenSlotsActions from 'App/Stores/OpenSlots/Actions'
import {filterService} from 'App/Services/FilterService' 
import NavigationService from 'App/Services/NavigationService'
import {fetchOpenSlots } from './OpenSlotsSaga'
import _ from 'lodash'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* initiateLoadingFilter() {
	 
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html

  yield put(FilterActions.initiateAllPricingDurationLoad());
 

const all_pricing_duration = yield call(filterService.initiateAllPricingDurationLoad)
const all_specialities= yield call(filterService.initiateAllSpecialitiesLoad)
yield put(FilterActions.onAllSpecialitiesSuccess(all_specialities))
  if (all_pricing_duration) {
    var filterdValues=_.filter(all_pricing_duration, { default:true });
    var defaultDurationPrice=filterdValues[0].mobile_name+" - $"+filterdValues[0].project_pricings.amount;
    var duration_value= {placeholder:defaultDurationPrice,id:filterdValues[0].id,text:''};
    yield put(FilterActions.onAllPricingDurationSuccess(all_pricing_duration,duration_value))
    
  } else {
    yield put(
      FilterActions.onAllPricingDurationFailure('There was an error while fetching user informations.')
    )
  }

}
/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* initiateLoadingAllSpecialities() {
   
   const all_specialities= yield call(filterService.initiateAllSpecialitiesLoad)
   
    yield put(FilterActions.onAllSpecialitiesSuccess(all_specialities))
 
 }

export function* setDefaultValues(){
    const all_specialities = state => state.filter.all_specialities;
    const state = yield select(all_specialities);
   var codeFilteredValue=_.filter(state, { default:true });
  var filteredValues=codeFilteredValue[0];
   yield call(setValuesToFilterOpenSlots,filteredValues,'E')
 //  yield put(FilterActions.setDefaultForGenderAndSpecialities(filterdValues,'E'));
}

export function* setValuesToFilterOpenSlots(filteredValues,genderCode){
 
   yield put(FilterActions.setDefaultForGenderAndSpecialities(filteredValues,genderCode));
}
export function* setValues({payload,triggerAPI}) {
   console.log("not trigger")
  
    NavigationService.goBack()

yield put(FilterActions.setFilterValues(payload))

  if(triggerAPI){
    yield call(fetchOpenSlots)
  }
  // When those operations are finished we redirect to the main screen
  // have to figure out what screen to show here
 // NavigationService.navigateAndReset('AuthenticationScreens')
}
