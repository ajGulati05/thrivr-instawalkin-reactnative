import React, {Component} from 'react';
import {SafeAreaView,Text} from 'react-native';
import { Header } from 'App/Components';
import { CheckBox } from 'react-native-elements'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import NotificationActions from 'App/Stores/Notification/Actions'
class NotificationSettingScreen extends Component {
  render () {
    const {viapush,viatext}=this.props.notification_settings
    return (
         <SafeAreaView>
        <Header title='Notification Settings'/>
        <CheckBox
  title='Push Notification'
  checked={viapush}
  onPress={() => this.props.updateNotificationSettingsSaga(!viapush,'viapush')}
/>
<CheckBox
  title='Text Notification'
  checked={viatext}
  onPress={() => this.props.updateNotificationSettingsSaga(!viatext,'viatext')}
/>
      </SafeAreaView>
    );
  }
}


NotificationSettingScreen.propTypes = {
  
}

const mapStateToProps = (state) => ({
notification_settings:state.notification_settings.notification_settings
})

const mapDispatchToProps = (dispatch) => ({
updateNotificationSettingsSaga:(flag,notificationType)=>dispatch(NotificationActions.updateNotificationSettingsSaga(flag,notificationType))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationSettingScreen)