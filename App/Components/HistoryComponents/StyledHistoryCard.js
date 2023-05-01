import React from 'react';
import { View, Text, SectionList,
  RefreshControl,StyleSheet,TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import {Fonts,Colors} from '../../Theme'
import { Card, ListItem } from 'react-native-elements'
import NavigationService from 'App/Services/NavigationService'
import {Button,StyledText} from '../'
import {width, height, totalSize} from 'react-native-dimension';
import _ from 'lodash'
import {isCurrentUTCDateAfter,isCurrentUTCDateBefore} from 'App/utils/DateTransform'
import StyledHistoryCardDetail from './StyledHistoryCardDetail'
import moment from 'moment';
import 'moment-timezone';
const StyledHistoryCard = ({bookings,...rest}) => {

const closedOrCancelledListings=_.chain(bookings).filter(function(booking){return isCurrentUTCDateAfter(booking.utc_end_date)|| booking.closed;})
.orderBy(function (booking) { return moment(booking.utc_end_date).unix()}, ['desc'])
.value();
const upcoming=_.chain(bookings).filter(function(booking){return isCurrentUTCDateBefore(booking.utc_end_date)&& !booking.closed;})
.orderBy(function (booking) { return moment(booking.utc_end_date).unix()})
.value();

const DATA = [
  {
    title: 'Upcoming',
    data: upcoming,
  },
  {
    title: 'Previous',
    data: closedOrCancelledListings,
  },
  
];


renderNoContent = (section) => {
   if(section.data.length == 0){
      return null
   }
   return ( <Text style={StyledHistoryStyle.header}>{section.title}</Text>)
}
  return (
  <SectionList
       sections={DATA}
    renderItem={
      ({ item, index }) =>
<StyledHistoryCardDetail key={index} booking={item}/>
    }
    keyExtractor={(booking, index) => index.toString()}
  
     renderSectionHeader={({section}) => this.renderNoContent(section)}
  />
     
  );
}






const mapStateToProps = (state) => ({
bookings:state.booking.bookings
})

const mapDispatchToProps = (dispatch) => ({

})

export  default StyledHistoryCards = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledHistoryCard)

const StyledHistoryStyle = StyleSheet.create({
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
  header:{
    paddingLeft:width(5),
     color: Colors.brandPrimary, 
    fontFamily: Fonts.family.primaryBold,
      ...Fonts.style.h1,
  }

});
