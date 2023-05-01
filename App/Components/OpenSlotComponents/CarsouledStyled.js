
import React, { Component } from "react";
import {
 Text,
 StyleSheet,
 View,
 ScrollView,
 TouchableOpacity

} from 'react-native';
import {Fonts,Colors} from '../../Theme'
import {FilterWrapper} from  'App/Components';
import {width, height, totalSize} from 'react-native-dimension';




const CarsouledStyled = ({availability, ...rest }) => {



  return (


 <View style={[CarsouledStyledStyle.container]}>

   </View>    


 
   
  );
};

export default CarsouledStyled

const CarsouledStyledStyle = StyleSheet.create({
  container:{
  		display: 'flex',
  		flexDirection: 'row',
  		justifyContent:'space-between'

  },

  buttonContainer:{
     padding:width(2),
     width: '30%',
     borderColor: 'green',
     borderWidth: width(0.5),
     alignItems: 'center',
      borderRadius:width(2),
  },
  button:{
     ...Fonts.style.medium,
    
      fontFamily: Fonts.family.primaryRegular,
},
   textStyle1:{
    ...Fonts.style.h3,
   fontFamily: Fonts.family.primaryBold,
   color:Colors.brandLightGrey,
    paddingLeft: width(1),
     paddingRight: width(1),
  },


});