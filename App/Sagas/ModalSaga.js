import { put, call,select } from 'redux-saga/effects'
import ModalActions from 'App/Stores/Modal/Actions'
import PermissionActions from 'App/Stores/Permission/Actions'
import NavigationService from 'App/Services/NavigationService';
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* toggleModal(payload) {

  const authStore = state => state.auth;
  const auth = yield select(authStore);
if(payload.typeOfModal==="LOCATION" && auth.isAuthorized)
{	//check if the user is actually authorized

	 console.log('called requestNearBy');
	yield put(PermissionActions.initiateLocationPermission());
}
if(payload.isModalOpen){
	 console.log('called 2requestNearBy');
  			yield put(ModalActions.showModal(payload.typeOfModal,payload.triggerAPI));
  			NavigationService.navigate('ModalScreen');
		}
	else{
		yield put(ModalActions.hideModal(null));
		NavigationService.goBack();
	}
}




