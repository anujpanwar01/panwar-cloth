import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./contex/cart.context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CartProvider>
          <App />
        </CartProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
