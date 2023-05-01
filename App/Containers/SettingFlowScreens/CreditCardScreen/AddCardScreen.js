

import React from 'react'
import { KeyboardAvoidingView,SafeAreaView,Platform, Text, View, ActivityIndicator, Image,StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { Images } from 'App/Theme'

import { Button,StyledInput,AnimatedLogoWrapper,StyledText,Header,PayOption } from '../../../Components';
import AuthActions from 'App/Stores/Auth/Actions'
import NavigationService from 'App/Services/NavigationService' 
import {width, height, totalSize} from 'react-native-dimension';


import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard'
import PaymentActions from 'App/Stores/Payment/Actions'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

class AddCardScreen extends React.Component {
constructor (props) {
  super(props);
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

  this.setState({form});

};
  render() {
   
    return (
  
     
   
       <SafeAreaView>
        <Header title='Add Card'/>
     <View>
      <CreditCardInput onChange={this._onChange} />
      </View>
      <View style={styles.containerPadding}>
      <Text style={{color:'red'}}>{this.props.payment.addCardError}</Text>
      </View>
        <View style={styles.containerPadding}>
         <Button
          loading={this.props.payment.addCardLoading}
          caption="Add Card"
          onPress={this.handleSubmit}/>
          </View>




       
         </SafeAreaView>


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
  containerPadding:{
    paddingTop: width(5)
  }
})

const mapStateToProps = (state) => ({
payment:state.payment
})
//     loading={addCardLoading}
const mapDispatchToProps = (dispatch) => ({
addACardSaga:(card)=>dispatch(PaymentActions.addACardSaga(card)),
})

export  default AddCardScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardScreen)
