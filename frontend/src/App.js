import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Button, message } from "antd";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Cart />

      <Button
        type="primary"
        size="large"
        onClick={() => message.error("Hi there")}
      >
        Hello
      </Button>

      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
