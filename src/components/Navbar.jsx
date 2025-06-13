import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='bg-white flex items-center w-full h-20 shadow-lg'>
      <Link to='/'>
        <img
          src='https://pbs.twimg.com/media/E-BuxtzWQAEWzxD.jpg'
          alt='Logo'
          loading='lazy'
          width={120}
          height={70}
          className='ml-[20rem]'
        />
      </Link>

      <ul className='flex gap-10 items-center justify-center ml-[10rem]'>
        {
          <li className='hover:text-amber-400'>
            {/* isLoggedIn && */}
            <Link to='/'>HOME</Link>
          </li>
        }
        <li className='hover:text-amber-400'>
          <Link to='/about'>ABOUT</Link>
        </li>
        <li className='hover:text-amber-400'>
          <Link to='/userslist'>USERS LIST</Link>
        </li>
      </ul>

      {/* Login - SignUp - UserDetail - Logout */}
      <div className='flex gap-10 items-center mx-[10rem]'>
        {!isLoggedIn && (
          <Link to='/login'>
            <button className='bg-amber-400 rounded-md p-3 px-10 text-white flex gap-2'>
              Login
              <span>
                <FontAwesomeIcon icon={faArrowRightToBracket} />
              </span>
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to='/signup'>
            <button className='border-solid border-2 border-amber-400 p-2 px-10 rounded-md'>
              SignUp
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to='/login'>
            <button
              className='border-solid border-2 border-amber-400 p-2 px-10 rounded-md'
              onClick={() => setIsLoggedIn(false)}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to='/userdetails'>
            <button>User Details</button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
