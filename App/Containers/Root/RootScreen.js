import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View,Text } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { ShowModal } from 'App/Components';
import { PropTypes } from 'prop-types'

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    //run disable all loading stuff here TODO
    this.props.startup(this.props.tokens);
   
   
  }

  render() {
    return (
      <View style={styles.container}>

        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
     <ShowModal/>
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({
  tokens:state.auth.tokens
})

const mapDispatchToProps = (dispatch) => ({
  startup: (tokens) => dispatch(StartupActions.startup(tokens)),
 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
