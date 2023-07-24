import React from 'react'
import {UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset} from "@iconscout/react-unicons"

function TemparatureAndDetails() {
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center py-2'>
            <p className='condition'>Cloudy</p>
        </div>

        <div className='d-flex flex-row justify-content-evenly align-items-center text-white'>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='weather-icon'/>
            <p className='temperature '>34°</p>
            
            <div className='d-flex flex-column'>
                <div className='d-flex fw-light justify-content-center align-items-center features'>
                    <UilTemperature size={18} className='m-1'/>
                    Real fell:
                    <span className='fw-medium m-1'>32°</span>
                </div>
                <div className='d-flex fw-light justify-content-center align-items-center features'>
                    <UilTear size={18} className='m-1'/>
                    Humidity:
                    <span className='fw-medium m-1'>65%</span>
                </div>
                <div className='d-flex fw-light justify-content-center align-items-center features'>
                    <UilWind size={18} className='m-1'/>
                    Wind:
                    <span className='fw-medium m-1'>11 km/hr</span>
                </div>
            </div>
        </div>

        <div className='d-flex flex-row justify-content-center text-white align-items-center py-4'>
            <UilSun className='mx-2' />
            <p className='fw-light option'>
            Rise: <span className='fw-medium m-1'>06:45 AM</span>
            </p>
            <p className='fw-light option'>|</p>

            <UilSunset className='mx-2'/>
            <p className='fw-light option'>
            Set: <span className='fw-medium m-1'>07:35 AM</span>
            </p>
            <p className='fw-light option'>|</p>

            <UilSun className='mx-2'/>
            <p className='fw-light option'>
            High: <span className='fw-medium m-1'>45°</span>
            </p>
            <p className='fw-light option'>|</p>

            <UilSun className='mx-2'/>
            <p className='fw-light option '>
            Low: <span className='fw-medium m-1'>40°</span>
            </p>
        </div>
    </div>
  )
}

export default TemparatureAndDetails