import { put, call,select } from 'redux-saga/effects'
import PaymentActions from 'App/Stores/Payment/Actions'
import AppStateActions from 'App/Stores/AppState/Actions'
import { paymentsService } from 'App/Services/PaymentsService'
import { stripeService } from 'App/Services/StripeServices'
import NavigationService from 'App/Services/NavigationService'
import _ from 'lodash'
import {
  Platform
} from 'react-native';

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchAllPaymentOptions() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(PaymentActions.fetchPaymentsLoading())

  // Fetch user informations from an API
  const cards = yield call(paymentsService.getPaymentOptions)
  if (cards) {

    yield put(PaymentActions.fetchPaymentsSuccess(cards))
   
  } else {
    yield put(
      PaymentActions.fetchPaymentsFailure('There was an error while fetching your payment options.')
    )
  }
}

export function* deleteACardSaga({stripedatas_id}){
yield put(PaymentActions.deleteACard(stripedatas_id))
yield call(paymentsService.deleteStripeCard,stripedatas_id)
yield call(setDefaultCard);
}
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* addCard({card}) {
 //make call to stripe

 console.log("Token here")
 console.log(JSON.stringify(card))
 yield put(PaymentActions.fetchAddCardLoading())

 const token=yield call(stripeService.initiateStripeTokenWithCard,card)
 console.log("Token here"+token)

 var tokenConstruct={
        card_id:token.card.cardId,
        card_token:token.tokenId,
        card_brand:token.card.brand,
        card_last_four:token.card.last4,
        native_pay:false //TODO native pay or not
 }
if (token) {
    const card = yield call(paymentsService.addStripeCard,tokenConstruct)
     console.log("Token here"+JSON.stringify(card))
    if(card){
    yield put(PaymentActions.fetchAddCardSuccess(card))
  
    NavigationService.goBack()
  }else {
    yield put(
      PaymentActions.fetchAddCardFailure('There was an error while adding a card.')
    )
  }
  } else {
    yield put(
      PaymentActions.fetchAddCardFailure('There was an error while adding a card.')
    )
  }
  


 
}


  export function* setDefaultCard(){
     const appStateStore = state => state.appstate.can_pay_with_native_pay;
  const nativePayAvailable = yield select(appStateStore);
    if(!nativePayAvailable){
  const cardStore = state => state.payment.cards;
  const cards = yield select(cardStore);
  var nonNativeCards=yield _.filter(cards,{native_pay:false});
  if(!_.isEmpty(nonNativeCards)){
    var defaultCard=_.filter(nonNativeCards,{default_card:1});
    if(!_.isEmpty(defaultCard)){
      var id={title:defaultCard[0].title ,stripedatas_id: defaultCard[0].id,paid_by:'CR'}
      yield put(AppStateActions.setDefaultPayMethod(id));
    }
    else{
     var topCard= _.orderBy(cards, ['id'],['desc']);
      var id={title:topCard[0].title ,stripedatas_id: topCard[0].id,paid_by:'CR'}
      yield put(AppStateActions.setDefaultPayMethod(id));
    }
// then we just have pay roll cards
}
else{
  ///pick option
   const id={
        title: 'Pick',
        id: 'PICK_OPTION',
      }
       yield put(AppStateActions.setDefaultPayMethod(id));
}
}
  }