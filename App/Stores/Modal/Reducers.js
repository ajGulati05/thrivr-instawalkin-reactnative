/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ModalTypes } from './Actions'

export const showModal = (state,{typeOfModal,triggerAPI}) => (console.log("is thus happeing"+triggerAPI),{
  ...state,
  isModalOpen: true,
  typeOfModal:typeOfModal,
  triggerAPI:triggerAPI
})

export const hideModal = (state) => ({
  ...state,
  isModalOpen: false,
  typeOfModal:null,
  triggerAPI:false

})


/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ModalTypes.SHOW_MODAL]:showModal,
  [ModalTypes.HIDE_MODAL]:hideModal,
  
})

