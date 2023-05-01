import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import {FormFieldWrapper} from '../Wrappers'
import {Fonts,Colors} from '../../Theme'
import { TextInputMask } from 'react-native-masked-text'
import {width, height, totalSize} from 'react-native-dimension';//did not use this in ios
const StyledInput = ({ label, formikProps, formikKey,...rest }) => {
  const inputStyles = {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.brandDarkGrey,
    padding: width(3),// was 10 on IOS realease no 
    marginBottom: width(3),// was normal 3 on ios realease
    fontFamily: Fonts.primaryRegular,
    color: Colors.brandPrimary
  };
  var errorValue=''

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = 'red';
  }
   var content=(  <TextInput
        style={inputStyles}
        
        onChangeText={formikProps.handleChange(formikKey)}
       
        {...rest}
      />)

  if(formikKey=='phone'){content=(<TextInputMask
  type={'custom'}
  options={{
    maskType: 'INTERNATIONAL',
    withDDD: false,
    mask: '+1 (999) 999-9999'
  }}
    style={inputStyles}
  value={formikProps.values[formikKey]}
  onChangeText={formikProps.handleChange(formikKey)}
       
        {...rest}
/>)};
  return (
  <FormFieldWrapper label={label} formikKey={formikKey} formikProps={formikProps}>
    
     {content}
    </FormFieldWrapper>
  );
};

export default StyledInput