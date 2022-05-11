import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SideContextProvider } from "./context/sidebar-context";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <SideContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </SideContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
