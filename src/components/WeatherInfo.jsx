import DateFormat from "./DateFormat"
import WeatherTemperature from "./WeatherTemperature"
import Day from "./Day"
function WeatherInfo(props) {
    return (
        <div className="Weather">
            <div className="location"><i class="fa-solid fa-location-dot"></i> {props.info.country} ,{props.info.city}</div>
            <img className="big-icon" title={props.info.description} alt={props.info.description} src={props.info.iconUrl} />
            <div className="description">{props.info.description}</div>
            <WeatherTemperature celsius={props.info.celsius}/>
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
            <div className='open-source-code'><a href="https://github.com/neginashkan/React-Weather-App" target="_blank" rel="noopener noreferrer">open source code</a> by Negin ashkan and <a href="https://negin-react-weather-app.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a> </div>
        </div>
    )
}

export default WeatherInfo;
