import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';

import {Fonts,Colors} from '../../Theme'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import {width, height, totalSize} from 'react-native-dimension';
import { Icon } from 'react-native-elements'
const StyledFilterText = ({ label,children,onPressTouchableOpacity, ...rest }) => {


   
  return (
  <View style={style.container}>
    <Text style={style.title}>{label}</Text>
    <TouchableOpacity style={style.elementContainer} onPress={()=>{onPressTouchableOpacity()}}>
      <TextInput
       placeholderTextColor={Colors.brandLightGrey}
        style={style.textInput}  
        editable={false}    
         pointerEvents="none" 
        {...rest}
      >{children}</TextInput>
     {rest.iconname&& <Icon
  name={rest.iconname} color={children?Colors.brandPrimary:Colors.brandLightGrey} size={width(8)}/>}
      </TouchableOpacity>
       
    </View>
  );
};




export default StyledFilterText;


const style= StyleSheet.create({
  elementContainer:{
 flexDirection: 'row',
  borderBottomWidth: 1,
  justifyContent: 'center',
  alignContent:  'center',
  borderBottomColor:Colors.brandLightGrey,
  
  },
  container:{
  marginHorizontal: width(3), 
  marginVertical: height(0),
  alignItems:  'center',

  },
  title: {
    ...Fonts.style.h1,
    textAlign: 'left',
    fontFamily: Fonts.family.primaryBold,
    width: '100%',
    color: Colors.brandPrimary,   
  },
  textInput:{
    fontSize:width(8),// was 30 for IOS
    textAlign: 'center',
    fontFamily: Fonts.family.primaryRegular,
    borderWidth: 0,
    width:width(80),
    color: Colors.brandPrimary,
    alignItems:  'center',
     lineHeight: Platform.OS === 'ios' ? 0 :  width(1),
    
    
 },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: width(1),
  },
  instructions: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
    fontStyle: 'italic',
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  result: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  error: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: width(1),
    color: 'red',
  },
 
})