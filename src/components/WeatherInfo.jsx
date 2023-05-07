import DateFormat from "./DateFormat"
import Day from "./Day"
import { useState } from "react";
function WeatherInfo(props) {
    const [showCelsius, setShowCelsius] = useState(true)
    function handleClick(event) {
        setShowCelsius(!event.target.checked)
    }
    return (
        <div className="Weather">
            <div className="location"><i class="fa-solid fa-location-dot"></i> {props.info.country} ,{props.info.city}</div>
            <img className="big-icon" title={props.info.description} alt={props.info.description} src={props.info.iconUrl} />
            <div className="description">{props.info.description}</div>
            <div className="temperature">
                <h1 className="degree">{showCelsius ? props.info.celsius : Math.round((props.info.celsius * 9 / 5) + 32)}<span className="unit">° {showCelsius ? "C" : "F"}</span></h1>
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
            <DateFormat date={props.info.date} />
            <ul>
                <li><i class="fa-sharp fa-solid fa-wind"></i> Wind {props.info.wind} km/h</li>
                <li><i class="fa-solid fa-droplet"></i> Hum {props.info.humidity} %</li>
                {/* <li><i class="fa-solid fa-cloud-rain"></i> Rain 0.2 %</li> */}
            </ul>
            <div className="Days">
                {/* <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day />
                    <Day /> */}
            </div>
            <div className='open-source-code'><a href="https://github.com/neginashkan/React-Weather-App" target="_blank" rel="noopener noreferrer">open source code</a> by Negin ashkan</div>
        </div>
    )
}

export default WeatherInfo;
