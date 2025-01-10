import { createContext,useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import styles from './App.module.css';
import Navbar from './component/navbar/Navbar';
import WishList from './component/wishlist/WishList';
import productsList from './data/product.json';
import HomePage from './component/home-page/HomePage';

export const CartContext = createContext()

function App() {
  const [productList] =useState(productsList)

  return (
    <div className={styles.app}>
     <CartContext.Provider value={{productList}}>
        
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="/wishlist" element={<WishList/>}></Route>
          {/* <Route path="/cart" element={}/> */}
      </Routes>
     </CartContext.Provider>
    </div>
  );
}

export default App;
