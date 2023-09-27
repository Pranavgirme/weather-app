import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center'>
            <p className='text-white fw-light'>
                {formatToLocalTime(dt, timezone)}
            </p>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <p className='city-name text-white fw-medium'>{`${name}, ${country}`}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation