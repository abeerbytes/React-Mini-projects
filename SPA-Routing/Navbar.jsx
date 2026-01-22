import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return(
        <nav>
            <h1>My Portfolio</h1>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Contact">Contact</NavLink>
                <NavLink to="/About">About</NavLink>
            
            </div>
        </nav>
    )

}
export default Navbar