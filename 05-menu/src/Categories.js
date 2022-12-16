import React from 'react';

const Categories = ({ filterItems, categories }) => {

  return (
    <div className='btn-container'>
      { categories.map((category) => {
        return (
          <button className='filter-btn' onClick={() => filterItems(category)} type="button">
            {category}
          </button>
        )
      })
      }
    </div>
  )
};

export default Categories;
