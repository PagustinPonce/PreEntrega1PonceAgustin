import React from "react";
import CartWidget from "./CartWidget/CartWidget";

const NavBar =()=>{
    return(
        <>
            <h1><img src="./foto.png" alt="c:\Users\Agus\Pictures\Screenshots\Icono onceshopp.png" /></h1>
            <ul>
                <li>
                    <a>Incio</a>
                </li>
                <li>
                    <a>Tienda</a>
                </li>
                <li>
                    <a>Carrito</a>
                </li>
                
            </ul>

            <CartWidget/>
            
        </>
    )
}

export default NavBar