import "./App.css"
import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/home/Home"
import Login from "./features/auth/Login"
import About from "./pages/about/About"
import Careers from "./pages/careers/Careers"
import OrderServices from "./pages/orderServices/OrderServices"
import PaymentInfo from "./pages/paymentInfo/PaymentInfo"
import PersonalPage from "./features/auth/PersonalPage"
import Products from "./pages/products/Products"
import Registration from "./features/auth/Registration"
import Contacts from "./pages/contacts/Contacts"
import ShippingServices from "./pages/shippingServices/ShippingServices"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<OrderServices />} />
          <Route path="/payment-info" element={<PaymentInfo />} />
          <Route path="/personal-page" element={<PersonalPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shipping-services" element={<ShippingServices />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
