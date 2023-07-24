import React from 'react'

function Forecast() {
  return (
    <div className='px-5'>
        <div className='d-flex justify-content-start align-items-center mt-3'>
          <p className='text-white fw-medium text-uppercase mb-0'>daily forecast</p>
        </div>
        <hr className='mt-1 text-white'/>

        <div className='d-flex flex-row align-items-center justify-content-between text-white'>
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className='fw-light mb-0'>
              Sun
            </p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='forecast-icon' />
            <p className='fw-medium'>22°</p>
          </div>

          <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className='fw-light mb-0'>
              Sun
            </p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='forecast-icon' />
            <p className='fw-medium'>22°</p>
          </div>

          <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className='fw-light mb-0'>
              Sun
            </p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='forecast-icon' />
            <p className='fw-medium'>22°</p>
          </div>

          <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className='fw-light mb-0'>
              Sun
            </p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='forecast-icon' />
            <p className='fw-medium'>22°</p>
          </div>

          <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className='fw-light mb-0'>
              Sun
            </p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='forecast-icon' />
            <p className='fw-medium'>22°</p>
          </div>

          <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className='fw-light mb-0'>
              Sun
            </p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='forecast-icon' />
            <p className='fw-medium'>22°</p>
          </div>
        </div>
    </div>
  )
}

export default Forecast