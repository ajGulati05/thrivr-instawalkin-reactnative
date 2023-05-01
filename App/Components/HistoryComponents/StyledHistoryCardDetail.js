import React from 'react';
import { View, Text, FlatList,
  RefreshControl,StyleSheet,TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import {Fonts,Colors} from '../../Theme'
import { Card, ListItem } from 'react-native-elements'
import NavigationService from 'App/Services/NavigationService'
import {Button,StyledText} from '../'
import {width, height, totalSize} from 'react-native-dimension';
import {isCurrentUTCDateAfter,isCurrentUTCDateBefore} from 'App/utils/DateTransform'

const StyledHistoryCardDetail = ({booking,...rest}) => {

/*var content=(    <Button
        
         
          secondary
          caption="Rebook"
          onPress={()=>{console.log("hello")}}
/>)*/
var content=(<Text style={[StyledHistoryCardDetailStyle.text,StyledHistoryCardDetailStyle.upcoming]}>{'Click here for more details'}</Text>);

  var upcoming=false;
  var cancelled=false;
  var rescheduled=false;
 var bookingText=booking.massage_time;

var isBookingDateBefore=isCurrentUTCDateBefore(booking.utc_start_date);

if(isBookingDateBefore)
  {
    bookingText='Upcoming '+booking.massage_time
    upcoming=true
    content=(<Text style={[StyledHistoryCardDetailStyle.text,StyledHistoryCardDetailStyle.upcoming]}>{'Click here for more details'}</Text>)
}

if(booking.booking_status==='C' )
{
  bookingText='CANCELLED'
  content=(<Text></Text>)
  cancelled=true
}

if(booking.booking_status==='R')
{
  bookingText='RESCHEDULED'
  content=(<Text></Text>)
  rescheduled=true
}
   return (

<TouchableOpacity onPress={()=>NavigationService.navigate('HistoryDetailScreen',{booking_payload:booking})}>      
<Card containerStyle={StyledHistoryCardDetailStyle.container}>
<View style={StyledHistoryCardDetailStyle.innerContainerStyle}>

<Text style={[StyledHistoryCardDetailStyle.text,StyledHistoryCardDetailStyle.bold]}>{booking.person_name}</Text>
 <Text style={[StyledHistoryCardDetailStyle.text,upcoming&&StyledHistoryCardDetailStyle.upcoming,
  rescheduled&&StyledHistoryCardDetailStyle.rescheduled,
  cancelled&&StyledHistoryCardDetailStyle.cancelled]}>{bookingText} </Text>

</View>
<View style={StyledHistoryCardDetailStyle.innerContainerStyle}>
 <Text style={StyledHistoryCardDetailStyle.text}>{booking.location_address}</Text>
 <Text style={StyledHistoryCardDetailStyle.text}>{booking.massage_description}</Text>


</View>
{content}

  
</Card>
</TouchableOpacity>
     
  );

}



export  default StyledHistoryCardDetail

const StyledHistoryCardDetailStyle = StyleSheet.create({
  container:{
      display: 'flex',
       justifyContent:  'space-between',
      flexDirection:  'column',
     
  },
  innerContainerStyle:{
     display: 'flex',
      justifyContent:  'space-between',
      width:'100%',
       flexDirection:  'row',
       marginBottom:width(0.5)

  },
  text:{
      ...Fonts.style.h2,
    textAlign: 'center',
     color: Colors.brandDarkGrey, 
  },
  bold:{
      fontFamily: Fonts.family.primaryBold,
  },
  upcoming:{
     color: Colors.brandPrimary, 
     fontFamily: Fonts.family.primaryBold,
  },
   rescheduled:{
     color: Colors.brandPrimary, 
     fontFamily: Fonts.family.primaryBold,
  },
   cancelled:{
     color: Colors.brandSecondary, 
     fontFamily: Fonts.family.primaryBold,
  }

});