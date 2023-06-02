import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className='mb-10 mt-28 text-center text-7xl font-black'>
        Cover letters made easy.
      </h1>
      <div className='mb-20 text-center text-gray-600'>
        Write a cover letter to land your dream job.
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
