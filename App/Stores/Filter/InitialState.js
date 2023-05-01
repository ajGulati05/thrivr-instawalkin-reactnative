/**
 * The initial values for the redux state.
 */

 //couple of things 
 //
import moment from 'moment';
import 'moment-timezone';
var momentUTCUnix = moment().utc();
var momentUTCDate = momentUTCUnix.format();
var momentTimezoned = momentUTCUnix.tz('America/Regina');
var formatedMomentTimeZoned=momentTimezoned.format('MMM DD Y');


//console.log("momentUTCUnix" + momentUTCUnix);
//console.log("momentUTCDate" + momentUTCDate);
//console.log("momentTimezoned" + momentTimezoned);

//console.log("zonedDate" + zonedDate);

export const INITIAL_STATE = {
	all_pricing_duration:{},
	all_specialities:null,
	set_default_all_specialities:null,
	gender_code:'E',
	date_value:{
		current_utc_datetime:momentUTCDate,
		current_timezone_datetime:momentTimezoned,
		current_timezone_formatteddate:momentTimezoned.format('YYYY-MM-DD'),
		current_localization:'America/Regina',
		current_format:'MMM DD, Y',
		current_placeholder:formatedMomentTimeZoned,
		current_minimum_formatteddate:momentTimezoned.format('YYYY-MM-DD'),
		

	},
	duration_value:{placeholder:'60 Minutes- $75 Pricing'},
	location_value:{placeholder:'Street/City'},
	AllPricingDurationLoading:null,
	AllSpecialitiesLoading:null,
	GenderCodeLoading:null,
	AllPricingDurationFailure:null,
	AllSpecialitiesFailure:null,
	GenderCodeFailure:null
	
}
