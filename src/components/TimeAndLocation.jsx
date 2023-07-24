import React from 'react'

function TimeAndLocation() {
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center'>
            <p className='text-white fw-light'>
                Saturday, 8 July 2023 | Local time : 8:00 PM
            </p>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
          <p className='city-name text-white fw-medium'>Mumbai</p>
        </div>
    </div>
  )
}

export default TimeAndLocation