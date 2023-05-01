

import React from 'react'
import { SafeAreaView,Platform, Text, View, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './EditProfileScreenStyle'
import { Images } from 'App/Theme'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button,StyledInput,AnimatedLogoWrapper,StyledText,Header } from '../../../Components';
import UserActions from 'App/Stores/User/Actions'
import NavigationService from 'App/Services/NavigationService' 
import {width, height, totalSize} from 'react-native-dimension';
import {Fonts,Colors} from 'App/Theme'
/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */
const phoneRegExp = /^\+[0-9] (\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/
const validationSchema = Yup.object().shape({
  firstname: Yup
    .string()
    .label('Firstname')
    .required(),
  lastname: Yup
    .string()
    .label('Lastname')
    .required()
    .min(2, 'Seems a bit short...'),
  phone: Yup
    .string()
    .label('phone')
    .required()
     .min(11, 'Seems a bit short eg +1306XXXXXXX')
    .max(17)
    .matches(phoneRegExp, 'Phone number is not valid eg +1306XXXXXXX')
});
class EditProfileScreen extends React.Component {

  render() {
  	const {user}=this.props.user
    const{firstname,lastname,phone }=user
  	console.log(JSON.stringify(user));
    return (
  
     
   
       <SafeAreaView>
        <Header title='Edit Profile'/>
    <Formik
   
      initialValues={{ firstname,lastname,phone}}
      onSubmit={(values, {props, setErrors, setSubmitting}) => {
        if(values.firstname!=null){

        }

        this.props.requestUpdateProfile(values.firstname,values.lastname,values.phone,setErrors);
      }}
      validationSchema={validationSchema}
      enableReinitialize={true}
    >

      {formikProps => (
        <React.Fragment>
         <StyledInput
            label="Firstname"
            formikProps={formikProps}
            formikKey="firstname"
            placeholder={user.firstname}
            placeholderTextColor={Colors.brandPrimary}
          
          />

          <StyledInput
            label="Lastname"
            formikProps={formikProps}
            formikKey="lastname"
            placeholder={user.lastname}
            lowPadding
            placeholderTextColor={Colors.brandPrimary}
          />
      <StyledInput
            label="Phone"
            formikProps={formikProps}
            formikKey="phone"
            placeholder={user.phone}
            lowPadding
            placeholderTextColor='black'
            keyboardType='numeric'
            placeholderTextColor={Colors.brandPrimary}
          />
     
      <Button
        
          loading={this.props.user.userIsLoading}
          secondary
          caption="Save"
          onPress={formikProps.handleSubmit}
/>
        <Text style={{ color: 'red' }}>{this.props.error&&'Please make sure your username and password is correct.'}</Text>
        
        </React.Fragment>
      )}
    </Formik>



<StyledText bold center onPress={()=> {NavigationService.goBack()}}>
Go Back
</StyledText>
       
         </SafeAreaView>


    )
  }
  

}




EditProfileScreen.propTypes = {
  login: PropTypes.func,
}

const mapStateToProps = (state) => ({
  user:state.user
})

const mapDispatchToProps = (dispatch) => ({

 requestUpdateProfile: (firstname,lastname,phone,setErrors) => dispatch(UserActions.requestUpdateProfile(firstname,lastname,phone,setErrors)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileScreen)
