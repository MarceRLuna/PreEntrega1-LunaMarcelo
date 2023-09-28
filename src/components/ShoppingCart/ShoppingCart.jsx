
import carrito from "../../assets/carrito.png"
import "./ShoppingCart.css"

export const ShoppingCart = () =>{
    return(

        <div className='div-cart'>
            <img className='cart' src={carrito} alt="imagen carrito de compras" />
            <p className="contador">0</p>
        </div>

    )
}