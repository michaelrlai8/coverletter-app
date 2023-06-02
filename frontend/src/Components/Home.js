import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className='mb-10 mt-28 text-center text-7xl font-black'>
        Cover letters made easy.
      </h1>
      <div className='mb-20 text-center text-gray-600'>
        Provide a few basic details and get a cover letter to help land your
        next job.
      </div>
      <div className='flex justify-center'>
        <Link to='/create'>
          <Button className='px-8 py-2 text-lg'>Get started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
