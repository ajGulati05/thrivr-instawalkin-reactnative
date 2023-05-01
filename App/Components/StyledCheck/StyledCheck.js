/**
 * Checkbox group
 * ataomega@gmail.com
 * www.atasmohammadi.net
 * version 1.0
 */
import React, {Component, PropTypes} from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Fonts,Colors} from '../../Theme'
var { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';
import _ from 'lodash'
export default class StyledCheck extends Component {
  constructor(props){
    super(props);
    this.state = {
      pageWidth: Dimensions.get('window').width,
      pageHeight: Dimensions.get('window').height,

      selectedValue:null
    };
  }

  componentDidMount = () => {
 
  
       console.log("hello"+JSON.stringify(this.props));
        if(this.props.defaultValue.code){
          this._onSelect(this.props.defaultValue.code)
        }
      
    
  }

  getNewDimensions(event){
        var pageHeight = event.nativeEvent.layout.height
        var pageWidth = event.nativeEvent.layout.width
        this.setState({
            pageHeight, pageWidth
        })
    }

  _onSelect = (item) => {

    var selectedValue=this.state.selectedValue

    if(selectedValue != item && item!=null){
      selectedValue=item
      //selected.push(item)
      this.setState({
        selectedValue: selectedValue
      })
    } 
    var checkbox=_.filter(this.props.checkboxes, { code:selectedValue });
    this.props.callback(checkbox[0])
  }

  _isSelected = (item) => {
     var selectedValue=this.state.selectedValue

     if(selectedValue!=item)
    {
      return false
    }
    return true
  }

  render(){
    const { checkboxes,  iconSize,  checkedIcon, uncheckedIcon } = this.props;

    return(
      <View
        style={StyledCheckStyle.container}
      >
        {checkboxes.map((checkbox, index)=>{
         
          return(
            <TouchableOpacity
              key={index}
              style={StyledCheckStyle.innerContainerStyle}
              onPress={()=>{
                this._onSelect(checkbox.code)
              }}
            >
             <Text style={StyledCheckStyle.labelStyle}>{checkbox.description}</Text>
              {this._isSelected(checkbox.code) ?
                <Icon name={checkedIcon} color={Colors.brandPrimary} size={iconSize}/>
                : <Icon name={uncheckedIcon} color={Colors.brandLightGrey} size={iconSize}/>
              }
             
            </TouchableOpacity>
          )
        })}
      </View>
    );
  }
}

const StyledCheckStyle = StyleSheet.create({
  container:{
      display: 'flex',
      justifyContent:  'space-between',
      width:'100%',
     
  },
  innerContainerStyle:{
     display: 'flex',
      justifyContent:  'space-between',
      width:'100%',
      flexDirection: 'row'
  },
    labelStyle: {
    fontFamily: Fonts.family.primaryBold,
    letterSpacing: 1,
    fontSize: 15,
    color: Colors.brandDarkGrey, 
    },

});