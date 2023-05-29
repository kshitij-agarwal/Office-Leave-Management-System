import React from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import configureStore from "./store/store";

import App from "./App";

import "./index.scss";

const { store, persistor } = configureStore();

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
