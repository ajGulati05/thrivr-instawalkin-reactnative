import React, { Component } from "react";
import {width, height, totalSize} from 'react-native-dimension';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  View,
  Platform
} from 'react-native';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import {Fonts,Colors} from '../../Theme'
import { ListItem,Icon } from 'react-native-elements'
import NavigationService from 'App/Services/NavigationService'
import AppStateActions from 'App/Stores/AppState/Actions'
import ModalActions from 'App/Stores/Modal/Actions'
import PaymentActions from 'App/Stores/Payment/Actions'

import _ from 'lodash'
//list option show card or show apple pay or google pay if activated

 const PayOptions = ({cards,appstate,payment,setDefaultPayMethod,toggleModal,deleteACardSaga, ...rest }) => {


//we need add a card as an option
//we need if google payment or apple pay as an option 
//we need all cards 
var toShow=rest.noNativePay?false:appstate.can_pay_with_native_pay;
const cardListNative={  'NATIVE_PAY': {
        title: Platform.OS === 'android'?'Google Pay':'Apple Pay',
        id:'NATIVE_PAY',
        paid_by:'NP',
        orderby:-1,
    }};
const cardlist = {

    'ADD_CARD':  {
        title: 'Add a card',
        id: 'ADD_CARD',
        paid_by:'CR',
        orderby:0
    },

};

const cashPay ={
    'PAY_CASH':  {
        title: 'Pay by Cash',
        id: 'PAY_CASH',
        paid_by:'CA',
        orderby:50000
    },
}

var mergeCards=_.merge(cardlist,cards)
if(toShow){
  mergeCards=_.merge(mergeCards,cardListNative)
}

if(!rest.deleteOption)
  {
    mergeCards=_.merge(mergeCards,cashPay)
  }
  function renderForPay(item,i){
    return 
  }
var cardsToShow= _.sortBy(mergeCards, ['orderby'])

function onPress(item){
  if(item.id!="ADD_CARD"){
      setDefaultPayMethod(item)
      NavigationService.goBack()
      }
   else{   
  //toggleModal(true,'ADD_CARD',false)
  if(rest.screenFromPay){
    NavigationService.navigate('AddCardScreenOnCheckout')
  }
  else {
  NavigationService.navigate('AddCardScreen')}
      }
}

function onDelete(item){
 if(item.id!="ADD_CARD"){
      deleteACardSaga(item.id)
    
    }
     else{   
  NavigationService.navigate('AddCardScreen')
      }
}
  return (
<View style={{display: 'flex',justifyContent:'space-around', flexDirection:  'column' }}>
 {rest.deleteOption?(_.map(cardsToShow,(item, i) => (

      <ListItem
      
         key={i}
         title = {item.title}
        rightTitle={item.id=='ADD_CARD'?'':'Delete'}
         bottomDivider={true}
         rightTitleStyle={{color:Colors.brandMainRed}}
         onPress = {() => {

          onDelete(item)
        }}
         
      />
    ))
  ):
 (_.map(cardsToShow,(item, i) => (

      <ListItem
      
         key={i}
         title = {item.title}
         chevron={{color:Colors.brandMainRed}}
       
         bottomDivider={true}
         onPress = {() => {

          onPress(item)
        }}
         
      />
    ))
  )}

</View>  
  );
};






const mapStateToProps = (state) => ({
  cards:state.payment.cards,
  appstate:state.appstate,
  payment:state.payment
})

const mapDispatchToProps = (dispatch) => ({
toggleModal: (isModalOpen,typeOfModal) => dispatch(ModalActions.toggleModal(isModalOpen,typeOfModal,false)),
setDefaultPayMethod:(id)=> dispatch(AppStateActions.setDefaultPayMethod(id)),
deleteACardSaga:(stripedatas_id)=>dispatch(PaymentActions.deleteACardSaga(stripedatas_id))
})

export  default PayOption = connect(
  mapStateToProps,
  mapDispatchToProps
)(PayOptions)

