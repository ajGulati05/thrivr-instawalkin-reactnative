import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'
import axios from 'axios'
import {Config} from 'App/Config'
import AuthActions from 'App/Stores/Auth/Actions'
import AppStateActions from 'App/Stores/AppState/Actions'
import codePush from "react-native-code-push";
navigator.geolocation = require('@react-native-community/geolocation');
const { store, persistor } = createStore()

 class App extends Component {
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store
       */
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <RootScreen />
        </PersistGate>
      </Provider>
    )
  }
}



let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
App = codePush(codePushOptions)(App);
export default App;






//import store from '../store/index'
//import { authLogout } from '../modules/auth/store/actions'

//const API_URL = (process.env.MIX_ENV === 'test') ? process.env.MIX_BASE_URL || (`http://localhost:${process.env.PORT}/api/${version}/`) : `/api/${version}`;
const API_URL=Config.API_URL;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.params = {};

const containsUrl = (url={}) => {
  if (url===Config.API_URL+Config.LOGIN||
  url===Config.API_URL+Config.CHECK_AUTH||
  url===Config.API_URL+Config.REGISTER_USER||
  url===Config.API_URL+Config.POST_USER_PROFILE||
  url===Config.API_URL+Config.POST_NOTIFICATION_SETTINGS
 ) 
    {return true
    }
  else{
    return false
  }
}



axios.interceptors.response.use(
  response => {
      console.log("Main response"+JSON.stringify(response));
      if(typeof response.data.newtokens !=='undefined'){
        store.dispatch(AuthActions.onLoginSuccess(response.data.newtokens))
          if(typeof response.data.response.check !=='undefined'){
            response.data.response.check=true;
          }
      }
       console.log("main response 1")
      if(typeof response.data.show !=='undefined'){
        console.log("main response 2")

      store.dispatch(AppStateActions.showServerMessageModal(response.data.title,response.data.message))
       }

       return response;

  },
  (error) => {

    if(containsUrl(error.config.url)){
       return Promise.reject({ ...error });
    }
else{
    store.dispatch(AppStateActions.showServerMessageModal('Oops!','There was an issue on our side we are looking on it right this insta.'))
    }
 
  });


axios.interceptors.request.use(function(config) {

console.log("config"+JSON.stringify(store.getState().auth));
  let token=null
  if (   store.getState().auth.tokens != null)
  {    console.log(" adding tokens  ");
        token=store.getState().auth.tokens
      
        //console.log(" in");
       config.headers.Authorization = 'Bearer '+token.access_token;
        config.params = {refresh_token: token.refresh_token }
        //config.params['refreshtoken'] =token.refresh_token //  config.params.refreshtoken = token.refresh_token;
         console.log("config"+JSON.stringify(config));
  }
    console.log("no config"+JSON.stringify(config));
  return config;
}, function(err) {
  return Promise.reject(err);
});

