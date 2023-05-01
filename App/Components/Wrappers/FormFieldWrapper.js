import React from 'react';
import { View, Text } from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';
const FormFieldWrapper = ({ children, label, formikProps, formikKey }) => {
  return (<View style={{ marginHorizontal: width(5), marginVertical: width(0.5) }}>
    <Text style={{ marginBottom: width(1.3) }}>{label}</Text>
    {children}
    <Text style={{ color: 'red' }}>
      {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
    </Text>
  </View>
)};

export default FormFieldWrapper;