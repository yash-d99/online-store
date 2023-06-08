
import { Provider, useDispatch } from 'react-redux';
import { CookiesProvider, useCookies } from 'react-cookie';
import { dataSlices } from './Store/dataSlice';
import Routing from "./Routing";
import { useEffect } from "react";
function App() {

  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(['myData']);

  useEffect(() => {
    console.log("cookies.myData")
    console.log(cookies.myData)
    if (cookies.myData !== "undefined" && cookies.myData !== undefined) {
      dispatch(dataSlices.loadData(cookies.myData));
    }
  }, []);


  return (

    <Routing />

  );

}

export default App;
