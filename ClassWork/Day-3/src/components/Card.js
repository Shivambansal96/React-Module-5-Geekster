import "./Card.css";

function Card(props) {
    return (
        <div id="card">
    
        <div id="card-top">
            <p>{props.para}</p>
        </div>
    
        <div id="card-bottom">    
            <div id="card-bottom-left">
                <img src={props.link} />
            </div>

            <div id="card-bottom-right">
                <p id="para-one">{props.name}</p>
                <p id="para-two">{props.title}</p>
                
            </div>    
        </div>

    </div>
    );
}


export default Card;