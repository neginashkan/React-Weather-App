import Day from "./Day"
function Weather() {
    return (
        <div className="Weather">
            <img className="big-icon" title='' alt='' src="big.png"/>
            <div className="temperature">
                <h1 className="degree">27<span className="unit">° C</span></h1>
            <div className="converter"></div>
            </div>
            <div className="date">17th Jun 2023</div>
            <ul>
                <li>Thrusday</li>
                <li> 2:45 am</li>
            </ul>
            <ul>
                <li><i class="fa-sharp fa-solid fa-wind"></i> Wind 10 km/h</li>
                <li><i class="fa-solid fa-droplet"></i> Hum 54 %</li>
                <li><i class="fa-solid fa-cloud-rain"></i> Rain 0.2 %</li>
            </ul>
            <div className="Days">
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
                <Day/>
            </div>
        </div>
    )
}
export default Weather;