import React, {Component} from 'react';
import {View,Text,SafeAreaView} from 'react-native';
import {FilterWrapper,TimeCards} from  '../../../Components';
import styles from './FilteredResponseStyle'
import {Button} from '../../../Components';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import NavigationService from 'App/Services/NavigationService'  
import ModalActions from 'App/Stores/Modal/Actions'

class FilteredResponseScreen extends Component {


  render () {
    const {date_value,duration_value,location_value}=this.props.filter;
    return (
      <SafeAreaView style={[styles.container]}>
        <FilterWrapper 
         text={date_value.text}
         backButton
         onPress={()=>{this.props.toggleModal(true,'CALENDAR')}}/>


         <View style={styles.innerView}>
          <FilterWrapper 
          small
          
         text={duration_value.description}
         onPress={()=>{this.props.toggleModal(true,'DURATION')}}/>
          <FilterWrapper 
          small
         text={location_value.text}
         onPress={()=>{this.props.toggleModal(true,'LOCATION')}}/>

          <FilterWrapper 
          small
         text={'Filters'}
         onPress={()=>{this.props.toggleModal(true,'FILTER')}}/>
         </View>
        
         <TimeCards/>
       
      </SafeAreaView>
    );
  }
}



FilteredResponseScreen.propTypes = {
  toggleModal: PropTypes.func
}

const mapStateToProps = (state) => ({
filter:state.filter
})

const mapDispatchToProps = (dispatch) => ({
 toggleModal: (isModalOpen,typeOfModal) => dispatch(ModalActions.toggleModal(isModalOpen,typeOfModal,true))
 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredResponseScreen)

