import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] =  useState([]);

  const handleSubmit = (e) => {
    e.preventDeafult();
    console.log('Handle Submit');
  }
  
  return (
  <section className="section-center">
    <h3>tired of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs:</label>
      <input type="number" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
      <button type="submit" className='btn'>Generate</button>
    </form>
    <article className='lorem-text'>
      {/* <p>generated text goes here</p> */}
    </article>
  </section>
    )
}

export default App;
