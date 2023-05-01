import React from 'react';
import { createAppContainer, createStackNavigator,createBottomTabNavigator } from 'react-navigation'
import {Image} from 'react-native';
import { Colors, Fonts,Localization,Images } from '../Theme';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import LoginScreen from 'App/Containers/AuthenticationScreens/LoginScreen/LoginScreen'
//import RegisterScreen from 'App/Containers/AuthenticationScreens/RegisterScreen/RegisterScreen'
import ForgotScreen from 'App/Containers/AuthenticationScreens/ForgotScreen/ForgotScreen'
import RegisterScreen from 'App/Containers/AuthenticationScreens/RegisterScreen/RegisterScreen'
import ModalScreen from 'App/Containers/ModalScreen/ModalScreen'
import MainScreen from 'App/Containers/MainFlowScreens/MainScreen/MainScreen'
import FilteredResponseScreen from 'App/Containers/MainFlowScreens/FilteredResponseScreen/FilteredResponseScreen'
import CheckoutScreen from 'App/Containers/MainFlowScreens/CheckoutScreen/CheckoutScreen'
import HistoryScreen from 'App/Containers/HistoryFlowScreens/HistoryScreen/HistoryScreen'
import TipScreen from 'App/Containers/HistoryFlowScreens/TipScreen/TipScreen'
import SettingScreen from 'App/Containers/SettingFlowScreens/SettingScreen/SettingScreen'
import CreditCardScreen from 'App/Containers/SettingFlowScreens/CreditCardScreen/CreditCardScreen'
import AddCardScreen from 'App/Containers/SettingFlowScreens/CreditCardScreen/AddCardScreen'
import EditProfileScreen from 'App/Containers/SettingFlowScreens/EditProfileScreen/EditProfileScreen'
import NotificationSettingScreen from 'App/Containers/SettingFlowScreens/NotificationSettingScreen/NotificationSettingScreen'
import {width, height, totalSize} from 'react-native-dimension';
import { Animated, Easing,Platform } from 'react-native';
import HistoryDetailScreen from 'App/Containers/HistoryFlowScreens/HistoryDetailScreen/HistoryDetailScreen'




/**
 * The authentication stack contains the application's authentication, registration and deauthentication methods.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const AuthenticationNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    LoginScreen: LoginScreen,
   // RegisterScreen:RegisterScreen,
    ForgotScreen:{screen:ForgotScreen},
    RegisterScreen:{screen:RegisterScreen},
    
   
  },
  {
    // By default the application will show the Login screen
    initialRouteName: 'LoginScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

/**
 * The authentication stack contains the application's authentication, registration and deauthentication methods.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const MainFlowNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    MainScreen: MainScreen,
    FilteredResponseScreen:FilteredResponseScreen,
    CheckoutScreen:CheckoutScreen,
    AddCardScreenOnCheckout:{screen:AddCardScreen}
   
  },
  {
    // By default the application will show the Login screen
    initialRouteName: 'MainScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode:  'none',
  }
)


/**
 * The authentication stack contains the application's authentication, registration and deauthentication methods.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const HistoryFlowNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    HistoryScreen: HistoryScreen,
    HistoryDetailScreen: HistoryDetailScreen,
    TipScreen:TipScreen
  },
  {
    // By default the application will show the Login screen
    initialRouteName: 'HistoryScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode:  'none',
  }
)


const SettingFlowNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SettingScreen: SettingScreen,
    EditProfileScreen:EditProfileScreen,
    NotificationSettingScreen:NotificationSettingScreen,
    CreditCardScreen:CreditCardScreen,
    AddCardScreen:AddCardScreen
   
  },
  {
    // By default the application will show the Login screen
    initialRouteName: 'SettingScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode:  'none',
  }
)


/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const TabNavigator = createBottomTabNavigator(
  {

    MainFlowNavigator: { screen: MainFlowNavigator,
        navigationOptions:{
            tabBarLabel: Localization.home_tab,
          headerTitleStyle:{ fontFamily: Fonts.primaryRegular,color:Colors.white},
        tabBarIcon: ({ tintColor, focused }) => (  <Tabbaricons focused={focused} inactive_imgurl={Images.home_inactive}
          active_imgurl={Images.home_active}/> 
), 
 }},
    HistoryFlowNavigator:{
            screen: HistoryFlowNavigator,
          
            navigationOptions:{
            tabBarLabel: Localization.history_tab,

            headerTitleStyle:{ fontFamily: Fonts.primaryRegular,color:Colors.white},
        tabBarIcon: ({ tintColor, focused }) => (  <Tabbaricons focused={focused} inactive_imgurl={Images.my_appo_inactive}
          active_imgurl={Images.my_appo_active}/> ),
 }},
    SettingFlowNavigator:{screen:SettingFlowNavigator,
    navigationOptions:{
            tabBarLabel: Localization.setting_tab,

         
           headerTitleStyle:{ fontFamily: Fonts.primaryRegular,color:Colors.white},
        tabBarIcon: ({ tintColor, focused }) => (  <Tabbaricons focused={focused} inactive_imgurl={Images.settings_inactive}
          active_imgurl={Images.settings_active}/> ),
 }},

  },
  {
    // By default the application will show the AuthenticationScreens
    initialRouteName: 'MainFlowNavigator',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    mode: 'modal',
    headerMode:  'none',
    tabBarPosition:'bottom',
    tabBarOptions: {
        activeTintColor: Colors.brandDarkGrey,
        labelStyle: {
        fontSize: totalSize(1.5),
      }
    },
    swipeEnabled: false,
     defaultNavigationOptions: {
    headerMode:  'none',
  }
  }
)


 const ModalScreenStacks  = createStackNavigator(
   {
    AuthenticationScreens: { screen: AuthenticationNavigator,
     },
     TabScreens:TabNavigator,
    ModalScreen: {screen: ModalScreen,
    },
  },
  {
    initialRouteName:  'AuthenticationScreens',
    mode: 'modal',
    headerMode:'none',
  transparentCard: true,

    defaultNavigationOptions: {
      transparentCard: true,
     
    },

transitionConfig: () => ({
  transitionSpec: {
    duration: 750,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;

    const height = layout.initHeight;
    const translateY = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [height, 0, 0],
    });

    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [1, 1, 0.5],
    });

    return { opacity, transform: [{ translateY }] };
  },
}),
  }
);
const Tabbaricons = (props) => {
  return  (<Image
            source={props.focused? props.active_imgurl : props.inactive_imgurl }
            style={{resizeMode:'contain',  width:width(8)}}
          />);
};
export default createAppContainer(ModalScreenStacks)
