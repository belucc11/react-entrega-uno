import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda Natural</h1>

        <nav>
            <ul>
                <li>Productos</li>
                <li>Sobre Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar