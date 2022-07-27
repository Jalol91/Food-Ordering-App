import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ChekckoutPage from 'pages/ChekckoutPage';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import ShopPage from 'pages/ShopPage';
import MenuPage from 'pages/MenuPage';
import ShopDetailspage from 'pages/ShopDetailsPage';
import CartPage from 'pages/CartPage';
import Navbar from 'component/Navbar';
import Footer from 'component/Footer';
import BackToTop from 'component/BacktoTop';
import AboutPage from 'pages/AboutPage'

function App() {
  return (
    <div className='sc5 home-2'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:slug" element={<ShopDetailspage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<ChekckoutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
