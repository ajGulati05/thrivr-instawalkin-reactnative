
import React, { Component } from 'react';
import {  View,TouchableOpacity,StyleSheet,Text,TouchableWithoutFeedback } from 'react-native' 
import { DateComponent,ListStyled,GooglePlacesComponent,FilterViewWrapper,PayOption,AddCard,HowTo } from 'App/Components';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import NavigationService from 'App/Services/NavigationService'  
import ModalActions from 'App/Stores/Modal/Actions'
import FilterActions from 'App/Stores/Filter/Actions'
import {width, height, totalSize} from 'react-native-dimension';
import styles from './ModalScreenStyle'

class ModalScreen extends React.Component {


     constructor(props) {
         super(props);
      
     }



     handleOnPress = () =>{
      if(this.props.modal.typeOfModal!='LOADING'){
                  this.props.toggleModal(null,null)
            }
     }

   render() {

    const {typeOfModal,triggerAPI}=this.props.modal;
 
         return (
        <TouchableOpacity  style={styles.outsideObject} onPress={()=>this.handleOnPress()}>
        <TouchableWithoutFeedback onPress={()=>{console.log("do nothing")}}>
         <View  style={[styles.insideObject,typeOfModal=='CALENDAR'&&styles.calendar,
        typeOfModal=='DURATION'&&styles.duration,
        typeOfModal=='LOCATION'&&styles.location]}> 
          {typeOfModal=='CALENDAR'?<DateComponent triggerAPI={triggerAPI}/>:
            typeOfModal=='DURATION'?<ListStyled triggerAPI={triggerAPI} 
            />:
            typeOfModal=='LOCATION'?<GooglePlacesComponent triggerAPI={triggerAPI}/>:
             typeOfModal=='FILTER'?<FilterViewWrapper triggerAPI={false} />: 
             typeOfModal=='PAYMENT'?<PayOption triggerAPI={false} />:
             typeOfModal=='PAYMENT_BACK_CHECKOUT'?<PayOption triggerAPI={false} screenFromPay={true} />:
             typeOfModal=='ADD_CARD'?<AddCard triggerAPI={triggerAPI} />: typeOfModal=='HOW_TO'?<HowTo triggerAPI={false} />:null
        }
 
 
           </View>
         </TouchableWithoutFeedback>
              </TouchableOpacity>
       
      
         )
     }

 }

ModalScreen.propTypes = {
  toggleModal: PropTypes.func,
}

const mapStateToProps = (state) => ({
modal:state.modal,

})

const mapDispatchToProps = (dispatch) => ({
 toggleModal: (isModalOpen,typeOfModal) => dispatch(ModalActions.toggleModal(isModalOpen,typeOfModal,false)),

 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalScreen)


