// import React, { useEffect, useState } from 'react';
// import './Apppp.css';
// import './Product.css';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [sortOrder, setSortOrder] = useState('low-to-high');

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => setProducts(data));
//   }, []);

//   const sortProducts = (order) => {
//     let sortedProducts;
//     if (order === 'low-to-high') {
//       sortedProducts = [...products].sort((a, b) => a.price - b.price);
//     } else {
//       sortedProducts = [...products].sort((a, b) => b.price - a.price);
//     }
//     setProducts(sortedProducts);
//     setSortOrder(order);
//   };

//   return (
//     <div className="App">
//       <h1>Product List ({products.length})</h1>
//       <div className="sort-options">
//         <label>Sort by: </label>
//         <select onChange={(e) => sortProducts(e.target.value)} value={sortOrder}>
//           <option value="low-to-high">Low to High</option>
//           <option value="high-to-low">High to Low</option>
//         </select>
//       </div>
//       <div className="product-list">
//         {products.map(product => (
//           <Product key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import './App.css';
import Product from './Product';

function App() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('low-to-high');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Debug: log the data
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Debug: log the error
        setError(error);
        setLoading(false);
      });
  }, []);

  const sortProducts = (order) => {
    let sortedProducts;
    if (order === 'low-to-high') {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else {
      sortedProducts = [...products].sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
    setSortOrder(order);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>Product List ({products.length})</h1>
      <div className="sort-options">
        <label>Sort by: </label>
        <select onChange={(e) => sortProducts(e.target.value)} value={sortOrder}>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
