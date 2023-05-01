import React, { Component } from 'react';
import { ListItem } from 'react-native-elements'
import { Text, View,SafeAreaView } from 'react-native';
import { Colors, Fonts, } from '../../../Theme';
import { AuthGuard } from '../../../Components';
import AuthActions from 'App/Stores/Auth/Actions'
import NavigationService from 'App/Services/NavigationService'
import ModalActions from 'App/Stores/Modal/Actions'
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
        const list = [


    {
        title: 'Edit Account',
        icon: 'account-box',
        navigate: 'EditProfileScreen',
        show: true
    },
   /* {
        title: 'Notifications ',
        icon: 'notifications',
        navigate: 'NotificationSettingScreen',
        show: true
    },*/
    {
        title: 'Credit Cards',
        icon: 'credit-card',
        navigate: 'CreditCardScreen',
        show: true,

    },
    {
        title: 'How the app works?',
        icon: 'question',
        navigate: 'HOW_TO',
        type: 'octicon',
        switch: false,
        show: true
    },
    {
        title: 'Logout',
        icon: 'log-out',
        type: 'entypo',
        navigate: 'LOGOUT',
        show: true
    }

];
class SettingScreen extends Component {


    constructor(props) {
        super(props);
    }

    onLinkItemPress(item){


        if(item==='LOGOUT'){
           this.props.logout();
        }
        else if(item==='HOW_TO'){
        this.props.toggleModal(true,'HOW_TO')
        }
        else{
          NavigationService.navigate(item)
        }
    }


    render() {

        return (
        <SafeAreaView>
       <AuthGuard page={' view settings.'}>
   	 {list.map((item, i) => (
    
      <ListItem
      
         key={i}
         title = { item.title }
         chevron={{color:Colors.brandMainRed}}
         leftIcon = {{ name: item.icon, color: Colors.brandMainRed, type: item.type }}
         bottomDivider={true}
         onPress = {() => this.onLinkItemPress(item.navigate)}
         
      />
    ))
  }
  </AuthGuard>
  </SafeAreaView>
        )
    }
}
SettingScreen.propTypes = {
  logout:PropTypes.func,
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(AuthActions.initiateLogout()),
    toggleModal: (isModalOpen,typeOfModal) => dispatch(ModalActions.toggleModal(isModalOpen,typeOfModal,false)),
 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingScreen)

