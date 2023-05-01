import React, { Component } from 'react';

import {
  StyleSheet,
  View,
Image


} from 'react-native';


class CustomHeader extends React.Component {
  render() {
    return (
      <View>
     <Image
      style={{resizeMode:'contain',alignSelf:'center',
        }}
      resizeMode='contain'
    
      source={require('../../assets/home_active.png')}
    />
    </View>
    );
  }
}

export default CustomHeader;
