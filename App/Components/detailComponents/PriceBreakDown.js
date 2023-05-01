import React, { Component } from "react";
import {width, height, totalSize} from 'react-native-dimension';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import { PropTypes } from 'prop-types' 
import { connect } from 'react-redux'
import {Fonts,Colors} from '../../Theme'
import moment from 'moment';
import 'moment-timezone';
import NavigationService from 'App/Services/NavigationService'
import FilterActions from 'App/Stores/Filter/Actions'
import DetailText from './DetailText'
import Dinero from 'dinero.js'
 const PriceBreakDowns = ({ ...rest }) => {

 const {price,
        tax_percent,
        taxlabel,
        coupon_amount,
        total_amount,tip_amount} = rest.appstate.booking_payload
        
var priceCents=parseFloat(price)*100;

var calculatedTax=(parseFloat(tax_percent)/100)*parseFloat(price);

var taxAmountCents=calculatedTax*100;

var priceToShow=Dinero({amount: Math.round(priceCents) ,currency: 'CAD'})

var taxToShow=Dinero({amount: Math.round(taxAmountCents) ,currency: 'CAD'})


var totalAmountToShow=priceToShow
.add(taxToShow);
var tipAmountToShow=Dinero({amount: 0 ,currency: 'CAD'});
if(tip_amount!=null && tip_amount>0){
var tipAmountCents=parseFloat(tip_amount)*100;
 tipAmountToShow=Dinero({amount: Math.round(tipAmountCents) ,currency: 'CAD'})
 totalAmountToShow=totalAmountToShow.add(tipAmountToShow);
}
var couponAmountToShow=Dinero({amount: 0 ,currency: 'CAD'});
if(coupon_amount!=null && coupon_amount>0){
var couponAmountCents=parseFloat(coupon_amount)*100;
 couponAmountToShow=Dinero({amount: Math.round(couponAmountCents) ,currency: 'CAD'})
 totalAmountToShow=totalAmountToShow.subtract(couponAmountToShow);
}

console.log("totalAmountToShow"+totalAmountToShow)
  return (
<View style={{display: 'flex',justifyContent:'space-around', flexDirection:  'column' }}>
 
 <DetailText  iconname='receipt' icontype='materialicon' iconcolor={Colors.brandPrimary} text={'Price Breakdown:'} />
 <DetailText smallText normal text={'Amount:'} value={priceToShow.toFormat('$0.00')}/>
 <DetailText smallText normal  text={taxlabel} value={taxToShow.toFormat('$0.00')}/>
  {tip_amount&&<DetailText smallText normal  text={'Tip Amount:'} value={tipAmountToShow.toFormat('$0.00')}/>}
  {coupon_amount&&<DetailText smallText normal  text={'Discount:'} value={couponAmountToShow.toFormat('$0.00')}/>}
 <DetailText smallText normal  text={'Total:'} value={totalAmountToShow.toFormat('$0.00')}/>
{rest.paid&&<DetailText smallText normal  text={'Paid by:'} value={'doesnt'}/>}

</View>  
  );
};






const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
})

export  default PriceBreakDown = connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceBreakDowns)

