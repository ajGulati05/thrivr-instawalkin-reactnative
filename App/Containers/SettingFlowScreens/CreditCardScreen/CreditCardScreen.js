

import React from 'react'
import { SafeAreaView,Platform, Text, View, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { Images } from 'App/Theme'

import { Button,StyledInput,AnimatedLogoWrapper,StyledText,Header,PayOption } from '../../../Components';
import AuthActions from 'App/Stores/Auth/Actions'
import NavigationService from 'App/Services/NavigationService' 
import {width, height, totalSize} from 'react-native-dimension';
/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

class CreditCardScreen extends React.Component {

  render() {
    const {user}=this.props.user
    console.log(JSON.stringify(user));
    return (
  
     
   
       <SafeAreaView>
        <Header title='Payment Options'/>
        <PayOption deleteOption noNativePay/>




       
         </SafeAreaView>


    )
  }
  

}




CreditCardScreen.propTypes = {
  login: PropTypes.func,
}

const mapStateToProps = (state) => ({
  user:state.user
})

const mapDispatchToProps = (dispatch) => ({
 login: (email,password) => dispatch(AuthActions.initiateLogin(email,password)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCardScreen)
