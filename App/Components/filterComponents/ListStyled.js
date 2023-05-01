import React, { Component } from "react";
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import { ListItem } from 'react-native-elements'
import _ from 'lodash'
import {Fonts,Colors} from '../../Theme'
import NavigationService from 'App/Services/NavigationService'
import StyledText from '../StyledText/StyledText'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import FilterActions from 'App/Stores/Filter/Actions'
const ListStyleds = ({ all_pricing_duration,setValues,...rest }) => {

  console.log(JSON.stringify(all_pricing_duration));

  return (
<View>

   {_.map(all_pricing_duration,(item, i) => (
     
      <ListItem
      
         key={i}
         title = {item.mobile_name +" -$"+item.project_pricings.amount}
         chevron={{color:Colors.brandMainRed}}
         bottomDivider={true}
         onPress = {() => {

          setValues({type:'duration_value',value:{id:item.id,description:item.mobile_name, text:item.mobile_name +" -$"+item.project_pricings.amount,placeholder:item.mobile_name +" -$"+item.project_pricings.amount}},rest.triggerAPI);
          
        }}
         
      />
    ))
  }

<StyledText center dark bold >Prices do not include tax.</StyledText>  
</View>  
  );
};



const mapStateToProps = (state) => ({
all_pricing_duration:state.filter.all_pricing_duration
})

const mapDispatchToProps = (dispatch) => ({
setValues:(payload,triggerAPI)=>dispatch(FilterActions.setValues(payload,triggerAPI)),
})

export  default ListStyled = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListStyleds)
