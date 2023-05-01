import React from 'react'
import { SafeAreaView,Platform, Text, View, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './LoginScreenStyle'
import { Images } from 'App/Theme'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button,StyledInput,AnimatedLogoWrapper,StyledText } from '../../../Components';
import AuthActions from 'App/Stores/Auth/Actions'
import ModalActions from 'App/Stores/Modal/Actions'
import NavigationService from 'App/Services/NavigationService' 
import {width, height, totalSize} from 'react-native-dimension';
/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const validationSchema = Yup.object().shape({
  email: Yup
    .string()
    .label('Email')
    .email()
    .required(),
  password: Yup
    .string()
    .label('Password')
    .required()
    .min(2, 'Seems a bit short...'),
});
class LoginScreen extends React.Component {
  componentDidMount() {
    
  }

  render() {
    return (
  
     
   
       <AnimatedLogoWrapper>
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, {props, setErrors, setSubmitting}) => {
        this.props.login(values.email,values.password,setErrors);
      }}
      validationSchema={validationSchema}
    >
      {formikProps => (
        <React.Fragment>
         <StyledInput
            label="Email"
            formikProps={formikProps}
            formikKey="email"
            placeholder="johndoe@example.com"
            autoFocus
            autoCapitalize = 'none'
             textContentType={'username'}
  autoCorrect={false}
          />

          <StyledInput
            label="Password"
            formikProps={formikProps}
            formikKey="password"
            placeholder="password"
            secureTextEntry
            lowPadding
            autoCapitalize = 'none'
             textContentType={'password'}
               autoCorrect={false}
          />
   
     
      <Button
        
         loading={this.props.loading}
          secondary
          caption="Login"
          onPress={formikProps.handleSubmit}
/>
        <Text style={{ textAlign:'center',color: 'red' }}>{this.props.error&&this.props.error}</Text>
        
        </React.Fragment>
      )}
    </Formik>
<View>

<StyledText bold center sameLine normalText={'Don\'t have an account?'} onPress={()=> {NavigationService.navigate('RegisterScreen')}}>
Sign Up. 
</StyledText>
<StyledText bold center onPress={()=> {NavigationService.navigate('ForgotScreen')}}>
Recover Password?
</StyledText>

        </View>
<View style={{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
   
    width:width(100),
    bottom: width(5)}}>
<StyledText actiontext bold center onPress={()=>{this.props.toggleModal(true,'HOW_TO')}}>
How it works?
</StyledText>    
<StyledText actiontext  bold center onPress={()=> {NavigationService.navigate('TabScreens')}}>
Skip.
</StyledText>
</View>        
         </AnimatedLogoWrapper>


    )
  }
  

}




LoginScreen.propTypes = {
  login: PropTypes.func,
}

const mapStateToProps = (state) => ({
  loading:state.auth.loginLoading,
  error:state.auth.onLoginFailure
})

const mapDispatchToProps = (dispatch) => ({
 login: (email,password,setErrors) => dispatch(AuthActions.initiateLogin(email,password,setErrors)),
  toggleModal: (isModalOpen,typeOfModal) => dispatch(ModalActions.toggleModal(isModalOpen,typeOfModal,false)),
 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
