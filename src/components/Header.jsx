import { Link , NavLink } from "react-router-dom"

function Header () {

    return (
        <header className="header">
        <img className="img-header" src="./src/assets/logo.png" alt="" />
        <nav>        
            <ul>
                <li><NavLink to="/All">All</NavLink></li>
                <li><NavLink to="/Dead">Dead</NavLink></li>
                <li><NavLink to="/Alive">Alive</NavLink></li>
                <li><NavLink to="/Male">Male</NavLink></li>
                <li><NavLink to="/Female">Female</NavLink></li>
                <li><NavLink to="/Human">Human</NavLink></li>
                <li><NavLink to="/Alien">Alien</NavLink></li>
            </ul>
        </nav>
        </header>
    )
}
export default Header