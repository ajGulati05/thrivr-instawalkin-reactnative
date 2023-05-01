import axios from 'axios'
import  {Config}  from 'App/Config'



function requestNotification() {

 
  return axios.get(Config.GET_NOTIFICATION_SETTINGS).
  	then((response)=>{
return response.data.notification_settings;
		
	})
}

function updateNotificationSettings(payload){

	return axios.post(Config.POST_NOTIFICATION_SETTINGS,payload,{handlerEnabled: false}).
  then((response)=>{
return {error:false,response:response.data}
		
	}).
  catch((error)=>{

     return {error:true,errorMessage:errors}
  })
}
export const notificationService = {
  requestNotification,
  updateNotificationSettings
}



