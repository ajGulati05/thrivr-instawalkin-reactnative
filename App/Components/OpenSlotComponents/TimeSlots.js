import React, { Component } from "react";
import {
 Text,
 StyleSheet,
 View,
 ScrollView,
 TouchableOpacity

} from 'react-native';
import {FilterWrapper,StyledButtonGroup} from  'App/Components';
import {Fonts,Colors} from '../../Theme'
import {width, height, totalSize} from 'react-native-dimension';
import _ from 'lodash'
class TimeSlots extends Component{
constructor (props) {
  super(props);
  this.state = {
    selectedIndex: 0,
    showType:"MORNING",
    filteredValues:_.filter(this.props.availability, { part_of_day:"MORNING" }),
    numberToShow:10,
    counter:10
  }
  this.updateIndex = this.updateIndex.bind(this)
    this.onPress = this.onPress.bind(this)
}
componentWillReceiveProps(nextProps) {
  // You don't have to do this check first, but it can help prevent an unneeded render
  if (_.filter(nextProps.availability, { part_of_day:'MORNING' }) !== this.state.filteredValues) {
    var filteredValues=_.filter(nextProps.availability, { part_of_day:'MORNING' });
  this.setState({selectedIndex:0,filteredValues})
  }
}
updateIndex (selectedIndex) {
console.log("called");
var showType='MORNING';
if(selectedIndex==0){
  showType='MORNING';
}
else if(selectedIndex==1)
{
  showType='AFTERNOON';
}
else if(selectedIndex==2)
{
  showType='EVENING';
}
  var filteredValues=_.filter(this.props.availability, { part_of_day:showType });
  this.setState({selectedIndex,filteredValues,showType})
 

}


onPress(values){
  //manager_id,starttime,endtime
  console.log("Pressed"+JSON.stringify(values));
  var booking_payload={
    manager_id:this.props.manager_id,
    resource_id:this.props.resourceid,
    start:values.start,
    end:values.end,
    display_time:values.display_time
  }
  this.props.onPress(booking_payload)

}

 renderAvailability(){

if(_.isEmpty(this.state.filteredValues))
{
  return (<Text>Looks like we are all filled up for the {this.state.showType.toLowerCase()}. Why don't we try a different date or part of day?</Text>)
}


  return this.state.filteredValues.map(({ 
          start,end,display_time }) => (

          <TouchableOpacity onPress={()=>{this.onPress({start,end,display_time})}} key={this.props.resrouceid+start} style={TimeSlotsStyle.buttonContainer}>

          <Text style={TimeSlotsStyle.textStyle1}>{display_time}</Text>
          </TouchableOpacity>
))
};


render(){   
     const buttons = ['Morning', 'Afternoon', 'Evening']
  const { selectedIndex } = this.state

  return (

 
<View>
 <StyledButtonGroup
      key={this.props.resourceid}
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons} small />
 <View style={[TimeSlotsStyle.container]}>

{this.renderAvailability()}
 
   </View>    

</View>
 
   
  );
}
};

export default TimeSlots

const TimeSlotsStyle = StyleSheet.create({
  container:{

   flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  marginVertical: 4,
  flexWrap: 'wrap'
  },

  buttonContainer:{
     padding:width(1.3),
     margin:width(1.3),
     width: '26%',
     borderColor: Colors.brandPrimary,
     borderWidth: width(0.5),
     alignItems: 'center',
      borderRadius:width(1),
  },
  button:{
     ...Fonts.style.medium,
    
      fontFamily: Fonts.family.primaryRegular,
},
   textStyle1:{
    ...Fonts.style.h3,
   fontFamily: Fonts.family.primaryBold,
   color:Colors.brandDarkGrey,
  },
  textStyleNoSlots:{
    width:'100%',
    ...Fonts.style.h3,
    textAlign:  'center',
   fontFamily: Fonts.family.primarySemiBold,
   color:Colors.brandDarkGrey,
   backgroundColor: 'yellow'

  },


});


