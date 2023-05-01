import React, { Component } from "react";
import {

  ActivityIndicator,
  Text,
  View,StyleSheet
} from 'react-native';
import {Fonts,Colors} from '../../Theme'

import ApplicationStyles from 'App/Theme/ApplicationStyles'

const LoadingComponent = ( ) => {


  return (
     
      <View style={style.container}>
      <ActivityIndicator/>
      </View>
  
  );
};


export default LoadingComponent
const style= StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center' 
  
  }})