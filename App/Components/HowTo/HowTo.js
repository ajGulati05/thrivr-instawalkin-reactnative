import React, { Component } from "react";
import {width, height, totalSize} from 'react-native-dimension';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {Fonts,Colors,Images} from 'App/Theme'


 const HowTo = ({...rest }) => {



  return (
<View style={[HowToStyle.container]}>
  <Image source={Images.how_to} />

    </View>
  );
};

export default HowTo

const HowToStyle = StyleSheet.create({
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