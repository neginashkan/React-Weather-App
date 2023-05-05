function Date(props) {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hour = props.date.getHours()
    return (<div>
        <div className="date">{props.date.getDate()}th {month[props.date.getMonth()]} {props.date.getFullYear()}</div>
        <ul>
            <li>{dayNames[props.date.getDay()]}</li>
            <li> {hour < 10 ? `0${hour}`:hour}:{props.date.getSeconds()}</li>
        </ul>
    </div>)
}
export default Date;