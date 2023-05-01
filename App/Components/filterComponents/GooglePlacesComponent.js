import React from 'react';
import { Image, Text,Alert } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import {Fonts,Colors} from '../../Theme'
import {openSlotsPayload} from 'App/Stores/OpenSlots/Selectors'
import NavigationService from 'App/Services/NavigationService'
import FilterActions from 'App/Stores/Filter/Actions'
import OpenSlotsActions from 'App/Stores/OpenSlots/Actions'
import Geolocation from '@react-native-community/geolocation';






const GooglePlacesComponents = ({permission,setValues,...rest}) => {

 
  function alert(){

          Alert.alert(
  'Sorry',
  'We are only available in Saskatoon and Regina currently.',
  [
  
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);
  }

  function setLocationValue(details){

      let text,latitude,longitude,placeholder;
  if (typeof details.address_components!=='undefined'){
        //used custom address 
    
        if(details.vicinity==="Saskatoon"|| details.vicinity==="Regina"){
          text=details.address_components[0].short_name
          latitude=details.geometry.location.lat
          longitude=details.geometry.location.lng
          placeholder=details.address_components[0].short_name
setValues({type:'location_value',value:{
      text, 
      latitude,
      longitude,
      placeholder
    }},rest.triggerAPI);

        }
    else  if(details.vicinity==="Saskatoon"|| details.vicinity==="Regina"){
          text=details.address_components[1].short_name
          latitude=details.geometry.location.lat
          longitude=details.geometry.location.lng
          placeholder=details.address_components[1].short_name
setValues({type:'location_value',value:{
      text, 
      latitude,
      longitude,
      placeholder
    }},rest.triggerAPI);

        }
        else{

          alert();
        }
 
    }
else{
  text=details.description
  latitude=details.geometry.location.lat
  longitude=details.geometry.location.lng
  placeholder=details.description
setValues({type:'location_value',value:{
      text, 
      latitude,
      longitude,
      placeholder
    }},rest.triggerAPI);
  

}
    
  }
  return (

    permission.locationPermissionLoading?(<Text>Loading</Text>):(
    <GooglePlacesAutocomplete


      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
      listViewDisplayed='true'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
          console.log(JSON.stringify(details));
          setLocationValue(details)
        
 /**/

      }}

      getDefaultValue={() => ''}

      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'YOUR API KEY',
        language: 'en', // language of the results
       
        components:'country:ca' // default: 'geocode'
      }}

      styles={{
        textInputContainer: {
          width: '100%',
        
        },
        textInput: {
      
    
      color: '#5d5d5d',
      
    },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#E3163D'
        }
      }}

      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
    
    
       GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        type: 'address'
      }}
      
      
      GooglePlacesDetailsQuery={{
        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
        fields: 'formatted_address',
      }}

      filterReverseGeocodingByTypes={['street_number', 'street_address']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
      predefinedPlaces={permission.nearBy}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      
    //  renderRightButton={() => <Text>Custom text after the input</Text>}
    />)
  );
}






const mapStateToProps = (state) => ({
permission:state.permission
})

const mapDispatchToProps = (dispatch) => ({
setValues:(payload,triggerAPI)=>dispatch(FilterActions.setValues(payload,triggerAPI)),

})

export  default GooglePlacesComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(GooglePlacesComponents)

