import React, {Component} from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import { AuthGuard,StyledHistoryCards } from '../../../Components';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import _ from 'lodash'
import {Fonts,Colors} from 'App/Theme'
class HistoryScreen extends Component {
  render () {
    const bookings=this.props.bookings
    return (
    <SafeAreaView>	
      <AuthGuard page={' view your history.'}>

      {!_.isEmpty(bookings)?
       <StyledHistoryCards/>:<Text style={{  ...Fonts.style.h2,
    textAlign: 'center',
     color: Colors.brandDarkGrey, }}>
        There is no instawalkin history yet!
      </Text>}
     
      </AuthGuard>
      </SafeAreaView>
    );
  }
}

HistoryScreen.propTypes = {
 
}
const mapStateToProps = (state) => ({
bookings:state.booking.bookings
})

const mapDispatchToProps = (dispatch) => ({

})

export  default  connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryScreen)

