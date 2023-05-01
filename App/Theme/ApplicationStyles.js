/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */

import { StyleSheet, Platform, StatusBar } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';
export default {
  screen: {
    container: {
      flex: 1,
 	  marginTop: getStatusBarHeight(true),//ADDED TRUE For android
      backgroundColor: 'white',
      paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0//TODO:added for android whole line
    },
 safeareascreen:{
 	 
 }
  },
}
