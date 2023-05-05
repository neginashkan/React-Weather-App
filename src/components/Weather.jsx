import { useState } from "react";
import Day from "./Day"
import DateFormat from "./DateFormat"
import axios from 'axios';
import { Bars } from 'react-loader-spinner'
function Weather({city}) {
    const [showCelsius, setShowCelsius] = useState(true)
    function handleClick(event){
        setShowCelsius(!event.target.checked)
    }
    const [weatherData, setWeatherData] = useState({
        ready:false,
        country: null,
        city: null,
        celsius: null,
        iconName: null,
        iconUrl: null,
        humidity: null,
        wind: null,
        date: null
    })
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            country: response.data.country,
            city: response.data.city,
            celsius: Math.round(response.data.temperature.current),
            description: response.data.condition.description,
            iconUrl: response.data.condition.icon_url,
            humidity: response.data.temperature.humidity,
            wind: Math.round(response.data.wind.speed),
            date: new Date(response.data.time * 1000)
        })
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="location"><i class="fa-solid fa-location-dot"></i> {weatherData.country} ,{weatherData.city}</div>
                <img className="big-icon" title={weatherData.description} alt={weatherData.description} src={weatherData.iconUrl} />
                <div className="description">{weatherData.description}</div>
                <div className="temperature">
                    <h1 className="degree">{showCelsius ? weatherData.celsius : Math.round((weatherData.celsius * 9 / 5) + 32)}<span className="unit">° {showCelsius ? "C" : "F"}</span></h1>
                    <div className="converter">
                        <form>
                            <input
                                id="switch-button"
                                name="switch-button"
                                type="checkbox"
                                className="input-checkbox"
                                onClick={handleClick}
                            />
                            <label htmlFor="switch-button" className="toggle">
                                toggle
                            </label>
                            <span className="light--text label-text">F</span>
                            <span className="dark--text label-text">C</span>
                        </form>
                    </div>
                </div>
                <DateFormat date={weatherData.date}/>
                <ul>
                    <li><i class="fa-sharp fa-solid fa-wind"></i> Wind {weatherData.wind} km/h</li>
                    <li><i class="fa-solid fa-droplet"></i> Hum {weatherData.humidity} %</li>
                    {/* <li><i class="fa-solid fa-cloud-rain"></i> Rain 0.2 %</li> */}
                </ul>
                <div className="Days">
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                </div>
                <div className='open-source-code'><a href="https://github.com/neginashkan/React-Weather-App" target="_blank" rel="noopener noreferrer">open source code</a> by Negin ashkan</div>
            </div>
        )

    } else {
        const apiKey = "04oabt67c234956913f3d410bfd5b681"
        const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
        axios.get(url).then(handleResponse)
        return (
            <div className="Weather bars">
                <Bars
                    height="80"
                    width="80"
                    color="#FFFFFF"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                /></div>
        )
    }
}
export default Weather;