import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    NOM: '',
    PRÉNOM: '',
    USER_ID: '',
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://your-backend-api-url.com/profile');
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 flex-grow flex justify-center items-center">
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-6 max-w-md w-full">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-14 h-14 mb-3 rounded-full shadow-lg"
            src="/profile11.jpeg"
            alt="User Profile"
          />
          <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-8">User Information</h2>
          <form action="#">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="first_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">NOM</label>
                <input
                  type="text"
                  id="first_name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  value={profileData.NOM}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="last_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">PRÉNOM</label>
                <input
                  type="text"
                  id="last_name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  value={profileData.PRÉNOM}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">USER_ID</label>
                <input
                  type="text"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  value={profileData.USER_ID}
                  readOnly
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;




