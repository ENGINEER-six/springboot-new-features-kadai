const stripe = Stripe('pk_test_51SHJBwKaPXAGumkonFhxvqnmJsHA5R12HvrWr2mpiEgucWbsrLK6NaYtJWtVdVp1IgUmDFGbFtB5FqoNomp1VQTI00dLoOn0Xb');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});