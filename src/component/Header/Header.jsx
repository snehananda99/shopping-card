// import something from "somewhere"
import react from 'react'
import './Header.css'

// functioning section start
function Header()
    {
       return(
        <>
        <div className="header">
         <h2 style={{padding:"10px"}}>My blog</h2>
         <p style={{padding:"10px"}}>Description of my Blog</p>
        </div>
        </>
       )
    }

    // Exporting section start
    export default Header;
