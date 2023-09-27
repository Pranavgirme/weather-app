import React from 'react'
import { iconUrlFromCode } from '../services/weatherService'

function Forecast({items}) {
  return (
    <div className='px-5'>
        <div className='d-flex justify-content-start align-items-center mt-3'>
          <p className='text-white fw-medium text-uppercase mb-2'>daily forecast</p>
        </div>
        <hr className='mt-1 text-white'/>

        <div className='d-flex flex-row align-items-center justify-content-between text-white'>
          {items.map((item) =>(
            <div className='d-flex flex-column align-items-center justify-content-center'>
            <p className='fw-light mb-0'>
              {item.title}
            </p>
            <img src={iconUrlFromCode(item.icon)} alt="" className='forecast-icon' />
            <p className='fw-medium'>{`${item.temp.toFixed()}°`}</p>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Forecast