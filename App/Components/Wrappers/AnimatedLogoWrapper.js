
import React from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ListView,
  Animated, Keyboard,KeyboardAvoidingView,Dimensions

} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Images} from '../../Theme'



class AnimatedLogoWrapper extends React.Component{

   constructor(props){
    super(props);
    this.defaultState={
  }
    this.state = this.defaultState;
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);

    this.renderComponentMount()
  }

  renderComponentMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };


 render(){

  
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={ContainerStyle.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        
        enableOnAndroid={true}
        enableAutomaticScroll={(Platform.OS === 'ios')}
        >
     
      {!this.props.noLogo&&<Animated.Image source={Images.logo} style={[ContainerStyle.logo, { height: this.imageHeight, }]} />}
      <View style={[ContainerStyle.content,!this.props.noLogo&&ContainerStyle.noLogoHeight]}>

      {this.props.children}
       </View>
                  
             
   
      </KeyboardAwareScrollView>
    )
   
  }

}

export default AnimatedLogoWrapper;



const window = Dimensions.get('window');
const IMAGE_HEIGHT = window.width/4 ;
export const IMAGE_HEIGHT_SMALL = window.width /10;

const ContainerStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    marginBottom: 20,
    padding:10,
    marginTop:20
  },

  content: {
    width:'100%',
    height:'100%'//ADDED THIS DUE TO ANDROID 
    // is 50% of container width
  },
  noLogoHeight:{
     height: '70%'//ADDED THIS DUE TO ANDROID 
  }
});

