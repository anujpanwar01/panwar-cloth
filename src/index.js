import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./contex/user.context";
import { CategoriesProvider } from "./contex/categories.context";
import { CartProvider } from "./contex/cart.context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CategoriesProvider>
          {/* product provider also access the user provider, so why i wrap inside the user provider
            if user add some to their account then we also nee user provider => 2) reason
             */}
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
