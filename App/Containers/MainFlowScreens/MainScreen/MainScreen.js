import React, {Component} from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import {DateComponent,StyledFilterText,Button} from  '../../../Components';
import styles from './MainScreenStyle'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import NavigationService from 'App/Services/NavigationService'  
import ModalActions from 'App/Stores/Modal/Actions'
import OpenSlotsActions from 'App/Stores/OpenSlots/Actions'
import {openSlotsPayload} from 'App/Stores/OpenSlots/Selectors'
class MainScreen extends Component {

    constructor(props) {
        super(props);
       this.state = {
            showErroMessage:false
            }
    }

onButtonClick(){
    const {date_value,duration_value,location_value}=this.props.filter;
    if (typeof date_value.text==='undefined'||typeof duration_value.text==='undefined'||typeof location_value.text==='undefined')
    {
      this.setState({showErroMessage:true});
    }

  else{
          this.setState({showErroMessage:false});

      
          this.props.fetchOpenSlots();
      }

}


  render () {
    const {date_value,duration_value,location_value}=this.props.filter;
    return (
      <View style={[styles.container,styles.fullHeight]}>
        <StyledFilterText  label="Date" iconname="event" placeholder={date_value.current_placeholder} onPressTouchableOpacity={()=>{this.props.toggleModal(true,'CALENDAR')}}>{date_value.text}</StyledFilterText>
        <StyledFilterText label="Duration" iconname="schedule" placeholder={duration_value.placeholder} onPressTouchableOpacity={()=>{this.props.toggleModal(true,'DURATION')}}>{duration_value.text}</StyledFilterText>
        <StyledFilterText label="Location" iconname="my-location" placeholder={location_value.placeholder} onPressTouchableOpacity={()=>{this.props.toggleModal(true,'LOCATION')}}>{location_value.text}</StyledFilterText>
      {this.state.showErroMessage&&<Text style={{ color: 'red',textAlign: 'center'  }}>
        Oops we need all details to get you a massage you deserve.
      </Text>}
          <Button
          large
          secondary
          caption="Find Available Times"
          onPress={()=>{this.onButtonClick()}}
/>
      </View>
    );
  }
}



MainScreen.propTypes = {
  fetchOpenSlots:PropTypes.func,
  toggleModal:PropTypes.func
}

const mapStateToProps = (state) => ({
filter:state.filter
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (isModalOpen,typeOfModal) => dispatch(ModalActions.toggleModal(isModalOpen,typeOfModal,false)),
  fetchOpenSlots:()=>dispatch(OpenSlotsActions.fetchOpenSlots())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen)

