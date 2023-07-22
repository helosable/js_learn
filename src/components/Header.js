
import { useState } from "react";
import {FaShoppingCart} from "react-icons/fa";
import Order from "./Order";


export default function Header(props) {
 let[cartOpen, setCartOpen] = useState(false)
 let all_price = props.all_price

  return (
  <header>
        <div>
            <span className='logo'>Суши Мания</span>
            <ul className='nav'>
                <li className='nav-item'>Главная</li>
                <li className='nav-item'>Про нас</li>
                <li className='nav-item'>Контакты</li>
            </ul>
            <FaShoppingCart 
            className={`shop-cart-button ${cartOpen && 'active'}`} 
            onClick={()=>setCartOpen(cartOpen=!cartOpen)}/>
                { cartOpen & all_price>0 &&(
                    <div className="shop-cart">
                        {props.orders.map(el =>(
                            <Order onDelete={props.onDelete} item={el} key={el.id} func={props.func}/>
                        ))
                        }
                    <p>{props.all_price}</p>
                    </div>
                )

                }

        </div>
        
  </header>
  )
}
