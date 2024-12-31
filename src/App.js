import React from 'react';
import './App.css';

const products = [
  { id: 1, title: "Modern Chair", price: 180, image: `${process.env.PUBLIC_URL}/resources/1.jpg.webp` },
  { id: 2, title: "Minimalistic Plant Pot", price: 180, image: `${process.env.PUBLIC_URL}/resources/2.jpg.webp` },
  { id: 3, title: "Night Stand", price: 180, image: `${process.env.PUBLIC_URL}/resources/4.jpg.webp` },
  { id: 4, title: "Plant Pot", price: 18, image: `${process.env.PUBLIC_URL}/resources/5.jpg.webp` },
  { id: 5, title: "Small Table", price: 320, image: `${process.env.PUBLIC_URL}/resources/6.jpg.webp` },
  { id: 6, title: "Modern Rocking Chair", price: 318, image: `${process.env.PUBLIC_URL}/resources/8.jpg.webp` },
  { id: 7, title: "Metallic Chair", price: 318, image: `${process.env.PUBLIC_URL}/resources/7.jpg.webp` },
  { id: 8, title: "Home Deco", price: 318, image: `${process.env.PUBLIC_URL}/resources/9.jpg.webp` },
  { id: 9, title: "Modern Chair", price: 180, image: `${process.env.PUBLIC_URL}/resources/3.jpg.webp` },
];

export default function App() {
  return (
    <div className='app'>
      <div className="container">
        <SideBar />
        <ProductListing />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

function SideBar() {
  return (
    <div className='sidebar-container'>
      <aside className="sidebar">
        <h1>Amado <span>Furniture</span></h1>
        <nav className='amado-nav'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Checkout</a></li>
          </ul>
        </nav>
        <button>%Discount%</button>
        <button>New this week</button>
      </aside>
    </div>
  );
};

function ProductListing() {
  return (
    <div className='product-listing'>
      <main className='content'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

function ProductCard({ product }) {
  return (
    <div className="card" key={product.id}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>From ${product.price}</p>
    </div>
  )
}

function Subscribe() {
  return (
    <div>
      <div>
        <h2>Subscribe for a 25% Discount</h2>
        <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
      </div>

      <div>
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
          <p>© 2021 Amado. All Rights Reserved.</p>
        </footer>
    </div>
  );
}