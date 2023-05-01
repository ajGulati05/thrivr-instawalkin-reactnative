import React, { Component } from "react";
import {
 Text,
 StyleSheet,
 View

} from 'react-native';
import {Fonts,Colors} from '../../Theme'
import {Icon } from 'react-native-elements'
import {width, height, totalSize} from 'react-native-dimension';
const TextIcon = ({text, ...rest }) => {



  return (
 
  <View style={[TextIconStyle.container,rest.reverse&&TextIconStyle.containerReverse]}>
              <Text style={[TextIconStyle.textStyle1]}>
                {text}
              </Text>
              {rest.verified&&<Icon
  name={rest.iconname} type={rest.icontype} color={rest.iconcolor} size={width(3)} />}
  </View>    
   
  );
};

export default TextIcon

const TextIconStyle = StyleSheet.create({
  container:{
     display: 'flex',
     flexDirection: 'row',
    
     paddingLeft: width(1),
     paddingRight: width(1)
  },
   containerReverse:{
     flexDirection: 'row-reverse'
  },
   textStyle1:{
    ...Fonts.style.h3,
   fontFamily: Fonts.family.primaryBold,
   color:Colors.brandDarkGrey,
    paddingLeft: width(1),
     paddingRight: width(1),
  },


});