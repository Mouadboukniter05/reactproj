import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/" >Home </Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;


/*
  <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/"  style={{
                    color:"white",
                    backgroundColor:"#d44040",
                    borderRadius:'8px'
                }}>Home </a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor:"#d44040",
                    borderRadius:'8px'
                }} >New Blog</a>
            </div>
        </nav>
        */