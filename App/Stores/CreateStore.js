import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import {setupSentry} from 'App/utils/SentryHelper'
import Raven from "raven-js";
import createRavenMiddleware from "raven-for-redux";
/**
 * This import defaults to localStorage for web and AsyncStorage for react-native.
 *
 * Keep in mind this storage *is not secure*. Do not use it to store sensitive information
 * (like API tokens, private and sensitive data, etc.).
 *
 * If you need to store sensitive information, use redux-persist-sensitive-storage.
 * @see https://github.com/CodingZeal/redux-persist-sensitive-storage
 */

 setupSentry();
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage: storage,
  /**
   * Blacklist state that we do not need/want to persist
   */
  blacklist: [
    'filter',
  ],
}

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)
  const ravenMiddle=createRavenMiddleware(Raven, {
            // Optionally pass some options here.
   })
  middleware.push(ravenMiddle)  
  enhancers.push(applyMiddleware(...middleware))

  //change true to check env
 if (true) {
    // enhancers.push(applyMiddleware(createLogger()))
    window.__REDUX_DEVTOOLS_EXTENSION__ && enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }


  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(persistedReducer, compose(...enhancers))
  const persistor = persistStore(store)


  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  store.subscribe(() => {
  console.log('store changed', store.getState());
});
  return { store, persistor }
}
