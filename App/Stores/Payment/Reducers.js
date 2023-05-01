/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { PaymentTypes } from './Actions'
import { omit } from 'lodash'


export const deleteACard = (state,{stripedatas_id}) => (console.log("called"+stripedatas_id),{
  ...state,
  cards:omit(state.cards,stripedatas_id)
})
export const fetchAddCardSuccess = (state,{card}) => (console.log(JSON.stringify(card)),{
  ...state,
  cards:{
          ...card,...state.cards
        },
 addCardLoading:false,
  addCardError:null

})

export const fetchAddCardFailure = (state,{errorMessage}) => ({
  ...state,
  addCardLoading:false,
  addCardError:errorMessage

})
export const fetchAddCardLoading = (state,{errorMessage}) => ({
  ...state,
  addCardLoading:true,
  addCardError:null

})
export const fetchPaymentsLoading = (state) => ({
  ...state,
  cards:null,
  fetchPaymentsLoading: true,
  paymentsErrorMessage: null,

})

export const fetchPaymentsSuccess = (state, { cards }) => (console.log("I guess no"+JSON.stringify
  (cards)),{
  ...state,
   cards:cards,
  fetchPaymentsLoading: false,
  paymentsErrorMessage: null,
})

export const fetchPaymentsFailure = (state, { errorMessage }) => ({
  ...state,
  cards:null,
  fetchPaymentsLoading: false,
  paymentsErrorMessage: errorMessage,
})
export const setDefaultLoadValues = (state) => ({
  ...state,
  fetchPaymentsLoading:false,
  addCardLoading:false
})
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [PaymentTypes.FETCH_ADD_CARD_SUCCESS]: fetchAddCardSuccess,
  [PaymentTypes.FETCH_ADD_CARD_FAILURE]:fetchAddCardFailure,
  [PaymentTypes.FETCH_ADD_CARD_LOADING]:fetchAddCardLoading,
  [PaymentTypes.DELETE_A_CARD]: deleteACard,
  [PaymentTypes.FETCH_PAYMENTS_LOADING]: fetchPaymentsLoading,
  [PaymentTypes.FETCH_PAYMENTS_SUCCESS]:fetchPaymentsSuccess,
  [PaymentTypes.FETCH_PAYMENTS_FAILURE]:fetchPaymentsFailure,
  [PaymentTypes.SET_DEFAULT_LOAD_VALUES]:setDefaultLoadValues


})
