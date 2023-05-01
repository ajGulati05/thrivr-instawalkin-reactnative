/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { OpenSlotsTypes } from './Actions'

export const fetchOpenSlotsLoading = (state) => ({
  ...state,
  openSlotsIsLoading: true,
  openSlotsErrorMessage: null,
})

export const fetchOpenSlotsSuccess = (state, { openslots }) => ({
  ...state,
  openslots: openslots,
  openSlotsIsLoading: false,
  openSlotsErrorMessage: null,
})

export const fetchOpenSlotsFailure = (state, { errorMessage }) => ({
  ...state,
  openslots: {},
  openSlotsIsLoading: false,
  openSlotsErrorMessage: errorMessage,
})
export const setDefaultLoadValues = (state) => ({
  ...state,
  openSlotsIsLoading:false,

})
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [OpenSlotsTypes.FETCH_OPEN_SLOTS_LOADING]: fetchOpenSlotsLoading,
  [OpenSlotsTypes.FETCH_OPEN_SLOTS_SUCCESS]: fetchOpenSlotsSuccess,
  [OpenSlotsTypes.FETCH_OPEN_SLOTS_FAILURE]: fetchOpenSlotsFailure,
   [OpenSlotsTypes.SET_DEFAULT_LOAD_VALUES]:setDefaultLoadValues
})
