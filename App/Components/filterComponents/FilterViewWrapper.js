import React, { Component } from "react";
import {
 Text,
 StyleSheet,
 View,
 ScrollView,
 TouchableOpacity

} from 'react-native';
import {FilterWrapper} from  'App/Components';
import {Fonts,Colors} from '../../Theme'
import {width, height, totalSize} from 'react-native-dimension';
import _ from 'lodash'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import StyledCheck from '../StyledCheck/StyledCheck'
import {Button,StyledButtonGroup} from  '../'; 
import FilterActions from 'App/Stores/Filter/Actions'
import NavigationService from 'App/Services/NavigationService'  
class FilterViewWrapper extends Component{

  //gender map as 1=either, 0=female, 2=male
constructor(props) {

  super(props);
  this.state = {
    selectedIndex: props.filter.gender_code=='F'?1:props.filter.gender_code=='M'?2:1,
    defaultGenderValue:props.filter.gender_code,
    component_all_specialities:props.filter.all_specialities,
    component_set_speciality_value:props.filter.set_default_all_specialities,

    
}
this.updateIndex = this.updateIndex.bind(this)
this.setFilterProps=this.setFilterProps.bind(this)
//this.renderCheckboxes=this.renderCheckboxes.bind(this)
}

setFilterProps(){
  this.props.setDefaultForGenderAndSpecialities(this.state.component_set_speciality_value,this.state.defaultGenderValue)
  NavigationService.goBack()
  }

updateIndex (selectedIndex) {
  var defaultGenderValue='E';
    if(selectedIndex==0){
          defaultGenderValue='F';
    }
    else if(selectedIndex==1)
      {
          defaultGenderValue='E';
      }
  else if(selectedIndex==2)
    {
         defaultGenderValue='M';
    }

  this.setState({selectedIndex,defaultGenderValue})
 

}


render(){   

  const {all_specialities,set_default_all_specialities}=this.props.filter;
     const buttons = ['Female', 'Either', 'Male']
    const { selectedIndex } = this.state
      return (
   
   
        <View style={CheckedStyle.container}>
        <View style={CheckedStyle.innerContainer} >
        <Text style={CheckedStyle.textStyle}>Gender Type</Text>
        <StyledButtonGroup
        big
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
               buttons={buttons} />
          </View>
         <View style={CheckedStyle.innerContainer} >
        <Text style={CheckedStyle.textStyle}>Manager Speciality (Pick One)</Text>
        <StyledCheck
              callback={(selected) => { this.setState({component_set_speciality_value:selected}) }}
              defaultValue={set_default_all_specialities}
              iconSize={30}
              checkedIcon="ios-checkbox-outline"
              uncheckedIcon="ios-square-outline"
              checkboxes={all_specialities}
             
            />

          </View>
           <Button
          secondary
          caption="Filter"
          onPress={()=>this.setFilterProps()}
/>
      </View>  
      )
  
}
}


FilterViewWrapper.propTypes = {
  setDefaultForGenderAndSpecialities:PropTypes.func,
}

const mapStateToProps = (state) => ({
filter:state.filter
})

const mapDispatchToProps = (dispatch) => ({
  setDefaultForGenderAndSpecialities:(specialityCode,genderType)=>dispatch(FilterActions.setDefaultForGenderAndSpecialities(specialityCode,genderType))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterViewWrapper)

const CheckedStyle = StyleSheet.create({
  container:{
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'center'
 
  },
  innerContainer:{
    borderBottomWidth: width(0.1),
    borderBottomColor: Colors.brandLightGrey,
    padding: height(2)
  },
  textStyle:{
...Fonts.style.h3,
   fontFamily: Fonts.family.primaryBold,
   color:Colors.brandDarkGrey,
  
  },



});


