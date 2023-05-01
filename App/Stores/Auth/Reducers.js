/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

export const loginLoading = (state) => ({
  ...state,
  isAuthorized:false,
  loginLoading: true,
  onLoginSuccess:null,
  onLoginFailure: null,
  tokens:null
})

export const onLoginSuccess = (state, { tokens }) => (console.log("got caled"+JSON.stringify(tokens)),{
  ...state,
  isAuthorized:true,
  tokens: tokens,
  loginLoading:false,
  onLoginSuccess: true,
  onLoginFailure: false,
})

export const onLoginFailure = (state, { errorMessage }) => ({
  ...state,
  tokens:null,
  isAuthorized:false,
  loginLoading:false,
  onLoginSuccess: false,
  onLoginFailure: errorMessage,
})

export const requestRegisterLoading = (state) => ({
  ...state,
    registerLoading:true,
  registerErrorMessage: null
})

export const requestRegisterSuccess = (state) => ({
  ...state,
    registerLoading:false,
  registerErrorMessage: null
})

export const requestRegisterFailure = (state, { errorMessage }) => (console.log(JSON.stringify(errorMessage)),{
  ...state,
    registerLoading:false,
  registerErrorMessage: errorMessage
  
})


export const requestForgotPasswordLoading = (state) => ({
  ...state,
  forgotPasswordLoading:true,
  forgotPasswordError:null
})

export const requestForgotPasswordSuccess = (state) => ({
  ...state,
     forgotPasswordLoading:false,
  forgotPasswordError:null
})

export const requestForgotPasswordError = (state, { errorMessage }) => (console.log(JSON.stringify(errorMessage)),{
  ...state,
  forgotPasswordLoading:false,
  forgotPasswordError:errorMessage
  
})
export const setDefaultLoadValues = (state) => ({
  ...state,
  forgotPasswordLoading:false,
  registerLoading:false,
  loginLoading:false
})
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.LOGIN_LOADING]:loginLoading,
  [AuthTypes.ON_LOGIN_SUCCESS]: onLoginSuccess,
  [AuthTypes.ON_LOGIN_FAILURE]: onLoginFailure,
  [AuthTypes.REQUEST_REGISTER_LOADING]:requestRegisterLoading,
  [AuthTypes.REQUEST_REGISTER_SUCCESS]: requestRegisterSuccess,
  [AuthTypes.REQUEST_REGISTER_FAILURE]: requestRegisterFailure,
  [AuthTypes.REQUEST_FORGOT_PASSWORD_LOADING]:requestForgotPasswordLoading,
  [AuthTypes.REQUEST_FORGOT_PASSWORD_SUCCESS]:requestForgotPasswordSuccess,
  [AuthTypes.REQUEST_FORGOT_PASSWORD_ERROR]:requestForgotPasswordError,
  [AuthTypes.SET_DEFAULT_LOAD_VALUES]:setDefaultLoadValues
})

 


