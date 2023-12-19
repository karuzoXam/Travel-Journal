import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  return (
    <section className="cart--section">
      <img className="cart--img" src="https://source.unsplash.com/WLxQvbMyfas" alt=""></img>
      <div className="cart-info_container">
        <div className="cart--location_container">
          <p className="cart--location">
            <FontAwesomeIcon className="cart--icon" icon={faLocationDot} />
            Japan
          </p>
          <a className="cart--location_link" href="#">
            View on Google Maps
          </a>
        </div>

        <h1 className="cart--country">Mount Fuji</h1>
        <p className="cart--date">12- Jan, 2021</p>
        <p className="cart--description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount
          Fuji is the single most popular tourist site in Japan, for both Japanese and foreign
          tourists.
        </p>
      </div>
    </section>
  );
}

export default Cart;
