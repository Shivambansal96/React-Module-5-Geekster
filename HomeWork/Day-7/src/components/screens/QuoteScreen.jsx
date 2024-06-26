import "./QuoteScreen.css";
import {data} from "./../QuoteData.js";
import Nav from "../Nav.js";
import Footer from "../Footer.jsx";

function QuoteScreen() {
    return(
        <div id="quote-screen">

            <Nav /> 
            {/* <hr /> */}
            <div id="quote-screen-main">

            {data.map((item) => {
                return(
                    <div id="quote-screen-two">
                        <h1>{item.quote}</h1>
                        <p>{item.author}</p>
                    </div>
                );
            })}

            </div>

            <Footer />

        </div>
    );
}

export default QuoteScreen;