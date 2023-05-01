import React, { Component } from "react";
import {

  ActivityIndicator,
  Text,
  View,StyleSheet
} from 'react-native';
import {Fonts,Colors} from '../../Theme'
import {Button} from '../'
import {width, height, totalSize} from 'react-native-dimension';
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import AppStateActions from 'App/Stores/AppState/Actions'
import NavigationService from 'App/Services/NavigationService'
import  BookingActions from 'App/Stores/Booking/Actions'
const ServerMessageComponents = ({requestCancelBooking,title,closeModal,message,...rest}) => {

var buttonText='Close'
var content=<Text></Text>
if (rest.reschedule_booking_id!='undefined' && rest.reschedule_booking_id>0)
{
content=( <View style={ServerMessageComponentStyle.innercontainer}>
           <Button
           large
          secondary
          caption={'Reschedule'}
          onPress={onPress()}
/>
 </View>)
}

if (rest.cancel_booking_id!='undefined' && rest.cancel_booking_id>0)
{
content=( <View style={ServerMessageComponentStyle.innercontainer}>
           <Button
           large
          secondary
          caption={'Cancel'}
          onPress={()=>{requestCancelBooking(rest.cancel_booking_id)}}      
/>
 </View>)
}

if (rest.buttonText){
  buttonText=rest.buttonText
}
function onPress(){
if (rest.buttonText){
  rest.onPress();
}
else{
  //close
}
}

  return (
     
      <View style={ServerMessageComponentStyle.container}>
      <View style={ServerMessageComponentStyle.innercontainer}>
     <Text style={ServerMessageComponentStyle.title}>{title}</Text>
       </View>
     <View style={ServerMessageComponentStyle.innercontainer}>
      <Text style={ServerMessageComponentStyle.message}>{message}</Text>
      </View>
     {content}
   <View style={ServerMessageComponentStyle.innercontainer}>
           <Button
           large
          secondary
          caption={'Close'}
          onPress={()=>closeModal()}
/>
      </View>
       </View>
  
  );
};



const mapStateToProps = (state) => ({
bookings:state.booking.bookings
})

const mapDispatchToProps = (dispatch) => ({
closeModal:()=>{dispatch(AppStateActions.closeModal())},
requestCancelBooking:(booking_id)=>{dispatch(BookingActions.requestCancelBooking(booking_id))}
})

export  default ServerMessageComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerMessageComponents)

const ServerMessageComponentStyle = StyleSheet.create({
container:{
  display: 'flex',
  alignItems:  'center',
  justifyContent:  'space-around',
  flexDirection: 'column'
},
title:{
      fontFamily: Fonts.family.primaryBold,
     color: Colors.brandPrimary,
      letterSpacing: 1,
       ...Fonts.style.h1,
        textAlign:'center'
},
message:{
 fontFamily: Fonts.primaryRegular,
     color: Colors.brandDarkGrey,
     ...Fonts.style.h2,
    textAlign:'center'
},
innercontainer:{
  paddingBottom: width(2)
}

});