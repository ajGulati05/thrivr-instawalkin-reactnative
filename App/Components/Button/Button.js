import React, { Component } from "react";
import { Colors, Fonts } from '../../Theme';
import { debounce } from 'lodash'
import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';
import {Images} from '../../Theme'

const borderRadius = totalSize(4);

export default function Button(props) {
  const caption = props.caption && props.caption.toUpperCase();
  let icon;
  if (props.icon) {
    icon = (
      <Image resizeMode="contain" source={props.icon} style={styles.icon} />
    );
  }

  let content;
if(props.applepay||props.googlepay){
content=(
  <Image resizeMode="contain" source={Images.apple_book} style={{width: width(80)}}  />
  );
}

  else{
  if (props.bordered) {
    const borderedStyle = [
      styles.button,
      props.small && styles.buttonSmall,
      styles.border,
      props.primary && {
        borderColor: Colors.brandPrimary,
      },
      props.secondary && {
        borderColor: Colors.brandSecondary,
      },
      props.bgColor && {
        borderColor: props.bgColor,
      },
      props.rounded && styles.rounded,
    ];
    const textStyle = [
      styles.caption,
      props.small && styles.captionSmall,
      styles.secondaryCaption,
      icon && styles.captionWithIcon,
      props.primary && {
        color: Colors.brandPrimary,
      },
      props.secondary && {
        color: Colors.brandSecondary,
      },
      props.bgColor && {
        color: props.bgColor,
      },
      props.textColor && {
        color: props.textColor,
      },
    ];

    content = (
      <View style={borderedStyle}>
        {icon && <View>{icon}</View>}
        {props.loading && <ActivityIndicator color="white" />}
        {!props.loading && props.caption && (
          <Text style={textStyle}>{caption}</Text>
        )}
        {props.children && props.children}
      </View>
    );
  } else {
    const isPrimary = props.primary || (!props.primary && !props.secondary);
    let gradientArray =
      props.bgGradientStart && props.bgGradientEnd
        ? [props.bgGradientStart, props.bgGradientEnd]
        : undefined;

    if (!gradientArray) {
      gradientArray = isPrimary
        ? [Colors.brandPrimary, Colors.brandSecondary]
        : [Colors.brandPrimary, Colors.brandSecondary];
    }

    if (props.bgColor) {
      gradientArray = [props.bgColor, props.bgColor];
    }

    content = (

    <View style={{flex:1, alignItems:  'center',  justifyContent:'center'}}>
       {props.loading&&props.loading ? (
            <ActivityIndicator />
          ) : (    
      <LinearGradient
        start={{ x: 0.5, y: 1 }}
        end={{ x: 1, y: 1 }}
        colors={gradientArray}
        style={[
          styles.button,
          props.small && styles.buttonSmall,
          styles.primaryButton,
          props.rounded && { borderRadius },
          props.action && styles.action,
        ]}
      >
        {icon && <View>{icon}</View>}
        {props.loading && <ActivityIndicator color="white" />}
        {!props.loading && props.caption && (
          <Text
            style={[
              styles.caption,
              props.small && styles.captionSmall,
              icon && styles.captionWithIcon,
              styles.primaryCaption,
            ]}
          >
            {caption}
          </Text>
        )}
        {!props.loading && props.children && props.children}
      </LinearGradient>)}
       </View>  
    );
  }
}

  return (
    <TouchableOpacity
      accessibilityTraits="button"
      onPress={props.onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        props.small && styles.containerSmall,
        props.large && styles.containerLarge,
        props.style,
      ]}
    >
      {content}
    </TouchableOpacity>
  );
}

const HEIGHT = height(4);
const HEIGHT_SMALL = height(3);
const HEIGHT_LARGE = height(5);

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    // borderWidth: 1 / PixelRatio.get(),
  },
  containerSmall: {
    height: HEIGHT_SMALL,
  },
  containerLarge: {
    height: HEIGHT_LARGE,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width(3),
    width:width(80)
  },
  buttonSmall: {
    paddingHorizontal: width(2),
    width:width(25)
  },
  border: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  primaryButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  rounded: {
    borderRadius: HEIGHT_LARGE / 2,
  },
  icon: {
    maxHeight: HEIGHT - 20,
    maxWidth: HEIGHT - 20,
  },
  caption: {
    letterSpacing: 1,
    fontSize: 15,
    fontFamily: Fonts.family.primaryBold,
  },
  captionSmall: {
    fontSize: 12,
    fontWeight: '500',
  },
  captionWithIcon: {
    marginLeft: 12,
  },
  primaryCaption: {
    color: 'white',
  },
  secondaryCaption: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  action: {
    borderRadius: 20,
    height: HEIGHT,
    width: HEIGHT,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

