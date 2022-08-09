import { NavLink } from "react-router-dom";


const NavBar = () => { 
    
    return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">DF News</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-item nav-link" to="/summary">Summary</NavLink>
                {/* <NavLink className="nav-item nav-link" to="/add">Add</NavLink> */}
                {/* <NavLink className="nav-item nav-link" to="/nonsenseRoute">Nonsense Route</NavLink> */}
            </div>
        </div>
    </nav>
    )
}

export default NavBar; 
