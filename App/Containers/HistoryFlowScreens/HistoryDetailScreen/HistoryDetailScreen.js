
import React, {Component} from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import { Button,
  MassageInformation,
  PriceBreakDown,
  Header, HistoryActionButtons} from '../../../Components';
 
class HistoryDetailScreen extends Component {

  //on load reload the screen
  render () {
     const { params } = this.props.navigation.state;
     
    const booking=params.booking_payload;
     console.log(JSON.stringify(booking))
    return (
    <SafeAreaView>	
      <Header title='Your massage'/>
      <MassageInformation appstate={params}  />
      <PriceBreakDown appstate={params} />
      <HistoryActionButtons booking={booking} />
      </SafeAreaView>
    );
  }
}
export default HistoryDetailScreen;