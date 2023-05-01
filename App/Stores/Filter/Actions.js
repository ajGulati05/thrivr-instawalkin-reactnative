import { createActions } from 'reduxsauce'

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Stores/Example/Reducers.js
 * - to trigger sagas, for example in App/Sagas/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in App/App.js
 * - in sagas using `yield put(...)`, for example in App/Sagas/ExampleSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
  // on user informations
  setValues:["payload","triggerAPI"],
  setFilterValues:["payload"],
  initiateLoadingFilter: null,
  initiateAllPricingDurationLoad:null,
  initiateAllSpecialitiesLoad:null,
  initiateGenderCodeLoad:null,
  initiateFiltering: null,
  onAllPricingDurationLoading: null,
  onAllPricingDurationSuccess: ['all_pricing_duration','duration_value'],
  onAllPricingDurationFailure: ['errorMessage'],
  onAllSpecialitiesLoading: null,
  onAllSpecialitiesSuccess: ['all_specialities'],
  onAllSpecialitiesFailure: ['errorMessage'],
  onGenderCodeLoading: null,
  onGenderCodeSuccess: ['gender_code'],
  onGenderCodeFailure: ['errorMessage'],
  setDefaultForGenderAndSpecialities:['default_value','gender_code'],
  setDefaultLoadValues:null
})

export const FilterTypes = Types
export default Creators




