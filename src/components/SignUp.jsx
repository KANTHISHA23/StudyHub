import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const allData = {};

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: 'Male',
    phoneNo: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
  };

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      window.alert('Passwords do not match');
      return;
    }

    setIsLoggedIn(true);
    window.alert('Account Created');

    // updating data in local storage
    const accountData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      gender: formData.gender,
      phoneNo: formData.phoneNo,
      city: formData.city,
      email: formData.email,
      password: formData.password,
    };

    const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];
    existingUsers.push(accountData);
    localStorage.setItem('userData', JSON.stringify(existingUsers));
    navigate('/userdetails', { state: { accountData } });
  }

  return (
    <div className='flex justify-center items-center'>
      <form
        onSubmit={submitHandler}
        className='flex flex-wrap justify-center items-center text-2xl bg-slate-200 w-[35rem] h-[32rem] p-3 mt-[4rem] gap-7'
      >
        <label>
          <p>
            First Name<sup className='text-red-600'>*</sup>
          </p>
          <input
            required
            type='text'
            name='firstName'
            onChange={changeHandler}
            placeholder='Enter First Name'
            value={formData.firstName}
            className='text-black text-xl w-1/1 h-10 '
          />
        </label>

        <label>
          <p>
            Last Name<sup className='text-red-600'>*</sup>
          </p>
          <input
            required
            type='text'
            name='lastName'
            onChange={changeHandler}
            placeholder='Enter Last Name'
            value={formData.lastName}
            className='text-black text-xl w-1/1 h-10'
          />
        </label>

        {/* Gender */}
        <label>
          <p>
            Gender<sup className='text-red-600'>*</sup>
          </p>
          <select
            className='text-black text-xl w-[14rem] h-10'
            id={formData.gender}
            onChange={handleGenderChange}
          >
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Others'>Others</option>
          </select>
        </label>

        {/* phone number */}
        <label>
          <p>
            Phone Number<sup className='text-red-600'>*</sup>
          </p>
          <input
            required
            type='text'
            name='phoneNo'
            onChange={changeHandler}
            placeholder='Enter Phone Number'
            value={formData.phoneNo}
            className='text-black text-xl w-1/1 h-10'
          />
        </label>

        {/* city Add */}
        <label>
          <p>
            City<sup className='text-red-600'>*</sup>
          </p>
          <input
            required
            type='city'
            name='city'
            onChange={changeHandler}
            placeholder='Enter City '
            value={formData.city}
            className='text-black text-xl w-1/1 h-10 '
          />
        </label>

        {/* email Add */}
        <label>
          <p>
            Email Address<sup className='text-red-600'>*</sup>
          </p>
          <input
            required
            type='email'
            name='email'
            onChange={changeHandler}
            placeholder='Enter Email Address '
            value={formData.email}
            className='text-black text-xl w-1/1 h-10 '
          />
        </label>

        {/* createPassword and Confirm Password */}

        <label className='relative'>
          <p>
            Create Password<sup className='text-red-600'>*</sup>
          </p>
          <input
            required
            type={showPassword ? 'text' : 'password'}
            name='password'
            onChange={changeHandler}
            placeholder='Enter Password'
            value={formData.password}
            className='text-black text-xl w-1/1 h-10'
          />
          <span
            className='absolute right-[1rem] top-[2.6rem]'
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <label className='relative'>
          <p>
            Confirm Password<sup className='text-red-600'>*</sup>
          </p>
          <input
            required
            type={showPassword ? 'text' : 'password'}
            name='confirmPassword'
            onChange={changeHandler}
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            className='text-black text-xl w-1/1 h-10'
          />
          <span
            className='absolute right-[1rem] top-[2.6rem]'
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
        <button className='bg-amber-400 rounded-md p-3 text-white '>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
