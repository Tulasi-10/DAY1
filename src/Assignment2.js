import React, { useState } from 'react';
import './Assignment2.css'; 
function Assignment2() {
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([
        { reviewer: 'SWATHI', text: 'This product is good.' },
        { reviewer: 'Sam', text: 'This product is not great.' },
    ]);

    const addReview = () => {
        if (review.trim() !== '') {
            setReviews([...reviews, { reviewer: 'Sahashra', text: 'This is good' }]);
            setReview('');
        }
    };

    const inputValueChange = (event) => {
        setReview(event.target.value);
    };
    

    return (
        <div className="product-page">
            <header className="header">
                {/* <div className="logo">SVES Commerce</div> */}
                {/* <input type="text" placeholder="Type here to search" className="search-input" />
                <button className="search-button">Search</button>
                <div className="cart">Cart (5)</div>
                <div className="username">Hello, Tulasi</div> */}
            </header>

            <main className="main-content">
                <h1>LIPSTICK</h1>
                <div className="product-details">
                    <div className="product-image">
                        <img src="images11.png" alt="Product" />
                    </div>
                    <div className="product-info">
                        <h2>Product Name</h2>
                        <p className="product-description">
                        description description description description description description description description description description description description description description description
                        </p>
                        <p className="product-price">₹1000.00</p>
                        <button className="add-to-cart-button">Add to cart</button>
                    </div>
                </div>

                <div className="product-specifications">
                    <h2>Product specifications</h2>
                    <p>
                    description description description description description description description description description description description description description description description
                    </p>    
                
                </div>

                <div className="reviews-section">
                    <h2>Reviews</h2>
                    <input
                        type="text"
                        value={review}
                        placeholder="Type to review"
                        onChange={inputValueChange}
                        className="review-input"
                    />
                    <button className="add-review-button" onClick={addReview}>Add review</button>

                    {reviews.map((rev, index) => (
                        <div key={index} className="review">
                            <h3>{rev.reviewer}</h3>
                            <p>{rev.text}</p>
                            
                           
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Assignment2;
