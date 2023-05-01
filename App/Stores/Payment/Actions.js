import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchAllPaymentOptions:null,
  deleteACardSaga:['stripedatas_id'],
  deleteACard:['stripedatas_id'],

  setDefaultCard:['stripe_id'],
  fetchPaymentsLoading: null,
  fetchPaymentsSuccess: ['cards'],
  fetchPaymentsFailure: ['errorMessage'],
  
  addACardSaga:['card'],
  fetchAddCardSuccess: ['card'],
  fetchAddCardFailure: ['errorMessage'],
  fetchAddCardLoading:null,
  setDefaultLoadValues:null
})

export const PaymentTypes = Types
export default Creators




