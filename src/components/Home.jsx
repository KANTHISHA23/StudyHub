import React from 'react';
import Card from './Card';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const Home = () => {
  // const courseRef= useRef();

  // function handleScroll(){
  //   courseRef.current.scrollIntoView({behavior:'smooth'})
  // }

  return (
    <div className='flex flex-col justify-center relative w-screen max-w-max'>
      <div className='flex h-screen'>
        <div className='text-black typewriter ml-20 mt-40 w-1/2'>
          <p className='mt-20 mr-20 text-5xl font-bold text-teal-600 inline-block animate-typing'>
            Welcome to StudyHub
          </p>
          <br />
          <p className='text-3xl font-bold text-slate-500 m-3'>
            Your Ultimate Learning Destination.
          </p>
          <button className='bg-amber-400 rounded-md p-3 text-white h-30 w-30 m-3 cursor-pointer'>
            View Courses
          </button>
        </div>
        <div className='w-1/2 mt-20'>
          <img
            src='https://cdn.thecodehelp.in/ggudduf7qmr7yvjwtcs1_cd7567153f.svg'
            alt='img1'
            className='img1'
          />
          <img src={img2} alt='img2' className='img2' />
          <img src={img3} alt='img3' className='img3' />
        </div>
      </div>

      <p className='text-3xl font-bold text-teal-700 flex justify-center'>
        What would you like to learn?
      </p>
      <div className='w-screen flex flex-wrap m-5'>
        <Card className='min-h-min w-[10rem]' />
      </div>
    </div>
  );
};

export default Home;
