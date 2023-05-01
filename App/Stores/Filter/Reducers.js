/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { FilterTypes } from './Actions'
import NavigationService from 'App/Services/NavigationService' 


export const setFilterValues = (state,{payload}) => {
const type=payload.type;
const value=payload.value


 return{ ...state,
  [type]:value}

}

export const onAllPricingDurationLoading = (state,payload) => ({
  ...state,
	AllPricingDurationLoading:true,
 	AllPricingDurationFailure:null

})

//if success set default values too
export const onAllPricingDurationSuccess = (state,{all_pricing_duration,duration_value}) => ({
  ...state,
  	all_pricing_duration:all_pricing_duration,
  	duration_value:duration_value,
	AllPricingDurationLoading:false,
 	AllPricingDurationFailure:null

})
export const onAllPricingDurationFailure = (state, { errorMessage }) => ({
  ...state,
  	all_pricing_duration:{},
	AllPricingDurationLoading:false,
 	AllPricingDurationFailure:errorMessage

})


//if success set default values too
export const onAllSpecialitiesSuccess = (state,{all_specialities}) => ({
  ...state,
    all_specialities:all_specialities,
    onAllSpecialitiesLoading:false,
    onAllSpecialitiesFailure:null

})

//if success set default values too
export const setDefaultForGenderAndSpecialities = (state,{default_value,gender_code}) => ({
  ...state,
  
    set_default_all_specialities:default_value,
    gender_code:gender_code

})

export const setDefaultLoadValues = (state) => ({
  ...state,
  onAllSpecialitiesLoading:false,
  AllPricingDurationLoading:false,
})
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [FilterTypes.ON_ALL_PRICING_DURATION_LOADING]:onAllPricingDurationLoading,
  [FilterTypes.ON_ALL_PRICING_DURATION_SUCCESS]:onAllPricingDurationSuccess,
  [FilterTypes.ON_ALL_PRICING_DURATION_FAILURE]:onAllPricingDurationFailure,
  [FilterTypes.SET_FILTER_VALUES]:setFilterValues,
 [FilterTypes.ON_ALL_SPECIALITIES_SUCCESS] :onAllSpecialitiesSuccess,
 [FilterTypes.SET_DEFAULT_FOR_GENDER_AND_SPECIALITIES] :setDefaultForGenderAndSpecialities,
    [FilterTypes.SET_DEFAULT_LOAD_VALUES]:setDefaultLoadValues
})


//inititae the task null
//loading the task null
//on success of task
//on failrure of task
///state 
//loading the success of task boolean
//error message
//user on load
