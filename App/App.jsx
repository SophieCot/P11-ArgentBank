import React from "react";
import "../src/sass/App.scss"; // SCSS global
import { Provider } from "react-redux";
import store from "../redux/store";
import Navigation from "./Navigation";

function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

export default App;
