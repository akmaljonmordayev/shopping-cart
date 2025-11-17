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
import { Card } from "antd";
import Item from "antd/es/list/Item";

export default function App() {
  const [login, setLogin] = useState(false);
  const [cart, setCart] = useState(0);
  const [saved, setSaved] = useState(0);
  const [data, setData] = useState([]);
  const [like, setLike] = useState(false);
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [openCart, setOpenCart] = useState(false);

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

  function addToCart(id) {
    setCart(cart + 1);
    let allData = data[id];
    setProducts([...products, allData]);
    console.log(products);
  }

  console.log(products);

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
            <div onClick={() => setOpenCart(true)} className="action-item">
              <ShoppingCart size={22} />
              <span>Cart</span>
              <span id="cart-span">{cart}</span>
            </div>

            <div onClick={() => setModal(true)} className="action-item">
              <User size={22} />
              <span>Profile</span>
            </div>
          </div>
        </div>
      </header>
      <div className="cards">
        {data.map(({ id, image, title, description, price }) => (
          <div key={id} className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="price-row">
              <p>${price}</p>
              <button onClick={() => addToCart(id)}>Add</button>
              <i
                id="heart"
                class={like ? "fa-solid fa-heart" : "fa-regular fa-heart"}
              ></i>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div onClick={() => setModal(false)} className="overlay">
          <div className="modal">
            <Login />
          </div>
        </div>
      )}

      {openCart && (
        <div onClick={() => setOpenCart(false)} className="overlay">
          <div className="cards">
            {products.map(({ id, image, title, description, price }) => (
              <div key={id} className="card">
                <img src={image} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="price-row">
                  <p>${price}</p>
                  <button onClick={() => addToCart(id)}>Add</button>
                  <i
                    id="heart"
                    class={like ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
