import { FaBasketShopping } from "react-icons/fa6";
import { useState } from "react";
import All_goods from "./basket/all_goodls";

function Nav_bar(props) {
  let [isActive, setActive] = useState(false);
  return (
    <div className="nav_wrap">
      <ol className="nav_menu">
        <li className="nav_item">
          <FaBasketShopping
            className={`nav_text ${isActive ? "basket_active" : "basket"} `}
            onClick={() => setActive((isActive = !isActive))}
          />
          {isActive ? <All_goods good_arr={props.good_arr}/>:''}
        </li>
        <li className="nav_item">
          <p className="nav_text">акции</p>
        </li>
        <li className="nav_item">
          <p className="nav_text">доставка</p>
        </li>
        <li className="nav_item" style={{ marginRight: "100px" }}>
          <p className="nav_text">о нас</p>
        </li>
      </ol>
    </div>
  );
}

export default Nav_bar;
