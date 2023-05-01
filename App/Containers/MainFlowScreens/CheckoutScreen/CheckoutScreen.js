import React, {Component} from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import {Button,
  AuthGuard,
  MassageInformation,
  PriceBreakDown,
  Header,
PaymentButton} from  '../../../Components';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import NavigationService from 'App/Services/NavigationService'  
import ModalActions from 'App/Stores/Modal/Actions'
import BookingActions from 'App/Stores/Booking/Actions'
class Checkout extends Component {

  



  render () {
    return (
      <SafeAreaView>
      <Header title='Almost There'/>
      	<MassageInformation appstate={this.props.appstate}  />
      	<PriceBreakDown appstate={this.props.appstate} />
   		 <AuthGuard page={' book a massage.'}>
   		 <PaymentButton 
       initiateNativePayRequest={()=>this.props.initiateNativePayRequest()}
        initiateSingleBookingRequest={()=>this.props.initiateSingleBookingRequest()}
         toggleModal={(val1,val2)=>this.props.toggleModal(val1,val2)}/>

     	 </AuthGuard>
      </SafeAreaView>
    );
  }
}



Checkout.propTypes = {
 
}

const mapStateToProps = (state) => ({
  appstate:state.appstate
})

const mapDispatchToProps = (dispatch) => ({
 toggleModal: (isModalOpen,typeOfModal) => dispatch(ModalActions.toggleModal(isModalOpen,typeOfModal,false)),
 initiateSingleBookingRequest:()=>dispatch(BookingActions.initiateSingleBookingRequest()),
 initiateNativePayRequest:()=>dispatch(BookingActions.initiateNativePayRequest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout)

