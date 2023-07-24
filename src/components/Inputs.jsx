import React from 'react'
import { UilSearch, UilLocationPoint} from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='d-flex flex-row justify-content-center my-3'>
      <div className='col-7 d-flex flex-row justify-content-center align-items-center'>
        <input type="text" placeholder='search for city...' className="form-control fw-light p-2 w-100 shadow lowercase-placeholder text-capitalize"/>
        <span size={25} className="icon"><UilSearch /></span>
        <span size={25} className="icon"><UilLocationPoint /></span>
      </div>
      <div className='col-3 d-flex flex-row justify-content-center align-items-center'>
        <button name="metric" className='text-white converter fw-light'>°C</button>
        <p className='text-white gap'>|</p>
        <button name="imperical" className='text-white converter fw-light'>°F</button>
      </div>
    </div>
  )
}

export default Inputs