// import something from "somewhere"
import react from 'react';
import './Tophead.css';

// function defination area
function Tophead(){
    return(
        <>
        <div className="tophead">
            <div className="left">
                <ul>
                <li><a href="#" className="c1">Welcome,Guest</a></li>
                <li><a href="#" >Login</a></li>
                <li ><a href="#"  >Sign Up</a></li>
                </ul>
            </div>
            <div className="right">
                <ul>
                <li><a href="#" className="c1">Stay Updated</a></li>
                <li><a href="#"  >Suscribe Via RSS</a></li>
                <li><a href="#"  >Email Updates</a></li>
                </ul>
            </div>
        </div>
        </>
    )
}
// Exporting area
export default Tophead;