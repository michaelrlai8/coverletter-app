import React from 'react';
import Button from '../components/Button';

const Create = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let inputData = Object.fromEntries(data);
    e.target.reset();

    console.log(inputData);
  };

  const formQuestions = [
    {
      type: 'title',
      description: 'Personal Information',
      name: 'user',
    },
    {
      type: 'question',
      description: 'What is your current position?',
      name: 'userPosition',
    },
    {
      type: 'question',
      description: 'How many years of experience do you have in your industry?',
      name: 'userYears',
    },
    {
      type: 'title',
      description: 'Prospective Job Information',
      name: 'prospective',
    },
    {
      type: 'question',
      description: 'What company are you applying for?',
      name: 'prospectiveCompany',
    },
    {
      type: 'question',
      description: 'What position are you applying for?',
      name: 'prospectivePosition',
    },
  ];

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='mx-auto my-5 flex max-w-2xl flex-col rounded-md border border-gray-100 px-20 py-12 text-sm text-gray-500
        '
      >
        {formQuestions.map((entry) =>
          entry.type === 'title' ? (
            <div
              key={entry.name}
              className='mb-6 mt-4 text-center text-2xl font-medium text-black'
            >
              {entry.description}
            </div>
          ) : (
            <div key={entry.name} className='flex flex-col'>
              <label className='mb-2'>{entry.description}</label>
              <input
                type='text'
                name={entry.name}
                className='mb-8 rounded-md border border-solid border-gray-300 bg-white p-2 focus:text-black focus:outline-none'
              />
            </div>
          )
        )}
        <Button className='p-2'>Submit</Button>
      </form>
    </div>
  );
};

export default Create;

/*

        <div className='mb-4 text-center text-3xl font-medium text-black'>
          Prospective Job Information
        </div>
        <label htmlFor='' className={labelStyle}>
          What company are you applying for?
        </label>
        <input type='text' name='futureCompany' className={inputStyle} />
        <label htmlFor='' className={labelStyle}>
          What position are you applying for?
        </label>
        <input type='text' name='futurePosition' className={inputStyle} />
        <div className='mb-4 text-center text-3xl font-medium text-black'>
          Your Information
        </div>
        <label htmlFor='' className={labelStyle}>
          What is your current position?
        </label>
        <input type='text' name='currentPosition' className={inputStyle} />
        <label htmlFor='' className={labelStyle}>
          How many years of experience do you have in the industry?
        </label>
        <input type='text' name='industryYears' className={inputStyle} />

        */
