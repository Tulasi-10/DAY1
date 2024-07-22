
import React from "react";
import './Assignment.css';

function Assignment() {
    const data = [
        { imgSrc: "images.jpg", name: "Sowji", feedback: "Product is bad" },
        { imgSrc: "images3.png", name: "Keerthi", feedback: "GOOD" },
        { imgSrc: "images4.png", name: "Suji", feedback: "excellent" },
        { imgSrc: "images5.png",  name: "Navya", feedback:"Good"},
        {imgSrc:  "images6.png",  name:"PRIYA", feedback:"average"},
        { imgSrc: "images4.png", name: "Sowmya", feedback: "excellent" },
    ];


    return (
        <div className="assignment-container">
            <ul className="list">
                {data.map((item, index) => (
                    <li key={index} className="list-item">
                        <img src={item.imgSrc} alt={item.name} className="item-image"/>
                        <div className="item-details">
                            <span className="item-name">{item.name}</span>
                            <span className="item-feedback">{item.feedback}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Assignment;
