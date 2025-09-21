import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
// import ProductList from "./src/productList";
import Practice from "./src/practice";

export default function App() {
  return (
    <Provider store={store}>
      {/* <ProductList /> */}
      <Practice />
    </Provider>
  );
}
