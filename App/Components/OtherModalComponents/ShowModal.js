import React, { Component } from "react";
import {

  ActivityIndicator,
  Text,
  View,StyleSheet
} from 'react-native';
import {Fonts,Colors} from '../../Theme'
import {Overlay } from 'react-native-elements'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import {width, height, totalSize} from 'react-native-dimension';
import {LoadingComponent,ServerMessageComponent} from './'
const ShowModals = ({  appstate }) => {




  return (
      <Overlay isVisible={appstate.showShowModal}
       width="auto"
  height="auto">
  {appstate.type=='LOADING'?<LoadingComponent/>:
  appstate.type=='MESSAGE'?<ServerMessageComponent 
  title={appstate.modal_title}
  message={appstate.modal_message} 
  cancel_booking_id={appstate.cancel_booking_id}
  reschedule_booking_id={appstate.reschedule_booking_id}
  />:<Text></Text>}
    </Overlay>
  );
};





const style= StyleSheet.create({
  loadingContainer:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center' 
  
  }})

const mapStateToProps = (state) => ({
appstate:state.appstate
})

const mapDispatchToProps = (dispatch) => ({
})

export  default ShowModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowModals)