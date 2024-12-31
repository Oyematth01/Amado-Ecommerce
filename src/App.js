import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
    <Router>
      <div className='app'>
        <div className="container">
          <SideBar />
          <ProductListing products={products} />
        </div>
        <Subscribe />
        <Footer />
      </div>
    </Router>
  );
}

function SideBar() {
  return (
    <div className='header'>
      <aside className="sidebar">
        <div className="logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/img/core-img/logo.png`} alt="Logo" />
          </Link>
        </div>
        <nav className='amado-nav'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
        <button>%Discount%</button>
        <button>New this week</button>
      </aside>
    </div>
  );
}

function ProductListing({ products }) {
  return (
    <div className="product-listing">
      <main className="content">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="card" key={product.id}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>From ${product.price}</p>
    </div>
  );
}

function Shop() {
  return <div>Shop Page</div>;
}

function Product() {
  return <div>Product Page</div>;
}

function Cart() {
  return <div>Cart Page</div>;
}

function Checkout() {
  return <div>Checkout Page</div>;
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