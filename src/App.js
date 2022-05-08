import "./App.css";
import { Home, Navbar, Sidebar } from "./components";
import Router from "./router/Router";
function App() {
  return (
    <div className="App">
      <Router />
      <Navbar />
      <div className="d-grid ">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
