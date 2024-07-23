
import React from "react";
import './Assignment.css';

function Assignment() {

    
    const studentDetails = [{stuImg : "images.jpg", name : "Sruthi", education : "US support & Affiliate"},
                             {stuImg : "images3.png", name : "Swathi", education : "OnBoarding Manager/Producer"},
                             {stuImg : "images4.png", name : "Micheal", education : "Growth Marketing"},
                             {stuImg : "images5.png", name : "Jhanu", education : "Software QA Tester / Customer Support"},
                             {stuImg : "images6.png", name : "priya", education : "Inbound and Marketing"},
                             {stuImg : "images.png", name : "Sruthi", education : "Customer Support at Agorapulse"},
                             {stuImg : "images 8.png", name : "Jasmitha", education : "Harness your social media"},
                             {stuImg : "images9.png", name : "Rithu", education : "CMO |Operations Manager"}
                            ];
    
   
        
        return (
            <div className="review-container">
                    {studentDetails.map((student, index) => 
                        (<div key={index} className="stu-section">
                            <img src={student.stuImg} width="200" height="150"/>
                            <div className="stu-details">
                                <h1>{student.name}</h1>
                                <p>{student.education}</p>
                            </div>
                            <hr />
                            <button className="connect-button">Connect</button>
                        </div>))}
            </div>
        )
    }
    
    export default Assignment;
