import React from 'react'
import { SafeAreaView,Platform, Text, View, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { Images } from 'App/Theme'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button,StyledInput,AnimatedLogoWrapper,StyledText } from '../../../Components';
import AuthActions from 'App/Stores/Auth/Actions'
import NavigationService from 'App/Services/NavigationService' 
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
});
class ForgotScreen extends React.Component {
  componentDidMount() {
    
  }

  render() {
    return (
  
     
   
       <AnimatedLogoWrapper>
    <Formik
      initialValues={{ email: '' }}
      
      onSubmit={(values) => {
        this.props.recoverPassword(values.email);
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
              autoCorrect={false}
          />



            <Button
         
          loading={this.props.forgotPasswordLoading}
          secondary
          caption="RECOVER PASSWORD"
          onPress={formikProps.handleSubmit}
/>
            
          
        </React.Fragment>
      )}
    </Formik>
<View style={{alignItems:  'center'  }}>
<StyledText actiontext bold onPress={()=> {NavigationService.navigate('LoginScreen')}}>
Go Back.
</StyledText>

        </View>
         </AnimatedLogoWrapper>


    )
  }
  

}




ForgotScreen.propTypes = {
  recoverPassword: PropTypes.func,
}

const mapStateToProps = (state) => ({
  forgotPasswordLoading:state.auth.forgotPasswordLoading
})

const mapDispatchToProps = (dispatch) => ({
 recoverPassword: (email) => dispatch(AuthActions.initiateForgotPassword(email)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotScreen)
