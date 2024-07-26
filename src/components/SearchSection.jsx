import React from 'react'
import './SearchSection.scss'
import ButtonSearchSection from './ButtonSearchSection'

const SearchSection = () => {
  return (
    <div className='searchSectionContainer'>
        <h1 className='titleSearchSection'>PhotoSearch</h1>
        <span className='subtitleSearchSection'>Find your best photograper in the city</span>
        <ButtonSearchSection/>
    </div>
  )
}

export default SearchSection