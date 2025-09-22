import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
// import ProductList from "./src/productList";
// import Practice from "./src/practice";
import ProfileCard from "./src/profileCard";

export default function App() {
  return (
    <Provider store={store}>
      {/* <ProductList /> */}
      {/* <Practice /> */}
      <ProfileCard/>
    </Provider>
  );
}
