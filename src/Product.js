// // import React from 'react';
// // import './Product.css';

// // function Product({ product }) {
// //   const discount = Math.floor(Math.random() * 50) + 1; // Random discount for the badge

// //   return (
// //     <div className="product">
// //       <div className="badge">-{discount}%</div>
// //       <img src={product.image} alt={product.title} />
// //       <h3>{product.title}</h3>
// //       <p>⭐️⭐️⭐️⭐️⭐️ ({product.rating.count})</p>
// //       <p className="price">₹{product.price} <span style={{ textDecoration: 'line-through' }}>₹{(product.price * (100 + discount) / 100).toFixed(2)}</span></p>
// //       <button className="add-to-cart">Add to cart</button>
// //     </div>
// //   );
// // }

// // export default Product;

// import React from 'react';
// import './Product.css';

// function Product({ product }) {
//   const discount = Math.floor(Math.random() * 50) + 1; // Random discount for the badge

//   return (
//     <div className="product">
//       <div className="badge">-{discount}%</div>
//       <img src={product.image} alt={product.title} />
//       <h3>{product.title}</h3>
//       <p>⭐️⭐️⭐️⭐️⭐️ ({product.rating.count})</p>
//       <p className="price">₹{product.price} <span style={{ textDecoration: 'line-through' }}>₹{(product.price * (100 + discount) / 100).toFixed(2)}</span></p>
//       <button className="add-to-cart">Add to cart</button>
//     </div>
//   );
// }

// export default Product;
import { useEffect, useState } from "react";
import "./Product.css";

function ProductFetching() {
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState({});

  const handleIncrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] > 0 ? prevCounts[id] - 1 : 0,
    }));
  };

  const btnAddtoCart = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: 1,
    }));
  };

  useEffect(() => {
    const fetchMyData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const resData = await res.json();
      console.log(resData);
      setProducts(resData);
    };
    fetchMyData();
  }, []);

  const renderStars = (rate) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="star">
          {i < rate ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="cards-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} className="card-img" />
            <div className="card-content">
              <h2 className="card-title">{product.title}</h2>
              <div className="card-rating">
                <div className="star-rating">
                  {renderStars(Math.round(product.rating.rate))}
                </div>
                <p className="card-description">{product.rating.count}</p>
              </div>
              <p className="card-price">${product.price}</p>
            </div>
            <div>
              {!counts[product.id] ? (
                <div>
                  <button
                    className="addtocartBtn"
                    onClick={() => btnAddtoCart(product.id)}
                  >
                    Add to Cart
                  </button>
                </div>
              ) : (
                <div className="divvtag">
                  <button
                    className="btnn"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <span className="cnt">{counts[product.id]}</span>
                  <button
                    className="btnn"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFetching;

