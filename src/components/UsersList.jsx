import React from 'react';

const UsersList = () => {
  // Get all users from localStorage (or empty array if nothing exists)
  const allData = JSON.parse(localStorage.getItem('userData')) || [];

  return (
    <div className='w-full min-h-screen bg-gray-100 flex flex-wrap justify-center items-start p-10 gap-6'>
      {allData.length === 0 ? (
        <p className='text-xl text-red-600'>No users found.</p>
      ) : (
        allData.map((user, index) => (
          <div
            key={index}
            className='bg-white shadow-md rounded-lg p-6 w-[20rem] text-black border border-gray-300'
          >
            <h3 className='text-lg font-bold mb-2 text-center'>
              {user.firstName} {user.lastName}
            </h3>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Phone No:</strong> {user.phoneNo}
            </p>
            <p>
              <strong>City:</strong> {user.city}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default UsersList;
