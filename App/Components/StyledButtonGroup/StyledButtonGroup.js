import React, { Component } from "react";
import {
 Text,
 StyleSheet,
 View

} from 'react-native';
import {Fonts,Colors} from '../../Theme'
import { ButtonGroup,CheckBox} from 'react-native-elements'
import {width, height, totalSize} from 'react-native-dimension';
const StyledButtonGroup = ({ ...rest }) => {



  return (
 
       <ButtonGroup
          selectedButtonStyle={StyledButtonGroupStyle.selectedButtonStyle}
          buttonStyle={StyledButtonGroupStyle.buttonStyle}
          disabledTextStyle={StyledButtonGroupStyle.disabledTextStyle}
          selectedTextStyle={StyledButtonGroupStyle.selectedTextStyle}
           disabledTextStyle={StyledButtonGroupStyle.disabledTextStyle}
          onPress={rest.onPress}
          selectedIndex={rest.selectedIndex}
          buttons={rest.buttons} 
          key={rest.key}
          buttonStyle={[rest.big&&StyledButtonGroupStyle.big,rest.small&&StyledButtonGroupStyle.small]}/>
   
  );
};

export default StyledButtonGroup

const StyledButtonGroupStyle = StyleSheet.create({
  selectedButtonStyle:{
      backgroundColor: Colors.brandPrimary, 
      borderColor:Colors.brandPrimary, 
  },
   buttonStyle:{
    backgroundColor: 'white' 
  },
  disabledStyle:{
      backgroundColor: 'white' ,
      borderColor:'black', 
  },
  selectedTextStyle: {
    fontFamily: Fonts.family.primaryBold,
    letterSpacing: 1,
    fontSize: 15,
    color:'white'
   
  },
  disabledTextStyle:{
    color:'black',
    fontFamily: Fonts.family.primaryBold,
  },
  big:{
    height:height(12)
  },
  small:{
    height:height(5)
  }
  

});