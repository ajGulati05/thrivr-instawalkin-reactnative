import React, { Component } from "react";
import {
 Text,
 StyleSheet,
 View,
 Image,
 ScrollView,
 Linking,
 FlatList

} from 'react-native';
import {Fonts,Colors} from '../../Theme'
import { Card, ListItem, Button, Avatar,Icon,ButtonGroup } from 'react-native-elements'
import TextIcon from './TextIcon'
import TimeSlots from './TimeSlots'
import CarsouledStyled from './CarsouledStyled'
import AvatarStyled from './AvatarStyled'
import {width, height, totalSize} from 'react-native-dimension';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import _ from 'lodash'
import AppStateActions from 'App/Stores/AppState/Actions'
class TimeCard extends Component{

render(){
const {openslots}=this.props.openslotreducer;
const {gender_code,set_default_all_specialities}=this.props.filter;
var filteredOpen=_.filter(openslots,{manager_specialities: [{code: set_default_all_specialities.code}] } );
 if(gender_code!='E'){
 filteredOpen=_.filter(openslots,{manager_specialities: [{code: set_default_all_specialities.code}],gender:gender_code } );
 }


  return (


<View style={{ flex: 1}}>
        <FlatList
         ListEmptyComponent={<Text style={[TimeCardStyles.textStyleNotFound]}>{'Cannot find any openings for the selected filters.'}</Text>}
         keyExtractor={(item, index) => index}
       data={filteredOpen}
    renderItem=
          {
            ({ item, index }) => 
            <Card key={index}>
  <View>          
  <View style={{display:'flex', flexDirection:'row'}}>
  <View>
   <Avatar
   size="large"
  source={{
    uri:
      item.profile_photo,
  }}

/>
 </View> 
 <View style={TimeCardStyles.mainElement}>
 <View style={[TimeCardStyles.mainElement,TimeCardStyles.subElement]}>
   <TextIcon verified={item.verified} text={item.manager_first_name +" " +item.manager_last_name} iconname="verified" icontype="octicon" iconcolor={Colors.brandPrimary}/>
    <TextIcon  text={item.address}/>
      <TextIcon  text={item.distance} />
  </View>
  <View style={[TimeCardStyles.mainElement,TimeCardStyles.subElement]}> 
   <TextIcon  text={item.gender=='M'?'Male':'Female'}/>     
   {item.parking&&<TextIcon  text="Free Parking"/>}
   {item.direct_billing&&<TextIcon  text="Direct  Billing"/>}
</View>             
 </View>    
</View>  
 <View style={{diplay:'flex',width:'100%' }}><Text style={TimeCardStyles.textStyle1}>
 {item.tag_line}
 </Text></View>    


<TimeSlots 
onPress={(booking_payload)=>{this.props.createBookingPayload(booking_payload)}}
resourceid={item.timekit_resource_id} 
availability={item.availability[0]}
manager_id={item.manager_id}
 />
      
      </View>         
            </Card>
          }
       />
      </View>

   
  )}
}


TimeCard.propTypes = {
   createBookingPayload:PropTypes.func
}


const mapStateToProps = (state) => ({
openslotreducer:state.openslots,
filter:state.filter
})

const mapDispatchToProps = (dispatch) => ({
createBookingPayload:(booking_payload_initial)=>dispatch(AppStateActions.createBookingPayload(booking_payload_initial))
})

export  default TimeCards = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeCard)


const TimeCardStyles = StyleSheet.create({
  textStyle1:{
    ...Fonts.style.h3,
   fontFamily: Fonts.family.primaryLight,
   color:Colors.brandDarkGrey,
   fontStyle: 'italic',
   textAlign:  'center'
  },

 textStyleNotFound:{
    ...Fonts.style.h3,
   fontFamily: Fonts.family.primaryBold,
   color:Colors.brandDarkGrey,
   fontStyle: 'italic',
   textAlign:  'center',
   paddingTop: width(2)
  },
   mainElement:{
    paddingLeft: width(1),
     paddingRight: width(1),
    display:'flex', 
    flexDirection:'row'
  },
  subElement:{
    flexDirection:'column'
  },
  textCenterStyle:{
      alignItems: 'center'
  },
   textCenterRight:{
      alignItems:'flex-end',
      backgroundColor: 'green'
  },
  sameLine:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:  'center' 
  },
  caption: {
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: Fonts.primaryBold,
  },
  captionSmall: {
    fontSize: 12,
    fontWeight: '500',
  },
   primaryCaption: {
    color: 'white',
  },
  secondaryCaption: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  actiontext: {
    textDecorationLine: 'underline'
  },
   boldText: {
     fontFamily: Fonts.primaryBold,
     color: Colors.brandPrimary,
      letterSpacing: 1,
    fontSize: 15,
  },
   darkText: {
     fontFamily: Fonts.primaryRegular,
     color: Colors.brandDarkGrey,
  },

});