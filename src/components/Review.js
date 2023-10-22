import React, {useState} from "react";
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from "react-icons/fa";
import data from "./data";

function Review() {

    const [id, setIndex] = useState(0);

    const {name, job, image, text} = data[id];

    function checkIndex (id){
        if (id > data.length - 1){
            return id = 0
        }
        else if (id < 0 ){
            return id = data.length - 1
        }
        else {
            return id
        }
    }

    function prevPerson(){
        setIndex( (id) =>{
            var newId = id - 1; 
            return (
                checkIndex(newId)
            )           
        })
    }

    function nextPerson(){
        setIndex( (id) =>{
            var newId = id + 1; 
            return (
                checkIndex(newId)
            )         
        })
    }

    function randomPerson (){
        var randomId = Math.floor(Math.random()* data.length)
        // console.log(randomId)
        setIndex(randomId)
    }

    return (

        <div className="review">
            <div className="img-container">
                <img alt={name} src={image} className="person-img"></img>
                <span className="quote-icon">
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <button className="prev-btn" onClick={prevPerson}>
                <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
                <FaChevronRight />
            </button>
            <div>
            <button className="random-btn" onClick={randomPerson}>Suprise me!</button>
            </div>
            
        </div>

    )
};

export default Review;