import {data} from "./../QuoteData.js";
import "./QuoteScreen.css";

function QuoteScreen() {
    return(
        <div id="quote-screen">
            {data.map((item) => {
                return(
                    <div id="quote-screen-two">
                        <h1>{item.quote}</h1>
                        <p>{item.author}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default QuoteScreen;