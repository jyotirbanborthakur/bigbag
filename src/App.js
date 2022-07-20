import { Routes, Route } from "react-router-dom"
import Home from "../src/components/routes/home/home.component";
import Navigation from "./components/routes/navigation/Navigation.component";
import SignIn from "./components/routes/sign-in/sign-in.component";
function App() {
 
  
  const Shop = () => {
    return (<h1>Hello</h1>)
  }
  return (
    <Routes>
<Route  path="/" element={<Navigation/>}>
      <Route index  element={<Home />}/>
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
        </Route>
    </Routes>
  );
}

export default App;
