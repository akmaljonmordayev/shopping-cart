import React from "react";
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

export default function App() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">MyShop</div>

        {/* Navigation */}
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Catalog</a>
          <a href="#">Deals</a>
          <a href="#">Contact</a>
        </nav>

        {/* Search */}
        <div className="search-box">
          <input type="text" placeholder="Search products..." />
          <button>
            <Search size={20} />
          </button>
        </div>

        {/* Actions */}
        <div className="actions">
          <div className="action-item">
            <Heart size={22} />
            <span>Saved</span>
          </div>

          <div className="action-item">
            <ShoppingCart size={22} />
            <span>Cart</span>
          </div>

          <div className="action-item">
            <User size={22} />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </header>
  );
}
