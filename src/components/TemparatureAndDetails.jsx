import React from 'react'
import {UilArrowUp, UilArrowDown, UilTemperature, UilTear, UilWind, UilSun, UilSunset} from "@iconscout/react-unicons"
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService'

function TemparatureAndDetails({weather:{details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone}}) {
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center py-2'>
            <p className='condition'>{details}</p>
        </div>

        <div className='d-flex flex-row justify-content-evenly align-items-center text-white'>
            <img src={iconUrlFromCode(icon)} alt="" className='weather-icon'/>
            <p className='temperature '>{`${temp.toFixed()}°`}</p>
            
            <div className='d-flex flex-column'>
                <div className='d-flex fw-light justify-content-center align-items-center features'>
                    <UilTemperature size={18} className='m-1'/>
                    Real fell:
                    <span className='fw-medium m-1'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='d-flex fw-light justify-content-center align-items-center features'>
                    <UilTear size={18} className='m-1'/>
                    Humidity:
                    <span className='fw-medium m-1'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='d-flex fw-light justify-content-center align-items-center features'>
                    <UilWind size={18} className='m-1'/>
                    Wind:
                    <span className='fw-medium m-1'>{`${speed.toFixed()}km/hr`}</span>
                </div>
            </div>
        </div>

        <div className='d-flex flex-row justify-content-center text-white align-items-center py-4 mt-2'>
            <UilSun className='mx-2' />
            <p className='fw-light option'>
            Rise: <span className='fw-medium m-1'>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
            </p>
            <p className='fw-light option'>|</p>

            <UilSunset className='mx-2'/>
            <p className='fw-light option'>
            Set: <span className='fw-medium m-1'>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
            </p>
            <p className='fw-light option'>|</p>

            <UilSun className='mx-2'/>
            <p className='fw-light option'>
            High: <span className='fw-medium m-1'>{`${temp_max.toFixed()}°`}</span>
            </p>
            <p className='fw-light option'>|</p>

            <UilSun className='mx-2'/>
            <p className='fw-light option '>
            Low: <span className='fw-medium m-1'>{`${temp_min.toFixed()}°`}</span>
            </p>
        </div>
    </div>
  )
}

export default TemparatureAndDetails