import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Discover from "./components/Discover";
import MyItems from "./components/MyItems";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" />
        <Route path="/" element={<NavigationBar />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/Discover" element={<Discover />} />
          <Route path="/MyItems" element={<MyItems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
