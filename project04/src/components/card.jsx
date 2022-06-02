import maplogo from '../../images/map.png'

export default function Card (props) {
    console.log(props)
    return(
        <div className="card">
            <img className="card--img" src={`../images/${props.imageUrl}`} alt={props.imageUrl} />
            <div className="card--text">
                <img className="card--map" src={maplogo} alt="map" />
                <p className='card--country'>{props.location}</p>
                <a className="card--link" href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                <h1 className="card--title">{props.title}</h1>
                <h4 className="card--date">{props.startDate} - {props.endDate}</h4>
                <p className="card--details">{props.description}</p>
            </div>
        </div>
    )
}