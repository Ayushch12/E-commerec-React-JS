// src/components/Login.js
import axios from 'axios';
import { Card, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

const Login = () => {
  const [nfcId, setNfcId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/authenticate', { nfcId });
      if (response.data.success) {
        setMessage('Login successful!');
      } else {
        setMessage('Login failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-1/3">
        <h2 className="text-2xl font-bold text-center">NFC Authentication</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 block">
            <Label htmlFor="nfcId" value="" />
            <TextInput
              id="nfcId"
              type="text"
              placeholder="NFC ID"
              value={nfcId}
              onChange={(e) => setNfcId(e.target.value)}
              required={true}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-2 text-center">{message}</p>}
      </Card>
    </div>
  );
};

export default Login;

