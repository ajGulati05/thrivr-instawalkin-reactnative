import { put, call } from 'redux-saga/effects'
import UserActions from 'App/Stores/User/Actions'
import { userService } from 'App/Services/UserService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.fetchUserLoading())

  // Fetch user informations from an API
  const user = yield call(userService.fetchUser)
  console.log(JSON.stringify(user));
  if (user) {
    yield put(UserActions.fetchUserSuccess(user.data))
  } else {
    yield put(
      UserActions.fetchUserFailure('There was an error while fetching user informations.')
    )
  }
}


export function* requestUpdateProfile({firstname,lastname,phone,setErrors}){
    // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.fetchUserLoading())
  var payload={firstname,lastname,phone}
  // Fetch user informations from an API
  const user = yield call(userService.updateUser,payload,setErrors)
  console.log(JSON.stringify(user));
  if (!user.error) {
    var updateduser={firstname,lastname,phone}
    yield put(UserActions.fetchUserSuccess(updateduser))
  } else {
    yield put(
      UserActions.fetchUserFailure('There was an error while fetching user informations.')
    )
  }
}