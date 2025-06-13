import React from 'react';
import SignUp from './SignUp';
import Login from './Login';

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  console.log('ye rha mera form type');
  console.log(formtype);
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formtype === 'signup' ? (
          <SignUp setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div>
        <img
          src='https://images.pond5.com/antique-seamless-background-square-check-illustration-088644116_iconl.jpeg'
          alt='Pattern'
          width={558}
          height={504}
          loading='lazy'
        />

        <img
          src='https://img.freepik.com/premium-photo/online-education-smiling-black-female-student-with-backpack-headphones-holding-notebooks_116547-21201.jpg'
          alt='Students'
          width={558}
          height={490}
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default Template;
