import React, { useState } from 'react';
import { useAppSelector } from "../../redux/hooks/Hooks";
import { RootState } from "../../redux/app/Store";
import axios from "axios";
import visaLogo from '../../assets/visa.png'; // Ensure you have these images in your assets folder
import mastercardLogo from '../../assets/mastercard.png';
import maestroLogo from '../../assets/maestro.png';

const CreditCardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expiry, setExpiry] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [name, setName] = useState<string>('');
  const orderDetails = useAppSelector((state: RootState) => state.orderSummary);
  const user = useAppSelector((state: RootState) => state.auth);


  // const extractFoxyPayload = () => {
  //   const { orderItems } = orderDetails;

  //   return orderItems.map(item => ({
  //     name: item.productName,
  //     price: item.price.toFixed(2), 
  //     quantity: item.quantity,
  //     code: item.productId,
  //     options: {
  //       size: item.productSize,
  //       color: item.productColor
  //     }
  //   }));
  // };


  // const handlePayment = async () => {
    
  //   }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const cartItems = extractFoxyPayload();
    // const storeDomain = import.meta.env.VITE_FOXY_STORE_DOMAIN;
    // console.log('Store Domain:', storeDomain);

    // if (!storeDomain) {
    //   console.error('Environment variable VITE_FOXY_STORE_DOMAIN is not defined');
    //   return;
    // }



    // try {
    //   const response = await axios.post(`https://${storeDomain}/cart`, {

    //     cartItems,
    //   }, {
    //           headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${import.meta.env.VITE_FOXY_API_KEY}`,
    //             'FOXY-API-VERSION': `1`,
    //           }
    //         });
    //   console.log('Response:', response.data);
    // } catch (error) {
    //   console.error('Error adding to cart:', error);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 mb-8 p-6 bg-white shadow-md rounded-lg">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold mb-2">Payment Details</h2>
        <div className="flex justify-center space-x-4">
          <img src={visaLogo} alt="Visa" className="h-8" />
          <img src={mastercardLogo} alt="Mastercard" className="h-8" />
          <img src={maestroLogo} alt="Maestro" className="h-8" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="1234 5678 9012 3456"
          maxLength={16}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
        <input
          type="text"
          id="expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="MM/YY"
          maxLength={5}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="123"
          maxLength={3}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name on Card</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="John Doe"
          required
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
    </form>
  );
};

export default CreditCardForm;
