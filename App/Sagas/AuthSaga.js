import { put,call,select } from 'redux-saga/effects'
import AuthActions from 'App/Stores/Auth/Actions'
import UserActions from 'App/Stores/User/Actions'
import BookingActions from 'App/Stores/Booking/Actions'
import NotificationActions from 'App/Stores/Notification/Actions'
import PaymentActions from 'App/Stores/Payment/Actions'
import {authService} from 'App/Services/AuthService' 
import NavigationService from 'App/Services/NavigationService'
import SplashScreen from 'react-native-splash-screen'
/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* initiateLogin(email,password,setErrors) {
	 
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(AuthActions.loginLoading());


 const tokens = yield call(authService.initiateLogin,email,password,setErrors)
  if (!tokens.error) {

    yield put(AuthActions.onLoginSuccess(tokens.response))
    yield put(UserActions.fetchUser())
    yield put(BookingActions.fetchAllBookings())
    yield put(NotificationActions.initiateNotificationSettings())
    //do notification as well
    NavigationService.navigateAndReset('TabScreens')
    yield put(PaymentActions.fetchAllPaymentOptions())
    //history can be done here
  } else {
    yield put(
      AuthActions.onLoginFailure('Incorrect username/password.')
    )
  }

  // When those operations are finished we redirect to the main screen
  // have to figure out what screen to show here
 // NavigationService.navigateAndReset('AuthenticationScreens')
}


export function* requestRegister({email,password,firstname,lastname,phone,setErrors}){
  yield put(AuthActions.requestRegisterLoading());


 const success = yield call(authService.initiateRegister,email,password,firstname,lastname,phone,setErrors)
 
  if (!success.error) {

   const letsSee= yield put(AuthActions.initiateLogin(email,password,setErrors))
    yield put(AuthActions.requestRegisterSuccess())

    
  } else {
      console.log("error"+ JSON.stringify(success))
      var errorMessage=success.errorMessage
    yield put(
     
      AuthActions.requestRegisterFailure(errorMessage)
    )
  }
}
/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* initiateAccessCheck({check}) {

if(!check){

  yield put (AuthActions.initiateLogout())

   yield put(
      AuthActions.onLoginFailure('Oops looks like its been a long time since you last signed in.')
    )

 }
 else{
     NavigationService.navigateAndReset('TabScreens');
     yield put(BookingActions.fetchAllBookings())
    yield put(PaymentActions.fetchAllPaymentOptions())
 }
  SplashScreen.hide();
//send inititative to grab email, firstname, lastname

}

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* initiateForgotPassword({email}) {

yield put(AuthActions.requestForgotPasswordLoading());


 const success = yield call(authService.forgotPassword,email)
  if (success.error==false) {

    yield put(AuthActions.requestForgotPasswordSuccess());
  } else {
    yield put(
      AuthActions.requestForgotPasswordError('An error occurred')
    )
  }

}

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* initiateLogout() {
   //call logout function
   const authStore = state => state.auth;
  const authState = yield select(authStore);
  if(authState.isAuthorized){
 var logout = yield call(authService.initiateLogout)
}
 NavigationService.navigateAndReset('AuthenticationScreens')
  yield put (AuthActions.reset())

}