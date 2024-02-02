// import something from "somewhere"
import react from "react"
import './Navbar.css'
// functioning section start
function Navbar()
{
    return(
        <>
        <div className="navbar">
         <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
        </div>
        </>
    )
}
// exporting section start
export default Navbar;