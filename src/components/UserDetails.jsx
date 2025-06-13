import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
  const location = useLocation();
  const formData =
    location.state?.accountData || JSON.parse(localStorage.getItem('userData')); // safely extract the passed data

  if (!formData) {
    return (
      <div className='text-white text-xl text-center mt-10'>
        No user data found.
      </div>
    );
  }
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-[30rem] h-auto text-black bg-amber-300 p-5 mb-[5rem] rounded-lg'>
        <h2 className='text-2xl font-bold flex justify-center'>MY PROFILE</h2>
        <div className='flex gap-10 justify-center items-center p-5'>
          {formData && formData.gender === 'Female' ? (
            <img
              src='https://i.pinimg.com/236x/1c/c8/c6/1cc8c601e99af7be3841d284af8c9a26.jpg'
              alt='Female avatar'
              className='rounded-full h-[7rem] w-[7rem]'
            />
          ) : (
            <img
              src='https://img.freepik.com/premium-vector/cute-smiling-boy-avatar-flat-style-vector-illustration_710508-1241.jpg'
              alt='Male avatar'
              className='rounded-full h-[7rem] w-[7rem]'
            />
          )}

          <div className='text-lg flex flex-col'>
            <div className='mb-2 flex gap-2'>
              <p className='font-semibold'>Firstname:</p>
              <p className='text-md'>{formData.firstName}</p>
            </div>
            <div className='mb-2 flex gap-2'>
              <p className='font-semibold'>Lastname:</p>
              <p className='text-md'>{formData.lastName}</p>
            </div>
            <div className='mb-2 flex gap-2'>
              <p className='font-semibold'>Gender:</p>
              <p className='text-md'>{formData.gender}</p>
            </div>
            <div className='mb-2 flex gap-2'>
              <p className='font-semibold'>Phone No:</p>
              <p className='text-md'>{formData.phoneNo}</p>
            </div>
            <div className='mb-2 flex gap-2'>
              <p className='font-semibold'>City:</p>
              <p className='text-md'>{formData.city}</p>
            </div>
            <div className='mb-2 flex gap-2'>
              <p className='font-semibold'>Email:</p>
              <p className='text-md'>{formData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
