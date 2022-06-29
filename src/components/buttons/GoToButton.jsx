import React, {useContext} from 'react';
import Context from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard, FaCartArrowDown } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import './css/GoToButton.css';

function GoToButton(props) {
  const navigate = useNavigate();
  const { route, title, icon, payload, anchor } = props;

  const{setResultSearchBar, setSearchBar} = useContext(Context);

  const clearSearch = () => {
    setResultSearchBar([]);
    setSearchBar('');
    navigate(route, { state: payload });
  }

  const iconComponent = () => {
    switch (icon) {
      case "FaCreditCard":
        return <button
          type="button"
          onClick={() => clearSearch()}
          className="go-to-button"
          style={{ background: "rgba(0, 128, 0, 0.683)" }}
        >
          <FaCreditCard className="icon-button" />
          <span className="text-button">
            {title}
          </span>
        </button>

      case "FaCartArrowDown":
        return <Link
         to={`${route + anchor}`}
          className="go-to-button-anchor"
          style={{ background: "#353e5292" }}
        >
          <FaCartArrowDown className="icon-button" />
          <span className="text-button">
            {title}
          </span>
        </Link>
    }
  }
  return iconComponent();

};


export default GoToButton;
