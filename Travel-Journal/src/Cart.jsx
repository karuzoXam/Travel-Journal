import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Cart(props) {
  console.log(props.item);
  return (
    <section className="cart--section">
      <img className="cart--img" src={props.item.imageUrl} alt={props.item.title}></img>
      <div className="cart-info_container">
        <div className="cart--location_container">
          <p className="cart--location">
            <FontAwesomeIcon className="cart--icon" icon={faLocationDot} />
            {props.item.location}
          </p>
          <a className="cart--location_link" href={props.item.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>

        <h1 className="cart--country">{props.item.title}</h1>
        <p className="cart--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="cart--description">{props.item.description}</p>
      </div>
    </section>
  );
}

export default Cart;
