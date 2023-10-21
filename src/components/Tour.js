import React, {useState} from "react";

function Tour (props){

    const [readMore, setReadMore] = useState(false);

    function textSize(){
        return (
            // vrati funkciju setReadMore koja je uvijek suprotna od onoga sto je read more8 true ili false)
            setReadMore(!readMore)
        )
    }

    function handleClick(){
        return(props.onDelete(props.id))
    };

    return(
        <article className="single-tour">
            <img src={props.img} alt={props.call}></img>
            <footer>
                <div className="tour-info">
                    <h4>{props.call}</h4>
                    <h4 className="tour-price">${props.money}</h4>
                </div>
                {/* ako je read more true onda prikazi potpuni teks, a ako je false onda ga skrati na 200 znakova */}
                <p> {readMore ? props.desc : `${props.desc.substring(0,200)}... `}
                {/* ako je read more true (puni tekst) prikazi button sa imenom show less, a ako je false onda button sa imenom show more */}
                    <button onClick={textSize}>{readMore ? "Show less" : "Show more"}</button>  
                </p>
                <button className="delete-btn" onClick={handleClick}>Not interested</button>
            </footer>
        </article>
    )
}

export default Tour;