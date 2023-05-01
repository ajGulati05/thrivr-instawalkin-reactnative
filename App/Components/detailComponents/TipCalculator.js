import React from 'react';
import { View, Text, FlatList,
  RefreshControl,StyleSheet,TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import {Fonts,Colors} from '../../Theme'

import NavigationService from 'App/Services/NavigationService'
import {StyledButtonGroup,StyledFilterText} from '../'



const TipCalculatorComp = ({selectedIndex,updateIndex,booking_id,...rest}) => {


 const buttons = ['10%', '15%', '20%']

 
  return (
    
  <View style={TipCalculatorComp.container}>
   <StyledButtonGroup
      onPress={this.updateIndex()}
      selectedIndex={selectedIndex}
      buttons={buttons} small />
  </View>
     
  );
}






const mapStateToProps = (state) => ({
bookings:state.booking.bookings
})

const mapDispatchToProps = (dispatch) => ({

})

export  default TipCalculator = connect(
  mapStateToProps,
  mapDispatchToProps
)(TipCalculatorComp)

const TipCalculatorCompStyle = StyleSheet.create({
   innerContainer:{
      display: 'flex',
      flexDirection:  'column',
     
  },
  innerContainer:{
      display: 'flex',
      justifyContent:  'space-around',
      flexDirection:  'row',
     
  }

});