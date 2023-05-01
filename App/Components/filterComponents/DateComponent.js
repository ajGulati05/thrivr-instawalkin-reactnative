import React, { Component } from "react";
import {width, height, totalSize} from 'react-native-dimension';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import {Fonts,Colors} from '../../Theme'
import moment from 'moment';
import 'moment-timezone';
import NavigationService from 'App/Services/NavigationService'
import FilterActions from 'App/Stores/Filter/Actions'
 const DateComponents = ({ setValues,filter,...rest }) => {

  const {date_value}=filter;
  const inputStyles = {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.brandDarkGrey,
    padding: 10,
    marginBottom: 3,
    fontFamily: Fonts.primaryRegular,
    color: Colors.brandPrimary
  };


function dispatchDateSet(day){
   
    setValues({type:'date_value',value:{
      current_timezone_datetime:date_value.current_timezone_datetime, 
      current_timezone_formatteddate:date_value.current_timezone_formatteddate,
      text:moment(day.dateString, 'YYYY-MM-DD').format(date_value.current_format),
      selected_date:day.dateString,
      current_localization:date_value.current_localization,
      current_format:date_value.current_format,
      current_utc_datetime:date_value.current_utc_datetime,
      current_minimum_formatteddate:date_value.current_minimum_formatteddate,
      placeholder:moment(day.dateString, 'YYYY-MM-DD').format(date_value.current_format),
      set_end_of_day_utc:moment(day.dateString,'YYYY-MM-DD').utc().endOf('day').format('YYYY-MM-DD H:mm:ss'),
      set_start_of_day_utc:moment(day.dateString,'YYYY-MM-DD').utc().startOf('day').format('YYYY-MM-DD H:mm:ss'),
    }},rest.triggerAPI
      );

};

  return (


      <Calendar

       style={{
    height: height(50)
  }}
  // Specify theme properties to override specific styles for calendar parts. Default = {}
  theme={{
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: Colors.brandDarkGrey,
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: Colors.brandSecondary,
    todayTextColor: Colors.brandDarkGrey,
    dayTextColor: Colors.brandPrimary,
    textDisabledColor: Colors.brandLightGrey,
    arrowColor: Colors.brandPrimary,
    monthTextColor: Colors.brandPrimary,
    indicatorColor: Colors.brandSecondary,
    //textDayFontFamily: 'monospace',
    //textMonthFontFamily: 'monospace',
    //textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }}
  // Initially visible month. Default = Date()
  current={date_value.current_timezone_formatteddate}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={date_value.current_timezone_formatteddate}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
 
  // Handler which gets executed on day press. Default = undefined
   onDayPress={(day) => {dispatchDateSet(day)}}
  // Handler which gets executed on day long press. Default = undefined
  
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'MMMM yyyy'}

  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
 
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={false}

  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={substractMonth => substractMonth()}
  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
/>
  
  );
};






const mapStateToProps = (state) => ({
filter:state.filter
})

const mapDispatchToProps = (dispatch) => ({
setValues:(payload,triggerAPI)=>dispatch(FilterActions.setValues(payload,triggerAPI)),
})

export  default DateComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateComponents)

