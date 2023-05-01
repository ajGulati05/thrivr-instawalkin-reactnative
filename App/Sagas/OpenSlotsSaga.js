import { put, call,select } from 'redux-saga/effects'
import OpenSlotsActions from 'App/Stores/OpenSlots/Actions'
import { openSlotsService } from 'App/Services/OpenSlotsService'
   import NavigationService from 'App/Services/NavigationService'  
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchOpenSlots() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(OpenSlotsActions.fetchOpenSlotsLoading())

  // Fetch user informations from an API
  const filters = state => state.filter;
  const state = yield select(filters);

  const data = yield call(openSlotsService.fetchOpenSlots,state)
 
  const openslots=data.availabilities;

  if (openslots) {
    yield put(OpenSlotsActions.fetchOpenSlotsSuccess(openslots))

NavigationService.navigate('FilteredResponseScreen')
  } else {
    yield put(
      OpenSlotsActions.fetchOpenSlotsFailure('There was an error while fetching user informations.')
    )
  }
}


