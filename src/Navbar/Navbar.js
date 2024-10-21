import { Link } from "react-router-dom";
function Navbar(){

    return(

        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/register">Register</Link>
      <Link className="nav-item nav-link active" to="/login">Login</Link>
      <Link className="nav-item nav-link active" to="/getAll">GetAllUsers</Link>
      <Link className="nav-item nav-link active" to="/delete">DeleteUser</Link>
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;