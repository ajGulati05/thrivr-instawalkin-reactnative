import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchOpenSlots: null,
  // The operation has started and is loading
  fetchOpenSlotsLoading: null,
  // User informations were successfully fetched
  fetchOpenSlotsSuccess: ['openslots'],
  // An error occurred
  fetchOpenSlotsFailure: ['errorMessage'],
  setDefaultLoadValues:null
})

export const OpenSlotsTypes = Types
export default Creators




