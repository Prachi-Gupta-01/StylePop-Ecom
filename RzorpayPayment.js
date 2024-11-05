// RazorpayPayment.js
import React from 'react';
import Razorpay from 'razorpay';

const RazorpayPayment = () => {
  const handlePayment = async () => {
 
    const response = await fetch('http://localhost:5000/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 50000 }), // Amount in paise
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const orderData = await response.json();
    console.log('Order data:', orderData);
   
    // Step 1: Set up Razorpay options
    const options = {
      key: 'rzp_test_eYNQfs9koLGuW9', // Replace with your Razorpay Key ID
      amount: orderData.amount, // Amount in paise (e.g., 50000 = ₹500)
      currency: orderData.currency,
      name: 'Prachi Gupta',
      description: 'Test Transaction',
      image: 'https://example.com/logo.png', // Optional logo URL
      order_id: orderData.id, // Use your order ID here
      handler: (response) => {
        // Handle successful payment here
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };

    // Step 2: Create a Razorpay instance and open the checkout
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div>
      <button onClick={handlePayment} style={{ padding: '10px', fontSize: '16px' }}>
        Pay Now
      </button>
    </div>
  );
};

export default RazorpayPayment;
