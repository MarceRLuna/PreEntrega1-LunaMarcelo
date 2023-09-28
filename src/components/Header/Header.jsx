
import "./Header.css"
import logo from "../../assets/logo.png"
import { ShoppingCart } from "../ShoppingCart/ShoppingCart"

export const Header = () => {

    return (
        <header className="header">

            <div className="headerContainer">                

               <img src= {logo} className="logo" alt="imagen de un ojo" />
               
               <p className="nombreTienda">LA OPTICA</p>

                <nav className="navbar">
                    <a href="#" className="navbarLink">Home</a>
                    <a href="#" className="navbarLink">Lentes de sol</a>
                    <a href="#" className="navbarLink">Lentes de contacto</a>                                   
                </nav>

                <ShoppingCart/>                

                
            </div>
        </header>
    )
}