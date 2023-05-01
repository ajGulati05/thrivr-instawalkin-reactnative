import React, { Component } from "react";
import {width, height, totalSize} from 'react-native-dimension';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  View,Platform,Linking
} from 'react-native';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import {Fonts,Colors} from '../../Theme'
import moment from 'moment';
import 'moment-timezone';
import NavigationService from 'App/Services/NavigationService'
import FilterActions from 'App/Stores/Filter/Actions'
import DetailText from './DetailText'
 const MassageInformations = ({ ...rest }) => {
 




  

//const {date_value,duration_value,location_value}=this.props.filter;
 const {massage_description,
        massage_time,
        location_address,
        person_name,
        lat,
        lng,parking_description,address_description} = rest.appstate.booking_payload

 function openMap(){
  console.log("open map clicked")
  const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=:';
    const latLng = `${lat},${lng}`;
    const label = address_description;
    const url =
      Platform.OS === 'ios'
        ? `${scheme}${label}@${latLng}`
        : `${scheme}${latLng}(${label})`;
 Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });

  }
  return (
<View style={{display: 'flex',justifyContent:'space-around', flexDirection:  'column' }}>
 
 <DetailText normal iconname='clock' icontype='octicon' iconcolor={Colors.brandPrimary} text={'When:'} value={massage_time}/>
 <DetailText onPress={()=>{openMap()}} address iconname={'location'} icontype={'octicon'} iconcolor={Colors.brandPrimary} text={'Where:'} value={address_description+' '+location_address}/>
 {parking_description&&<DetailText normal iconname={'local-parking'} icontype={'materialicon'} iconcolor={Colors.brandPrimary} text={'Parking:'} value={parking_description}/>}
 <DetailText normal iconname={'hand'} icontype={'entypo'} iconcolor={Colors.brandPrimary} text={'Massage Type:'} value={massage_description}/>
 <DetailText normal iconname={'person'} icontype={'octicon'} iconcolor={Colors.brandPrimary} text={'With:'} value={person_name}/>


</View>  
  );
};






const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export  default MassageInformation = connect(
  mapStateToProps,
  mapDispatchToProps
)(MassageInformations)

