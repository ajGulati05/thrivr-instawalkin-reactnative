import React from 'react';
import { View, Text, FlatList,
  RefreshControl,StyleSheet,TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import {Fonts,Colors} from '../../Theme'
import BookingActions from 'App/Stores/Booking/Actions'

import NavigationService from 'App/Services/NavigationService'
import {StyledText} from '../'
import {isCurrentUTCDateAfter,isCurrentUTCDateBefore} from 'App/utils/DateTransform'


const HistoryActionButton = ({initiateCancelBooking,initiateRescheduleBooking,requestReceiptSaga,booking,...rest}) => {


//&&isCurrentUTCDateAfter(booking.utc_start_date)
 
  return (
  <View style={HistoryActionButtonStyle.container}>
   <View style={HistoryActionButtonStyle.innerContainer}>
   {!booking.closed&&booking.paid_by=='CR'&&isCurrentUTCDateAfter(booking.utc_start_date)&&
   <StyledText actiontext bold center onPress={()=> {NavigationService.navigate('TipScreen',{booking})}}>Add Tip
</StyledText>
}   
 {isCurrentUTCDateAfter(booking.utc_end_date)&& <StyledText actiontext bold center onPress={()=> {requestReceiptSaga(booking.id)}}>Email receipt
</StyledText> }

</View>
 <View style={HistoryActionButtonStyle.innerContainer}>
 
 {!booking.closed&&isCurrentUTCDateBefore(booking.utc_start_date)&& <StyledText actiontext bold center onPress={()=> {initiateCancelBooking(booking)}}>Cancel
</StyledText>  }
</View>
</View>
     
  );
}




/*<StyledText actiontext bold center onPress={()=> {initiateRescheduleBooking(booking)}}>Reschedule
</StyledText> */ 

const mapStateToProps = (state) => ({
bookings:state.booking.bookings
})

const mapDispatchToProps = (dispatch) => ({
requestReceiptSaga:(booking_id)=>{dispatch(BookingActions.requestReceiptSaga(booking_id))},
initiateCancelBooking:(booking_id)=>{dispatch(BookingActions.initiateCancelBooking(booking_id))},
initiateRescheduleBooking:(booking_id)=>{dispatch(BookingActions.initiateRescheduleBooking(booking_id))},
})

export  default HistoryActionButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryActionButton)

const HistoryActionButtonStyle = StyleSheet.create({
   innerContainer:{
      display: 'flex',
      flexDirection:  'column',
     
  },
  innerContainer:{
      display: 'flex',
      justifyContent:  'space-around',
      flexDirection:  'row',
     
  }

});