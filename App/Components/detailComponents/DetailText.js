import React, { Component } from "react";
import {
 Text,
 StyleSheet,
 View

} from 'react-native';
import {Fonts,Colors} from '../../Theme'
import {Icon } from 'react-native-elements'
import {width, height, totalSize} from 'react-native-dimension';
const DetailText = ({text,value, ...rest }) => {



  return (
 
  <View style={[DetailTextStyle.container]}>
  <View style={[DetailTextStyle.leftcontainer]}>
   {rest.iconname&&<Icon name={rest.iconname} type={rest.icontype} color={rest.iconcolor} size={width(5)} />}
              <Text style={[DetailTextStyle.textStyle1,rest.smallText&&DetailTextStyle.smalltext,rest.smallText&&DetailTextStyle.smallMainTextPadding]}>
                {text}
              </Text>

            
              </View>
              {rest.address&&<Text onPress={()=>{rest.onPress()}} style={[DetailTextStyle.textStyle1,DetailTextStyle.textStyle2,rest.address&&DetailTextStyle.action]}>{value}</Text>}
              {rest.tip&&<Text style={[DetailTextStyle.textStyle1,DetailTextStyle.textStyle2]}>{value}</Text>}
              {rest.normal&&<Text style={[DetailTextStyle.textStyle1,DetailTextStyle.textStyle2,rest.smallText&&DetailTextStyle.smalltext,rest.smallText&&DetailTextStyle.smallTextPadding]}>{value}</Text>}
             


             </View>
    
   
  );
};

export default DetailText

const DetailTextStyle = StyleSheet.create({
  container:{
     display: 'flex',
     flexDirection: 'row',
    justifyContent: 'space-between',
    padding:width(1),
    margin:width(1)
    
  },
  leftcontainer:{
    display: 'flex',
     flexDirection: 'row',
       justifyContent:'center',
       alignItems:  'center',
       textAlign: 'left'
  },
action:{
  flexShrink: 1,
  textDecorationLine: 'underline' 
},

   containerReverse:{
     flexDirection: 'row-reverse'
  },
   textStyle1:{
    ...Fonts.style.h1point5,
   fontFamily: Fonts.family.primaryBold,
   color:Colors.brandDarkGrey,
    paddingLeft: width(1),
     paddingRight: width(1),
     textAlign: 'right'
  },
  textStyle2:{
  
   color:Colors.brandPrimary

  },
  smalltext:{
   
     color:Colors.brandDarkGrey,
      ...Fonts.style.h2,
  },
  smallMainTextPadding:{
     paddingLeft: width(10),
  },
 smallTextPadding:{
     paddingRight: width(10),
  },
});