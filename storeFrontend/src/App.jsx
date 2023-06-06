import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Discover from "./components/Discover";
import MyItems from "./components/MyItems";
import Redirect from "./components/redirect";

function App() {
  return (
    <BrowserRouter>
        <Routes>
    <Route path="/" element={<Redirect/>} />
    <Route path="/navigation" element={<NavigationBar />}>
      <Route path="home" element={<HomePage />} />
      <Route path="discover" element={<Discover />} />
      <Route path="myitems" element={<MyItems />} />
    </Route>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
