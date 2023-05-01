import { put, call } from 'redux-saga/effects'
import AppStateActions from 'App/Stores/AppState/Actions'
import {isCurrentUTCOneHourBefore} from 'App/utils/DateTransform'
export function* showShowLoadingModal() {

			 var payload={
        flag:true,
        typeName:'LOADING',
        cancel_booking_id:null,
        reschedule_booking_id:null,
        modal_title:null,
        modal_message:null,
        cancelWithFine:false
      };
  			yield put(AppStateActions.toggleShowModal(payload));
  		

}

export function* hideShowModal() {

			var payload={
        flag:false,
        typeName:null,
        cancel_booking_id:null,
        reschedule_booking_id:null,
        modal_title:null,
        modal_message:null,
        cancelWithFine:false
      };
  			yield put(AppStateActions.toggleShowModal(payload));
  			

}



export function* showServerMessageModal({modal_title,modal_message}) {
            var payload={
        flag:true,
        typeName:'MESSAGE',
        cancel_booking_id:null,
        reschedule_booking_id:null,
        modal_title:modal_title,
        modal_message:modal_message,
        cancelWithFine:false
      };
  			yield put(AppStateActions.toggleShowModal(payload));
  		

}



export function* showRescheduleMessageModal({booking}) {
var cancelWithFine=yield call(isCurrentUTCOneHourBefore,booking.utc_start_date)
var modal_title="Reschedule";
var modal_message="Are you sure?"

if(cancelWithFine)
{
 modal_title="Are you sure?";
  modal_message="Rescheduling in the last hour will result in a 25% charge"
}
  var payload={
        flag:true,
        typeName:'MESSAGE',
        cancel_booking_id:null,
        reschedule_booking_id:booking,
        modal_title:modal_title,
        modal_message:modal_message,
        cancelWithFine:cancelWithFine
      };
  			yield put(AppStateActions.toggleShowModal(payload));
  		

}



export function* showCancelMessageModal({booking}) {


var cancelWithFine=yield call(isCurrentUTCOneHourBefore,booking.utc_start_date)
var modal_title="Cancel";
var modal_message="Are you sure?"

if (cancelWithFine)
{
 modal_title="Are you sure?";
  modal_message="Cancelling in the last hour will result in a 50% charge"
}
			var payload={
        flag:true,
        typeName:'MESSAGE',
        cancel_booking_id:booking.id,
        reschedule_booking_id:null,
        modal_title:modal_title,
        modal_message:modal_message,
        cancelWithFine:cancelWithFine
      };
      console.log("click here");
  			yield put(AppStateActions.toggleShowModal(payload));
      
  		

}