import "./App.css";
import { Home, Navbar, Sidebar, SidebarMini } from "./components";
import Router from "./router/Router";
import { useSide } from "./context/sidebar-context";
function App() {
  const { showSidebar } = useSide();
  return (
    <div className="App">
      <Router />
      <Navbar />
      <div className={showSidebar ? "d-grid-sidebar " : "d-grid-sidebar-mini"}>
        {showSidebar ? <Sidebar /> : <SidebarMini />}
        {showSidebar ? <SidebarMini /> : <SidebarMini />}
        <Home />
      </div>
    </div>
  );
}

export default App;
