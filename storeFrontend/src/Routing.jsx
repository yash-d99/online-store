import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Discover from "./components/Discover";
import MyItems from "./components/MyItems";
import Redirect from "./components/redirect";
import { useEffect } from "react";

const Routing=()=>{
    const data = useSelector(state=>state);
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['myData']);

  useEffect(() => {

    setCookie('myData', data);
  }, [data]);

return(
    <BrowserRouter>
    {console.log("THE DATA")}
    {console.log(data)}
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/navigation" element={<NavigationBar />}>
          <Route path="home" element={<HomePage />} />
          <Route path="discover" element={<Discover />} />
          <Route path="myitems" element={<MyItems />} />
        </Route>
      </Routes>
    </BrowserRouter>
)


}

export default Routing