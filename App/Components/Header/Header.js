import React, { Component } from "react";
import {width, height, totalSize} from 'react-native-dimension';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {Icon } from 'react-native-elements'
import {Fonts,Colors} from '../../Theme'

import NavigationService from 'App/Services/NavigationService'

 const Header = ({ title,...rest }) => {



  return (
<View style={[HeaderStyle.container]}>
  <View style={HeaderStyle.leftElement}>
        <Icon
  name='ios-arrow-round-back' onPress={() =>{NavigationService.goBack()}} type={'ionicon'} color={Colors.brandPrimary} size={width(15)} />
  </View>
        <Text style={[HeaderStyle.headerFont,HeaderStyle.rightElement]}>{title}</Text>
      

    </View>
  );
};

export default Header

const HeaderStyle = StyleSheet.create({
  container:{
  
      width:'100%',
     display: 'flex',
     justifyContent:'space-around', 
     flexDirection:  'row',
     alignItems: 'center',
 
  },
  headerFont:{
      ...Fonts.style.h1,
   
    fontFamily: Fonts.family.primaryBold,
    
    color: Colors.brandPrimary,  
  },
      leftElement:{
     width:'20%',
    alignItems:  'center',
    justifyContent:  'center',

},
      rightElement:{
  
     width:'80%',
    paddingLeft: '18%',

    alignItems:  'center',
   
},

});