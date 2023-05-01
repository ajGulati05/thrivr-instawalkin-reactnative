import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import {width, height, totalSize} from 'react-native-dimension';
export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    display: 'flex',
    justifyContent: 'space-around',

  }, fullHeight:{
    ...ApplicationStyles.screen.fullHeight,
   }
})
