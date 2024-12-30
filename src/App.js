import React from 'react';
import './App.css';

const products = [
  { id: 1, title: "Modern Chair", price: 180, image: "https://via.placeholder.com/200" },
  { id: 2, title: "Minimalistic Plant Pot", price: 180, image: "https://via.placeholder.com/200" },
  { id: 3, title: "Night Stand", price: 180, image: "https://via.placeholder.com/200" },
  { id: 4, title: "Plant Pot", price: 18, image: "https://via.placeholder.com/200" },
  { id: 5, title: "Small Table", price: 320, image: "https://via.placeholder.com/200" },
  { id: 6, title: "Modern Rocking Chair", price: 318, image: "https://via.placeholder.com/200" },
  { id: 7, title: "Metallic Chair", price: 318, image: "https://via.placeholder.com/200" },
  { id: 8, title: "Home Deco", price: 318, image: "https://via.placeholder.com/200" },
];

export default function App() {
  return (
    <div className="container">
      <SideBar />
      <ProductListing />
    </div>
  );
};

function SideBar() {
  return (
    <div>
      <aside className="sidebar">
          <h1>Amado <span>Furniture</span></h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Checkout</a></li>
          </ul>
          <button>%Discount%</button>
          <button>New this week</button>
        </aside>
    </div>
  );
};

function ProductListing() {
  return (
    <div>
      <main className="content">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>From ${product.price}</p>
            </div>
          ))}
        </main>
    </div>
  );
};

