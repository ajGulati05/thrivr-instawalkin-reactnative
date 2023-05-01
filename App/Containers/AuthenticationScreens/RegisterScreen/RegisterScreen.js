import React from 'react'
import { SafeAreaView,Platform, Text, View, ActivityIndicator, Image,Linking } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './RegisterScreenStyle'
import { Images,Helpers,Fonts } from 'App/Theme'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button,StyledInput,AnimatedLogoWrapper,StyledText } from '../../../Components';
import AuthActions from 'App/Stores/Auth/Actions'
import NavigationService from 'App/Services/NavigationService' 
import {width, height, totalSize} from 'react-native-dimension';

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */
const phoneRegExp = /^\+[0-9] (\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/


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
    .min(6, 'Oooh lets make your password a bit longer'),
  firstname: Yup
    .string()
    .label('Firstname')
    .required()
    .min(2, 'Seems a bit short, we use this for your receipts'),
  lastname: Yup
    .string()
    .label('Lastname')
    .required()
    .min(2, 'Seems a bit short, we use this for your receipts'),
  phone: Yup
    .string()
    .label('Phone')
    .required()
    .min(17, 'Seems a bit short eg +1306XXXXXXX')
    .max(17)
    .matches(phoneRegExp, 'Phone number is not valid eg +1306XXXXXXX'),
});
class RegisterScreen extends React.Component {


  _handleLinkClick(url){
 Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  }

  render() {

    console.log("scrren")

    return (
  
     
   
       <AnimatedLogoWrapper noLogo>
    <Formik
       initialValues={{ email: '', password: '',firstname:'',lastname:'',phone:'' }}
      onSubmit={(values, {props, setErrors, setSubmitting}) => {
        console.log("trying t call");
        this.props.register(values.email,values.password,values.firstname,values.lastname,values.phone,setErrors);
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
        
            autoCapitalize = 'none'
            autoFocus
            autoCorrect={false}
            />

          <StyledInput
            label="Password"
            formikProps={formikProps}
            formikKey="password"
            placeholder="password"
            secureTextEntry
          
            autoCapitalize = 'none'
            lowPadding
             autoCorrect={false}
          />
   <StyledInput
            label="Firstname"
            formikProps={formikProps}
            formikKey="firstname"
            placeholder="firstname"
            lowPadding
             autoCorrect={false}
          />
             <StyledInput
            label="Lastname"
            formikProps={formikProps}
            formikKey="lastname"
            placeholder="lastname"
            lowPadding
           autoCorrect={false}
          />
             <StyledInput
            label="Phone"
            formikProps={formikProps}
            formikKey="phone"
            placeholder="phone"
            lowPadding
            keyboardType='numeric'
          />

               <Button
                loading={this.props.registerLoading||this.props.loginLoading}
                secondary
                caption="Sign Up"
                 onPress={formikProps.handleSubmit}
         
/>
       
        </React.Fragment>
      )}
    </Formik>
<View>

<StyledText bold center sameLine normalText={'Have an account?'} onPress={()=> {NavigationService.navigate('LoginScreen')}}>
Sign In. 
</StyledText>


        </View>
<View style={{display: 'flex',alignItems: 'center', textAlign:  'center'  }}>
<Text style={[Helpers.TextStyleInLinkText,Fonts.style.h2]}>By continuing, you agree to Instawalkin's 
<Text style={[Helpers.LinkStyleInLinkText,Fonts.style.h2]} onPress={()=> {this._handleLinkClick('https://instawalkin.com/terms-of-service')}}>
{' '}Term of Use{' '}
</Text>
and
<Text  style={[Helpers.LinkStyleInLinkText,Fonts.style.h2]} onPress={()=> {this._handleLinkClick('https://instawalkin.com/privacy-policy')}}>
{' '}Privacy Policy{' '}
</Text> </Text>  
</View>
         </AnimatedLogoWrapper>


    )
  }
  

}




RegisterScreen.propTypes = {
  register: PropTypes.func,
}

const mapStateToProps = (state) => ({
   registerLoading:state.auth.registerLoading,
   loginLoading:state.auth.loginLoading,
   registerErrorMessage:state.auth.registerErrorMessage
})

const mapDispatchToProps = (dispatch) => ({
 register: (email,password,firstname,lastname,phone,setErrors) => dispatch(AuthActions.requestRegister(email,password,firstname,lastname,phone,setErrors)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreen)
