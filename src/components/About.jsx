import React from 'react';
import tutor2 from '../assets/tutor2.jpeg';

const About = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='bg-teal-600 w-full min-h-screen flex'>
        <div className='text-white h-1/1 w-1/2 mt-[15rem] ml-[5rem]'>
          <p className='text-4xl font-bold'>
            A platform for the next generation of learners!
          </p>
          <p className='text-xl'>
            Place for imparting education to next-generation students from top
            experts.
          </p>
        </div>
        <div className='relative w-1/2 h-1/1'>
          <img
            src='https://tse3.explicit.bing.net/th?id=OIP.k7-MFpLVPUotrqX47_8VvwHaHa&pid=Api&P=0&h=180'
            alt='tutor1'
            className='absolute w-[20rem] h-[18rem] top-[2rem] right-[25rem]'
          />
          <img
            src={tutor2}
            alt='tutor2'
            className='absolute w-[20rem] h-[18rem] top-[2rem] right-[8rem]'
          />
          <img
            src='https://yt3.ggpht.com/ytc/AMLnZu_89sIPaT2QGxunLr3eSU7c6Hxz1_vLoGaIIPrT=s900-c-k-c0x00ffffff-no-rj'
            alt='tutor3'
            className='absolute w-[18rem] h-[18rem] top-[19rem] right-[27rem]'
          />
          <img
            src='https://tse2.mm.bing.net/th?id=OIP.NNSezxyrrMqGiJGTqd2vOQAAAA&pid=Api&P=0&h=180'
            alt='tutor4'
            className='absolute w-[20rem] h-[18rem] top-[19rem] right-[8rem]'
          />
        </div>
      </div>
      <div className='w-full'>
        <p className='flex justify-center text-2xl font-bold pt-10'>
          About Study Hub: Empowering You with the Latest Technologies{' '}
        </p>
        <p className='text-md p-10 mx-30'>
          Welcome to Study Hub, your go-to platform for mastering the latest
          technologies and staying ahead in the dynamic world of learning. At
          Study Hub, we believe in the transformative power of education and its
          ability to open doors, empower individuals, and shape a brighter
          future.
        </p>
        <p className='flex justify-center text-2xl font-bold'>
          Our Mission: Knowledge, Innovation, and Growth
        </p>
        <p className='text-md p-10 mx-30'>
          Our mission is clear—to provide a comprehensive and accessible
          learning environment where individuals can acquire skills in
          cutting-edge technologies. Whether you're a seasoned professional
          looking to upskill or a curious learner embarking on your educational
          journey, Study Hub is designed to meet your diverse learning
          needs.Embark on a learning journey that goes beyond textbooks and
          traditional classrooms. Explore our diverse range of courses, each
          crafted to empower you with the skills and knowledge needed to thrive
          in today's tech-driven landscape.At Study Hub, we are committed to
          your success. Join us, and let's build a future where learning knows
          no bounds.
        </p>
      </div>
    </div>
  );
};
export default About;
