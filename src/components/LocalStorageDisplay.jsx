import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const LocalStorageDisplay = () => {
  const [localStorageData, setLocalStorageData] = useState(null);

  useEffect(() => {
    // Function to get all key-value pairs from localStorage
    const getAllKeyValuePairs = () => {
      const keyValuePairs = {};

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        keyValuePairs[key] = value;
      }

      return keyValuePairs;
    };

    // Get all key-value pairs when the component mounts
    const allData = getAllKeyValuePairs();
    setLocalStorageData(allData);
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <h1 className='text-2xl font-bold m-10'>OUR VIEWERS</h1>
      {localStorageData ? (
        <ul className='bg-slate-100 w-[80rem] h-auto ml-10 flex flex-wrap justify-start'>
          {Object.entries(localStorageData).map(([key, value]) => (
            <li key={key} className='m-10 flex gap-5 items-center'>
              <FontAwesomeIcon
                icon={faUser}
                className='text-teal-600 h-7 w-7'
              />
              <span className='bg-amber-200 p-5 rounded-lg'>
                <li>
                  <span>Name:</span>
                  <span>
                    {JSON.parse(value).firstName} {JSON.parse(value).lastName}
                  </span>
                </li>
                <li>
                  <span>Gender:</span>
                  <span>{JSON.parse(value).gender}</span>
                </li>
                <li>
                  <span>Phone No:</span>
                  <span>{JSON.parse(value).phoneNo}</span>
                </li>
                <li>
                  <span>City:</span>
                  <span>{JSON.parse(value).city}</span>
                </li>
                <li>
                  <span>Email:</span>
                  <span>{JSON.parse(value).email}</span>
                </li>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data found in local storage.</p>
      )}
    </div>
  );
};

export default LocalStorageDisplay;
