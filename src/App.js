import './App.css';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemparatureAndDetails from './components/TemparatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {

    const [query, setQuery] = useState({ q: 'pune' });
    const [units, setUnits] = useState('metric');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({...query, units}).then((data) => {
                setWeather(data);
            });
        };
        fetchWeather();
    }, [query, units]);

    const formatBackground = () => {
        if (!weather) return { backgroundImage: 'linear-gradient(to bottom right, #00a9bf, #181287)' };

        const threshold = units === 'metric' ? 25 : 77;

        if (weather.temp <= threshold)
            return { backgroundImage: 'linear-gradient(to bottom right, #00a9bf, #181287)' };

        return { backgroundImage: 'linear-gradient(to bottom right, #FFA41B, #E14D2A)' };
    };
      
    return (
        <div className='back ' style={formatBackground()}>
            <h1 className='title'>Weather</h1>
            <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
            {weather && (
                <div>
                    <TimeAndLocation weather={weather}/>
                    <TemparatureAndDetails weather={weather}/>
                    <Forecast items={weather.daily}/>
                </div>
            )}            
        </div>
    );
}

export default App;