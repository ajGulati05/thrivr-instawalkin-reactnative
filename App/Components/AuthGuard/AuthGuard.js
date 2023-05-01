import React, { Component } from "react";
import {
  SafeAreaView,Text,View,StyleSheet
} from 'react-native';
import {FormFieldWrapper} from '../Wrappers'
import {Fonts,Colors,Helpers} from '../../Theme'
import StyledText from '../StyledText/StyledText'
import NavigationService from 'App/Services/NavigationService' 
import {width, height, totalSize} from 'react-native-dimension';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
const AuthGuards = ({ isAuthorized,children,page}) => {



  return (
<View >
     {isAuthorized? children:
<View style={[AuthGuardStyle.container]} >
<Text style={[Helpers.TextStyleInLinkText,Fonts.style.h1,Helpers.textCenter]}>Please 
<Text style={[Helpers.LinkStyleInLinkText,Fonts.style.h1]} onPress={()=> {NavigationService.navigate('LoginScreen')}}>
{' '}login{' '}
</Text>
or 
<Text  style={[Helpers.LinkStyleInLinkText,Fonts.style.h1]} onPress={()=> {NavigationService.navigate('RegisterScreen')}}>
{' '}sign up{' '}
</Text>
  to {page} </Text>
</View>}
</View>
  );
};



const mapStateToProps = (state) => ({
isAuthorized:state.auth.isAuthorized
})

const mapDispatchToProps = (dispatch) => ({
})

export  default AuthGuard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthGuards)


const AuthGuardStyle = StyleSheet.create({
  container:{
  	padding:width(4),
      margin:width(4),
  	display: 'flex',
    justifyContent: 'space-around',
    alignItems:  'center' 
  },
 

});