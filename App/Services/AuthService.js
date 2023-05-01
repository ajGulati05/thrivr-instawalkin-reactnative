import axios from 'axios'
import { Config } from 'App/Config'
import _ from 'lodash'


/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */


function initiateLogin({email,password,setErrors}) {
  // Simulate an error 50% of the time just for testing purposes

 var payload={email,password};
 
  return axios.post(Config.LOGIN,payload,{handlerEnabled: false}).then((response) => {
 	return {error:false,response:response.data}
    
  }).
  catch((error)=>{

     return {error:true,errorMessage:'Incorrect username and password'}
  })
}


function initiateAccessCheck() {

  return axios.get(Config.CHECK_AUTH,{handlerEnabled: false}).then((response) => {
return response.data
    
  }).
  catch((error)=>{
 
     return {'check':false}
  })
 
}


function initiateRegister(email,password,firstname,lastname,phone,setErrors){
	var payload={email,password,firstname,lastname,phone}
  	return axios.post(Config.REGISTER_USER,payload,{handlerEnabled: false}).
  then((response)=>{
return {error:false,response:response.data}
		
	}).
  catch((error)=>{
    const {errors}=error.response.data;
  transformErrors(setErrors,errors)
     return {error:true,errorMessage:errors}
  })
 
}
function transformErrors(setErrors,payload){
  var errorPayload={}
 _.forOwn(payload, (value, key) => {
    var newPayload={[key]:value[0]};
    errorPayload={...newPayload,...errorPayload}
 })


 setErrors(errorPayload)
}


function initiateLogout() {

  return axios.get(Config.LOGOUT,{handlerEnabled: false})
  then((response)=>{
return {error:false}
    
  }).
  catch((error)=>{
 return {error:true}
  })
}

function forgotPassword(email) {


  return axios.post(Config.FORGOT_PASSWORD,{email},{handlerEnabled: true})
  then((response)=>{
return response.data
    
}).catch((error)=>{
 return false;
  })
}

export const authService = {
  initiateLogin,
  initiateAccessCheck,
  initiateRegister,
  initiateLogout,
  forgotPassword
}
