import './App.css';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemparatureAndDetails from './components/TemparatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';

function App() {
    const fetchWeather = async() =>{
        const data = await getFormattedWeatherData({q: "mumbai"});
        console.log(data);
    }

    fetchWeather();

    return ( 
        <div className = 'back'>
            <h1 className='title'>Weather</h1>
            <Inputs />
            <TimeAndLocation />
            <TemparatureAndDetails />
            <Forecast />
        </div>
    );
}

export default App;