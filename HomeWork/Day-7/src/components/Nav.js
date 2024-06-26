import "./Nav.css"
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Nav(props) { 
    return (
        <div id="navbar">
            
            <div id="left">
                <img src="./assets/logo.svg"/>
                <h1><NavLink to='/'>GeekFoods</NavLink></h1>
            </div>
            
            {/* <div id="mid">
                    
                <div id="home"><a id="home2" href={props.pageNumber}>Home</a></div>  
                <div id="quote"><a id="quote2" href={props.pageNumber}>Quote</a></div>
                <div id="restaurant"><a id="restaurant2" href="#">Restaurant</a></div>
                <div id="foods"><a id="foods2" href="#">Foods</a></div>
                <div id="contact"><a id="contact2" href="#">Contact</a></div>
                <div id="home"><Link to='/'>Home</Link></div>
                <div id="quote"><Link to='/quote'>Quote</Link></div>
                <div id="restaurant"><Link to='/restaurant'>Restaurant</Link></div>

            </div>   */}

            <div id="mid">
                <div id="home"><NavLink to='/' activeClassName="active">Home</NavLink></div>
                <div id="quote"><NavLink to='/quote' activeClassName="active">Quote</NavLink></div>
                <div id="restaurant"><NavLink to='/restaurant' activeClassName="active">Restaurant</NavLink></div>
                {/* <div id="foods"><NavLink to='/foods' activeClassName="active">Foods</NavLink></div> */}
                {/* <div id="contact"><NavLink to='/contact' activeClassName="active">Contact</NavLink></div> */}
            </div>
            
            <div id="right">
            
                <div id="button-container">
                    <button type="submit">Get Started</button>
                </div>
            </div>

            <div id="menu-icon-phone-view">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    );
}

export default Nav;



// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Nav.css';

// function Nav(props) { 
//     return (
//         <div id="navbar">
//             <div id="left">
//                 <img src="./assets/logo.svg" alt="GeekFoods Logo"/>
//                 <h1>GeekFoods</h1>
//             </div>
            
//             <div id="mid">
//                 <div id="home">
//                     <NavLink to="/" activeClassName="active">Home</NavLink>
//                 </div>  
//                 <div id="quote">
//                     <NavLink to="/quote" activeClassName="active">Quote</NavLink>
//                 </div>
//                 <div id="restaurant">
//                     <NavLink to="/restaurant" activeClassName="active">Restaurant</NavLink>
//                 </div>
//                 <div id="foods"><a id="foods2" href="#">Foods</a></div>
//                 <div id="contact"><a id="contact2" href="#">Contact</a></div>
//             </div>  

//             <div id="right">
//                 <div id="button-container">
//                     <button type="submit">Get Started</button>
//                 </div>
//             </div>

//             <div id="menu-icon-phone-view">
//                 <i className="fa-solid fa-bars"></i>
//             </div>
//         </div>
//     );
// }

// export default Nav;
