

import React, { PureComponent } from 'react'
import { KeyboardAvoidingView, View, Text, Platform, StyleSheet } from 'react-native'
import {Button} from '../'
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard'
import { PaymentCardTextField } from 'tipsi-stripe'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import PaymentActions from 'App/Stores/Payment/Actions'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
 

const ContainerView = Platform.select({
  ios: KeyboardAvoidingView,
  android: View,
})

 class AddCards extends PureComponent {
  static title = 'Card Text Field'

  state = {
    valid: false,
    form:{},
    params: {
      number: '',
      expMonth: 0,
      expYear: 0,
      cvc: '',
    },
  }

  handleFieldParamsChange = (valid, params) => {
    this.setState({
      valid,
      params,
    })

    console.log(JSON.stringify(params))
  }
  handleSubmit=()=>{
        // loading={addCardLoading}
        if(this.state.form.valid){

       
        this.props.addACardSaga({
          number: this.state.form.values.number,
        expMonth: Number(this.state.form.values.expiry.substring(0, 2)),
        expYear: Number(this.state.form.values.expiry.substring(3, 5)),
        cvc: this.state.form.values.cvc,
        currency:'CAD',
        country:'CA'})
        }
  }

_onChange = form => {
console.log(JSON.stringify(form))
  this.setState({form});

};
  render() {
 
    const{addCardLoading}=this.props.payment
    return (
      <View>
      <View>
      <CreditCardInput onChange={this._onChange} />
      </View>
        <View>
         <Button
     
          caption="Add Card"
          onPress={this.handleSubmit}/>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  token: {
    height: 20,
  },
  spoiler: {
    width: 300,
  },
  params: {
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  field: {
    width: 300,
    color: '#449aeb',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
})

const mapStateToProps = (state) => ({
payment:state.payment
})
//     loading={addCardLoading}
const mapDispatchToProps = (dispatch) => ({
addACardSaga:(card)=>dispatch(PaymentActions.addACardSaga(card)),
})

export  default AddCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCards)
