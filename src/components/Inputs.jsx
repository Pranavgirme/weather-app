import React, {useState} from 'react'
import { UilSearch, UilLocationPoint} from '@iconscout/react-unicons'

function Inputs({setQuery, units, setUnits }) {

  const [city, setCity]=useState('');

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if(city !== '') setQuery({q:city});
  };

  const handleLocationClick = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) =>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon
        });
      });
    }
  };

  return (
    <div className='d-flex flex-row justify-content-center my-3'>
      <div className='col-7 d-flex flex-row justify-content-center align-items-center'>
        
        <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type="text" placeholder='search for city...' 
        className="form-control fw-light p-2 w-100 shadow lowercase-placeholder text-capitalize"
        />

        <span size={25} className="icon"><UilSearch onClick={handleSearchClick}/></span>
        <span size={25} className="icon"><UilLocationPoint onClick={handleLocationClick}/></span>
      </div>

      <div className='col-3 d-flex flex-row justify-content-center align-items-center'>
        <button name="metric" className='text-white converter fw-light degree'
        onClick={handleUnitsChange}
        >°C</button>
        <p className='text-white gap'>|</p>
        <button name="imperial" className='text-white converter fw-light degree'
        onClick={handleUnitsChange}
        >°F</button>
      </div>
    </div>
  )
}

export default Inputs;