import React, { useRef } from 'react'
import { useState } from 'react'
import './search.css'
import '../../index.css'

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const inputRef = useRef(null)
  const searchCity = () => {
    alert(searchInput)
    setSearchInput('')
  }
  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchCity()
    }
  }
  return (
    <>
      <input
        className='search-bar'
        type='search'
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Search City'
        value={searchInput}
      ></input>
      <button type='button' className='btn' onClick={searchCity}>
        Search
      </button>
    </>
  )
}

export { Search }
