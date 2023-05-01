import { put,call } from 'redux-saga/effects'
import UserActions from 'App/Stores/User/Actions'
import FilterActions from 'App/Stores/Filter/Actions'
import AuthActions from 'App/Stores/Auth/Actions'
import AppStateActions from 'App/Stores/AppState/Actions'
import NavigationService from 'App/Services/NavigationService'
import SplashScreen from 'react-native-splash-screen'
import {authService} from 'App/Services/AuthService' 
import {initiateAccessCheck} from './AuthSaga'
import {stripeService} from 'App/Services/StripeServices' 
import {setDefaultCard} from './PaymentSaga'
import OpenSlotsActions from 'App/Stores/OpenSlots/Actions'
import BookingActions  from 'App/Stores/Booking/Actions'
import PaymentActions from 'App/Stores/Payment/Actions'
import PermissionActions from 'App/Stores/Permission/Actions'
import NotificationActions from 'App/Stores/Notification/Actions'
import {
  Platform
} from 'react-native';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* startup({tokens}) {

  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
//yield put(AuthActions.reset())
  //loading filter
  yield put(FilterActions.initiateLoadingFilter())
if( tokens != null  ){
const check = yield call(authService.initiateAccessCheck)

yield call(initiateAccessCheck,check)
    //has been authorized after startup please check values
    if(check){

       yield call(setNativePayValues);
    }

}
else{
   SplashScreen.hide();
}

yield call(setAllLoadingFalse)
}

export function* setAllLoadingFalse(){
  yield put(AppStateActions.setDefaultLoadValues())
  yield put(AuthActions.setDefaultLoadValues())
  yield put(BookingActions.setDefaultLoadValues())
  yield put(FilterActions.setDefaultLoadValues())
  yield put(NotificationActions.setDefaultLoadValues())
  yield put(OpenSlotsActions.setDefaultLoadValues())
  yield put(PaymentActions.setDefaultLoadValues())
  yield put(PermissionActions.setDefaultLoadValues())
}

export function* setNativePayValues() {
//var canPayWithNativeSupport=yield call(stripeService.customdeviceSupportsNativePay)
//if(canPayWithNativeSupport)
if(false)
{
  console.log("canPayWithNativeSupport"+canPayWithNativeSupport)
 var canMakeNativePayPayments= yield call(stripeService.customcanMakeNativePayPayments)
  if(canMakeNativePayPayments){
      const id={
        title: Platform.OS === 'android'?'Google Pay':'Apple Pay',
        id:'NATIVE_PAY',
       };
    yield put(AppStateActions.canPayWithNativePay(canMakeNativePayPayments));
    yield put(AppStateActions.setDefaultPayMethod(id));
  }
}
else{

    yield call(setDefaultCard);
  }
}



  
