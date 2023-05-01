import stripe from 'tipsi-stripe'
import { Config } from 'App/Config'
stripe.setOptions({
  publishableKey: Config.STRIPE_PUBLISHABLE_KEY,
// merchantId: 'merchant.com.instawalkin.instawalkin', // Optional
  //androidPayMode: 'test', // Android only

})




async function initiateStripeTokenWithCard(card) {
  // Simulate an error 50% of the time just for testing purposes
console.log("making apple pay");
console.log(JSON.stringify(card));

 const token= await stripe.createTokenWithCard(card)
 return token
}


function customdeviceSupportsNativePay(){
	return stripe.deviceSupportsNativePay();
}
function customcanMakeNativePayPayments(){
	return stripe.canMakeNativePayPayments()
}

async function customPaymentRequestWithApplePay(){
const items = [{
  label: 'Massage',
  amount: '50.00',
  type:'pending'
}]

try{
const token = await stripe.paymentRequestWithApplePay(items)
  // Client specific code
  // api.sendTokenToBackend(token)
console.log("making apple pay");
console.log(JSON.stringify(token));

  // You should complete the operation by calling
  stripe.completeApplePayRequest()
  return token
} catch (error) {
  // Or cancel if an error occurred
   stripe.cancelApplePayRequest()
console.log("cancelled");
}


}

export const stripeService = {
  initiateStripeTokenWithCard,
  customdeviceSupportsNativePay,
  customcanMakeNativePayPayments,
  customPaymentRequestWithApplePay
  
}