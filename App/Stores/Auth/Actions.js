import { createActions } from 'reduxsauce'

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Stores/Example/Reducers.js
 * - to trigger sagas, for example in App/Sagas/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in App/App.js
 * - in sagas using `yield put(...)`, for example in App/Sagas/ExampleSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
  // Fetch user informations
  initiateLogin: ['email','password','setErrors'],
  loginLoading: null,
  // The operation has started and is loading

  // User informations were successfully fetched
  onLoginSuccess: ['tokens'],
  // An error occurred
  onLoginFailure: ['errorMessage'],
  checkAccess:null,
  reset:null, //logou,
  requestRegister: ['email','password','firstname','lastname','phone','setErrors'],//saga call
  requestRegisterLoading:null,
  requestRegisterSuccess:null,
  requestRegisterFailure:['errorMessage'],
  initiateLogout:null,
  initiateForgotPassword:['email'],
  requestForgotPasswordLoading:null,
  requestForgotPasswordSuccess:null,
  requestForgotPasswordError:null,
  setDefaultLoadValues:null
})

export const AuthTypes = Types
export default Creators
