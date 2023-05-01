import React from 'react'
import { Text, View,Image } from 'react-native'
import styles from './SplashScreenStyle'


import {Images} from '../../Theme'
export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image resizeMode="contain" source={Images.logo} />
          <Text>Massage you deserve</Text>
        </View>
      </View>
    )
  }
}
