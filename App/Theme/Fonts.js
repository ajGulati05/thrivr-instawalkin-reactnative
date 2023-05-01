import {width, height, totalSize} from 'react-native-dimension';
const size = {
  h1: width(4.8),
  h2: width(3.4),
  h3: width(3.0),
  h1point5: width(3.8),
  input: width(1.8),

  regular: width(1.7),
  medium: width(1.4),
  small: width(1.2),
  minisize:width(1.5)
}
const family = {
 
  primaryLight: 'HindGuntur-Light',
  primaryRegular: 'HindGuntur-Regular',
  primaryBold: 'HindGuntur-Bold',
  primarySemiBold: 'HindGuntur-SemiBold',

}
const style = {
  h1: {
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2
  },
  h3: {
    fontSize: size.h3,
  },
  normal: {
    fontSize: size.regular,
  },
  h1point5:{
     fontSize: size.h1point5
  }

}



export default {
  size,
  family,
  style
}
