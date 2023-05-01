import axios from 'axios'
import  {Config}  from 'App/Config'
import _ from 'lodash'
function fetchUser() {

 
  return axios.get(Config.GET_USER_PROFILE).then((response) => {
  return response.data;

  
  })
}


function updateUser(payload,setErrors) {

 
  return axios.post(Config.POST_USER_PROFILE,payload,{handlerEnabled: false}).
  	then((response)=>{
return {error:false,response:response.data}
		
	}).
  catch((error)=>{
    const {errors}=error.response.data;
  transformErrors(setErrors,errors)
     return {error:true,errorMessage:errors}
  })
}
export const userService = {
  fetchUser,
  updateUser
}


function transformErrors(setErrors,payload){
  var errorPayload={}
 _.forOwn(payload, (value, key) => {
    var newPayload={[key]:value[0]};
    errorPayload={...newPayload,...errorPayload}
 })

console.log("hello"+JSON.stringify(errorPayload))
 setErrors(errorPayload)
}
