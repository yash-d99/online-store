import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Discover from "./components/Discover";
import MyItems from "./components/MyItems";
import Redirect from "./components/redirect";
import ItemPage from './components/ItemPage';
import { useEffect } from "react";

const Routing = () => {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['myData']);

  useEffect(() => {
    if (data.items) {
      if (data.items.length !== 0) {
        setCookie('myData', data);
      }
    }
  }, [data]);

  return (
    <BrowserRouter>
      {console.log("THE DATA")}
      {console.log(data)}
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/navigation" element={<NavigationBar />}>
          <Route path="home" element={<HomePage />} />
          <Route path="discover" element={<Discover />} />
          <Route path="myitems" element={<MyItems />} />

          <Route path="itemPage/:email/:id" element={<ItemPage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )


}

export default Routing