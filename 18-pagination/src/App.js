import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) {
      return;
    }

    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const prevClick = () => {
    setPage((prevState) => {
      let prevPage = prevState - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const nextClick = () => {
    setPage((prevState) => {
      let nextPage = prevState + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevClick}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  onClick={() => handlePage(index)}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  key={index}
                >
                  {index + 1}
                </button>
              );
            })}
            <button onClick={nextClick} className='next-btn'>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
