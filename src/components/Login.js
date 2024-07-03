import axios from 'axios';
import { Alert, Card, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [nfcId, setNfcId] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/authenticate', { nfcId });
      if (response.data.success) {
        setIsLoggedIn(true);
        navigate('/dashboard');
      } else {
        setShowAlert(true);
        setMessage('Please provide the correct Code PIN.');
      }
    } catch (error) {
      setShowAlert(true);
      setMessage('Please provide the correct Code PIN.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">NFC Authentication</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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
        {showAlert && (
          <Alert
            color="failure"
            className="mt-4"
            onDismiss={() => setShowAlert(false)}
          >
            <span>
              <span className="font-medium">Error!</span> {message}
            </span>
          </Alert>
        )}
      </Card>
    </div>
  );
};

export default Login;





