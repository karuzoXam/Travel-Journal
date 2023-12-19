import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Card(props) {
  return (
    <section className="card--section">
      <img className="card--img" src={props.item.imageUrl} alt={props.item.title}></img>
      <div className="card-info_container">
        <div className="card--location_container">
          <p className="card--location">
            <FontAwesomeIcon className="card--icon" icon={faLocationDot} />
            {props.item.location}
          </p>
          <a className="card--location_link" href={props.item.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>

        <h1 className="card--country">{props.item.title}</h1>
        <p className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </section>
  );
}

export default Card;
