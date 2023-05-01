import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import {Fonts,Colors} from '../../Theme'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import {width, height, totalSize} from 'react-native-dimension';
import NavigationService from 'App/Services/NavigationService'  
import { Icon } from 'react-native-elements'
const FilterWrapper = ({ children, label,onPress,text,...rest }) => {
  return (
  	<View style={style.mainContainer}>
  	<View style={[style.container,rest.small&&style.small, rest. smaller&&style.smaller]}>
   { rest.backButton &&
  	 (<TouchableOpacity
  	 	 style={style.leftbuttonStyle}
          onPress={() =>{NavigationService.goBack()}}
        >
        <Text style={style.searchBarFont}>{'Back'}</Text>
        </TouchableOpacity>)}
 	 <TouchableOpacity
  	 	 style={style.rightbuttonStyle}
          onPress={() =>{onPress()}}
        >

        <Text style={[style.searchBarFont,rest.small&&style.searchBarSmall]}>{text}</Text>
        </TouchableOpacity>

  	</View>
  
  </View>
)};

export default FilterWrapper;




const style = StyleSheet.create({

  mainContainer:{
   display: 'flex',
   alignItems: 'center' 
  },

	container:{
		
		display: 'flex',
		flexDirection:  'row' ,
		shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    borderColor: 'rgba(0,0,0, .4)',
    borderTopWidth: width(0.2),
    borderLeftWidth: width(0.2),
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 5, // Android
    	height: height(5),
    	width: width(90),
    	justifyContent: 'center',
    	alignItems: 'center'

  
	},

  small:{
    width:width(25)
  },
   smaller:{
    width:width(18)
  },
	leftbuttonStyle:{
		
		width:'20%',
		alignItems:  'center',
		justifyContent:  'center',


		
	},
		rightbuttonStyle:{
		
		width:'80%',
		alignItems:  'center',
		justifyContent:  'center',
		
	},
	searchBarFont:{
			...Fonts.style.h1,
   
    fontFamily: Fonts.family.primaryBold,
    
    color: Colors.brandPrimary,  
	},
  searchBarSmall:{
      ...Fonts.style.h2
  }
  
});