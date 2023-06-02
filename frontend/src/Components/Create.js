import React from 'react';
import Button from './Button';

const Create = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let inputData = Object.fromEntries(data);
    e.target.reset();

    console.log(inputData);
  };

  const labelStyle = 'mb-2';
  const inputStyle =
    'mb-8 rounded-md border border-solid border-gray-300 bg-white p-2 focus:text-black focus:outline-none';

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='mx-auto my-5 flex max-w-2xl flex-col rounded-md p-20 text-sm text-gray-500 shadow-xl'
      >
        <div className='mb-4 text-center text-xl font-medium text-black'>
          New Cover Letter
        </div>
        <label htmlFor='' className={labelStyle}>
          What company are you applying for?
        </label>
        <input type='text' name='futureCompany' className={inputStyle} />
        <label htmlFor='' className={labelStyle}>
          What role are you applying for?
        </label>
        <input type='text' name='futureRole' className={inputStyle} />
        <label htmlFor='' className={labelStyle}>
          What is your current role?
        </label>
        <input type='text' name='currentRole' className={inputStyle} />
        <label htmlFor='' className={labelStyle}>
          How many years of experience do you have in the industry?
        </label>
        <input type='text' name='industryYears' className={inputStyle} />
        <Button className='p-2'>Submit</Button>
      </form>
    </div>
  );
};

export default Create;
