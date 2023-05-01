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
   },
   outsideObject:{

          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
  
   },
   insideObject:{
   			backgroundColor: 'white',
            padding: 16,
            width: width(90),
            maxWidth: width(100),
            minHeight: height(30),
            borderRadius: 6,
            elevation: 6,
            shadowColor: 'black',
            shadowOpacity: 0.15,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 10,
         
   },
   calendar:{
   	height:height(60)
   },
    duration:{
      minHeight: height(40)
   
   },
    location:{
   	height:height(80)
   },
     filter:{
    height:height(80)
   }
})
