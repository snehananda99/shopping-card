// import something from 'somewhere'
import react from 'react'
import './Footer.css'

// functioning section start
 function Footer()
 {
    return(
        <div className="footer">
            
                <div className="l1">
                <h5>Links</h5>
                    <ul>
                        <li>PSDtuts-Photishop tutorial</li>
                        <li>NetTuts-Web devlopementand design tutorials</li>
                        <li>VectorTuts-Illustrator and vector tutorals</li>
                        <li>FlashTuts-Adobe Flash tutorials</li>
                        
                    </ul>
                </div>
                <div className="l2">
                    <h5>Follow for more</h5>
                    <ul>
                        <li>Subscribe to RSS Feed</li>
                        <li>What is RSS</li>
                        <li>Email Updates</li>
                    </ul>
                </div>
                <div className="right">
                    <h5>Copy @2008<br></br>All Rights Reserved</h5>
                </div>
            
            
        </div>
    )
 }
//  Exporting section start
export default Footer;