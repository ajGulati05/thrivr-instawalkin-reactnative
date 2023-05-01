import React, {Component} from 'react';
import {View,Text,SafeAreaView,TextInput,StyleSheet} from 'react-native';
import { StyledFilterText,StyledButtonGroup,Button,Header } from '../../../Components';
import {Fonts,Colors} from 'App/Theme'
import {width, height, totalSize} from 'react-native-dimension';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import BookingActions from 'App/Stores/Booking/Actions'
class TipScreen extends Component {


	constructor (props) {
  super(props);
  this.state = {
    selectedIndex: 1,
    booking:this.props.navigation.getParam('booking',null),
    textValue:10
  }
 this.updateIndex = this.updateIndex.bind(this)
  this.onChangeText = this.onChangeText.bind(this)
}
componentDidMount = () => {
  			console.log(JSON.stringify(this.state.booking))
          this.onChangeTextWithPercent(this.state.booking.total_amount,this.state.selectedIndex) 
  }
updateIndex (selectedIndex) {
this.setState({selectedIndex})
this.onChangeTextWithPercent(this.state.booking.total_amount,selectedIndex) 
 }

onChangeText(textValue){
	this.setState({textValue:textValue})
}

onChangeTextWithPercent(price,selectedIndex){
	var tipPercent=0.15;
	if(selectedIndex==0)
	{
		tipPercent=0.10
	}
	else if(selectedIndex==2)
	{
		tipPercent=0.20
	}
	var textValue=parseFloat(price)*tipPercent;
	this.setState({textValue})
}
  render () {

    const buttons = ['10%', '15%', '20%']
    return (
    <SafeAreaView>	
      <Header title='Add Tip'/>
  <View style={style.container}>
      <StyledButtonGroup
     onPress={(value)=>this.updateIndex(value)}
      selectedIndex={this.state.selectedIndex}
      buttons={buttons} small />
      <TextInput style={style.textInput} keyboardType='numeric' value={this.state.textValue.toString()}
      onChangeText={textValue => this.onChangeText(textValue)}
      /> 
 <Button
        
         loading={this.props.loading}
          secondary
          caption="Add Tip"
          onPress={()=>{this.props.initiateTipRequest(this.state.textValue,this.state.booking.id)}}
/>
</View>
         </SafeAreaView>
    );
  }
}

const style= StyleSheet.create({
	container:{
		width:'100%',
		display: 'flex',
		justifyContent:  'center',
		alignItems:  'center'
	},
  textInput:{
  
    fontSize:30,
    textAlign: 'center',
    fontFamily: Fonts.family.primaryBold,
    borderWidth: 0,
    borderBottomWidth:width(1.2),
    borderBottomColor: Colors.brandPrimary,
    width:width(80),
   color: Colors.brandPrimary,
    alignItems:  'center',
     paddingTop: width(3),
    marginTop: width(3),
   
    marginBottom: width(3)
    
 },
 })

TipScreen.propTypes = {
  initiateTipRequest: PropTypes.func,
}

const mapStateToProps = (state) => ({
  loading:state.booking.tipLoading,
  
})

const mapDispatchToProps = (dispatch) => ({
 initiateTipRequest: (tipAmount,booking_id) => dispatch(BookingActions.initiateTipRequest(tipAmount,booking_id)),
 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TipScreen)
