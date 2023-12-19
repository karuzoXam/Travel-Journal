import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar--container">
      <FontAwesomeIcon className="navbar--icon" icon={faEarthAmericas} />
      <h1 className="navbar--heading">my travel journal.</h1>
    </div>
  );
}

export default Navbar;
