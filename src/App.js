import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Banner from "./components/Banner/Banner";
import Vertical from "./components/Vertical/Vertical";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
      <div id="App-body">
        <Vertical />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;