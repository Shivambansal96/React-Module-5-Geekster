import "./Nav.css"

function Nav() {
    return (
        <div id="navbar">
            
            <div id="left">
                <img src="./assets/logo.svg"/>
                <h1>GeekFoods</h1>
            </div>
            
            <div id="mid">
                    
                <div id="home"><a id="home2" href="#">Home</a></div>
                <div id="quote"><a id="quote2" href="#">Quote</a></div>
                <div id="restaurant"><a id="restaurant2" href="#">Restaurant</a></div>
                <div id="foods"><a id="foods2" href="#">Foods</a></div>
                <div id="contact"><a id="contact2" href="#">Contact</a></div>

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