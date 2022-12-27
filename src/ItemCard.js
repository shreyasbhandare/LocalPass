import './ItemCard.css';
import { IconContext } from "react-icons";
import { FaUserEdit, FaShareAlt, FaTrashAlt } from "react-icons/fa";

function ItemCard(props) {
    const domain = "test.com";
    const username = "abcdefgh@pqr.com";
    const viewType = props.viewType;

    return (
        <div className={`card-layout ${viewType ? "main-flex-wrapper" : "main-flex-wrapper-list" }`}>
            <div className={`${viewType ? "main-flex-item" : "main-flex-item-list" }`} id="thumbnail-img">
                <div>Launch</div>
                <input type="checkbox" id="marked" name="marked" />
            </div>

            <div className={`${viewType ? "main-flex-item details-flex-wrapper" : "main-flex-item-list details-flex-wrapper-list" }`}>
                <div className={`${viewType ? "details-flex-item" : "details-flex-item-list" }`}>
                    <h4>{domain}</h4>
                    <h5>{username}</h5>
                </div>

                <div className={`${viewType ? "details-flex-item" : "details-flex-item-list" }`}>
                    <ul id="action-container">
                        <li>
                            <div className="details-button">
                                <IconContext.Provider value={{ size: 16 }}>
                                    <FaUserEdit />
                                </IconContext.Provider>
                            </div>
                        </li>
                        <li>
                            <div className="details-button">
                                <IconContext.Provider value={{ size: 16 }}>
                                    <FaShareAlt />
                                </IconContext.Provider>
                            </div>
                        </li>
                        <li>
                            <div className="details-button">
                                <IconContext.Provider value={{ size: 16 }}>
                                    <FaTrashAlt />
                                </IconContext.Provider>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;