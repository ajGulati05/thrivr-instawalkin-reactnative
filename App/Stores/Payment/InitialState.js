/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  cards: null,
  default_card:{
        title: 'Pick',
        id: 'PICK_OPTION',
      },

  fetchPaymentsLoading: false,
  paymentsErrorMessage: null,
  addCardLoading:false,
  addCardError:null
}
