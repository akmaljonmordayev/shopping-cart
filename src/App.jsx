import React from "react";
import { useState, useEffect } from "react";
import {
  Search,
  Menu,
  Package,
  Scale,
  ShoppingCart,
  Heart,
  User,
} from "lucide-react";
import "./App.css";
import Login from "./components/Login/Login";

export default function App() {
  const [login, setLogin] = useState(false);
  const [cart, setCard] = useState(0);
  const [saved, setSaved] = useState(0);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">MyShop</div>

          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Catalog</a>
            <a href="#">Deals</a>
            <a href="#">Contact</a>
          </nav>

          <div className="search-box">
            <input type="text" placeholder="Search products..." />
            <button>
              <Search size={20} />
            </button>
          </div>

          <div className="actions">
            <div className="action-item">
              <Heart size={22} />
              <span>Saved</span>
              <span>{saved}</span>
            </div>
            <div className="action-item">
              <ShoppingCart size={22} />
              <span>Cart</span>
              <span>{cart}</span>
            </div>

            <div className="action-item">
              <User size={22} />
              <span>Profile</span>
            </div>
          </div>
        </div>
      </header>
      <div className="cards">
        {data.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="price-row">
              <p>${item.price}</p>
              <button onClick={() => setCard(cart + 1)}>Add</button>
            </div>
          </div>
        ))}
      </div>

      {login && (
        <div className="overlay">
          <div className="modal">
            <Login />
          </div>
        </div>
      )}
    </>
  );
}
