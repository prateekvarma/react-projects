import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <section className='quiz quiz-ball'>
      <form className='setup-form'>
        <h2>setup quiz</h2>
        {/* amount */}
        <div className='form-control'>
          <label htmlFor='amount'>number of questions</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={quiz.amount}
            onChange={handleChange}
            className='form-input'
            min={1}
            max={50}
          />
        </div>
        {error && <p className='error'>can't generate questions, please try different options</p>}
        <button type='submit' onClick={handleSubmit} className='submit-btn'>start</button>
      </form>
    </section>
  );
};

export default SetupForm;
