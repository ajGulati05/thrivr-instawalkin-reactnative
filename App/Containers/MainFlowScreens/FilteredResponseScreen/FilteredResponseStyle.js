import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'
import {width, height, totalSize} from 'react-native-dimension';
export default StyleSheet.create({
  container: {
  	flex: 1,
   paddingTop: totalSize(3),

  }, fullHeight:{
    ...ApplicationStyles.screen.fullHeight,
   },
   innerView:{
   	paddingTop: totalSize(1), 
   	paddingBottom: totalSize(1),
   	 display: 'flex',
   	 flexDirection: 'row',
   	justifyContent: 'space-around'  
   }
})
