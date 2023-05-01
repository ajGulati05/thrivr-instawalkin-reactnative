
import moment from 'moment';
import 'moment-timezone';
import _ from 'lodash'


export function isCurrentUTCDateAfter(compareDate){
return moment().utc().isAfter(compareDate)
}

export function isCurrentUTCDateBefore(compareDate){
return moment().utc().isBefore(compareDate)
}

export function isCurrentUTCOneHourBefore(compareDate){
 var value=moment.duration(moment().utc().diff(compareDate)).asMinutes();
 if (value<60&&isCurrentUTCDateAfter(compareDate)){
 	return true
 }

 return false

}


