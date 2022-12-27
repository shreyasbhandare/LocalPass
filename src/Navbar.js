import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container" id="nav-flex-wrapper">
                <div className="nav-flex-item">
                    <a href="/" id="logo">LocalPass...</a>
                </div>

                <div className="nav-flex-item" id="search-assembly">
                    <span id="search-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <input type="text" id="search-box" name="search-box" autocomplete="off" placeholder="search my vault"/>
                </div>

                <div className="nav-flex-item" id="settings">
                    <FontAwesomeIcon icon={faGear} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;