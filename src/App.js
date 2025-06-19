import Home from "./routes/home/home-component";
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./routes/navigations/Nav-Component";
import SignInPage from "./components/sign-in-page/sign-in-component";
import Shop from "./routes/shop/shop-page";
import CheckoutPage from "./routes/checkout-page/checkout-component";
import { store } from "./store/store";
console.log(store.getState())
const App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path="/crwn_clothing" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="signIn" element={<SignInPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </HashRouter>

  )
}

export default App;


