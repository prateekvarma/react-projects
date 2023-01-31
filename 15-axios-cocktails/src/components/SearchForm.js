import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext() //extracting this function in order to invoke it in parent from child.

  return (
    <div>
      <h2>search form component</h2>
    </div>
  )
}

export default SearchForm
