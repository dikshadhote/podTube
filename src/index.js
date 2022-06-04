import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { SideContextProvider } from "./context/sidebar-context";
import { SearchContextProvider } from "./context/search-context";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <SideContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </SideContextProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
