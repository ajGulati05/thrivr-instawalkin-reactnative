//should have a line to show how the payment is happening using this -- but they can change it anytime
//should have a button that changes to apple pay, google pay or pay by credit card
//

import React, { Component } from "react";
import {
 Text,
 StyleSheet,
 View,
Platform,
TouchableOpacity
} from 'react-native';
import {Fonts,Colors} from '../../Theme'
import {Icon } from 'react-native-elements'
import {width, height, totalSize} from 'react-native-dimension';
import {Button} from '../'
import stripe from 'tipsi-stripe'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import AppStateActions from 'App/Stores/AppState/Actions'
import NavigationService from 'App/Services/NavigationService'
import {StyledText} from '../'
import _ from 'lodash' 
const PaymentButtons = ({showServerMessageModal,toggleModal,payment,appstate, ...rest }) => {

var PaymentType='Add a Card';
var buttonToShow=(<Button secondary caption="Add Card" onPress={()=>(NavigationService.navigate('AddCardScreenOnCheckout'))}/>);

if(!_.isEmpty(payment.cards)){
PaymentType='Credit Card'; //todo add card type and number
 buttonToShow=<Button secondary caption="Pay with card" onPress={()=>{rest.initiateSingleBookingRequest()}}/>;
}
if(appstate.defaultPayMethod.id=='PAY_CASH'){
PaymentType='Pay Cash'; //todo add card type and number
buttonToShow=<Button secondary caption="Pay with cash" onPress={()=>{rest.initiateSingleBookingRequest()}}/>;
}
/*if(appstate.can_pay_with_native_pay && appstate.defaultPayMethod.id=='NATIVE_PAY'){
if(Platform.OS === 'android'){
PaymentType='Google Pay';
buttonToShow=<Button applepay caption="Pay with card" onPress={()=>console.log("hello")}/>;}
else{
	PaymentType='Apple Pay';
	buttonToShow=<Button applepay caption="Pay with card" onPress={()=>{rest.initiateNativePayRequest()}}/>;
}

}*/


  return (
 
  <View style={[PaymentButtonStyle.container]}>
  <TouchableOpacity style={PaymentButtonStyle.innerContainer} onPress={()=>{
  	toggleModal(true,'PAYMENT_BACK_CHECKOUT')}}>
  <Text style={PaymentButtonStyle.textStyle1}>Payment Option</Text>
  
  <View style={[PaymentButtonStyle.innerRightContainer]}>
 <Text style={[PaymentButtonStyle.textStyle1,PaymentButtonStyle.textStyleRight]}>{appstate.defaultPayMethod.title}</Text>
 <Icon name={'chevron-right'} type={'octicon'} color={Colors.brandPrimary} size={width(5)} />
  </View>
  </TouchableOpacity>

{buttonToShow}

<StyledText bold center action onPress={()=> {showServerMessageModal('Cancellation Policy.','We charge 50% of the total price for all appointments cancelled with less than an hour remaining.')}}>
Cancellation Policy
</StyledText>

    </View>   
   
  );
};


const mapStateToProps = (state) => ({
appstate:state.appstate,
payment:state.payment
})

const mapDispatchToProps = (dispatch) => ({
 
showServerMessageModal:(modal_title,modal_message)=>dispatch(AppStateActions.showServerMessageModal(modal_title,modal_message)),
//apple_checkout:(payload,triggerAPI)=>dispatch(FilterActions.setValues(payload,triggerAPI)),
//google_checkout:(payload,triggerAPI)=>dispatch(FilterActions.setValues(payload,triggerAPI)),
})

export  default PaymentButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentButtons)
const PaymentButtonStyle = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:  'center',
    paddingTop:height(5),
    
    
  },
  innerContainer:{
 		display: 'flex',
 		justifyContent: 'space-between',
 		 flexDirection: 'row',
 		 width:width(80),
 		 paddingBottom: width(3)
  },
    innerRightContainer:{
 		display: 'flex',
 		justifyContent: 'space-between',
 		 flexDirection: 'row',
 		 alignContent:  'center',
 		 alignItems: 'center'

  },
   textStyle1:{
    ...Fonts.style.h1,
   fontFamily: Fonts.family.primaryBold,
   color:Colors.brandDarkGrey,
    paddingLeft: width(1),
     paddingRight: width(1),
  },
  textStyleRight:{
  
   color:Colors.brandPrimary,
   textDecorationStyle:'dashed',
   paddingRight: width(2),
   textDecorationColor: Colors.brandPrimary

  },
  smalltext:{
   
     color:Colors.brandDarkGrey,
      ...Fonts.style.h2,
      textDecorationLine:  'underline'
  },
  smallMainTextPadding:{
     paddingLeft: width(10),
  },
 smallTextPadding:{
     paddingRight: width(10),
  },
});