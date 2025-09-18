import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import ProductList from "./src/productList";

export default function App() {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
}