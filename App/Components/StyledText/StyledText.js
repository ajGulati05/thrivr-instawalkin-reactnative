import React, { Component } from "react";
import {
 Text,
 StyleSheet,
 View

} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';
import {Fonts,Colors} from '../../Theme'
const StyledText = ({ actiontext, children,dark,right, bold,center,...rest }) => {
  const textStyles = {
   
    padding: 10,
    marginBottom: 3,
    fontFamily: Fonts.primaryRegular,
    color: Colors.brandDarkGrey
  };


  return (
 
  <View style={[center&&TextStyle.textCenterStyle, right &&TextStyle.textCenterRight,rest.sameLine&&TextStyle.sameLine]}>
      <Text style={TextStyle.darkText}>
       {rest.normalText}
      </Text>
      <Text style={[textStyles,actiontext && TextStyle.actiontext,bold&&TextStyle.boldText,
        dark&&TextStyle.darkText]}
      {...rest}>

        {children}
      </Text>
  </View>    
   
  );
};

export default StyledText

const TextStyle = StyleSheet.create({
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
     fontFamily: Fonts.family.primarySemiBold,
     color: Colors.brandPrimary,
      letterSpacing: 1,
    fontSize: width(4),
  },
   darkText: {
     fontFamily: Fonts.family.primaryRegular,
     color: Colors.brandDarkGrey,
  },

});