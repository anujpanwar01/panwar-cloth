import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./contex/cart.context";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/es/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <CartProvider>
            <App />
          </CartProvider>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
