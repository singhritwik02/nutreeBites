import styles from './App.module.css';
import Hero from './component/hero/Hero';
import Caption from './component/middle-box/Caption';
import Navbar from './component/navbar/Navbar';
import ProductList from './component/product-list/ProductList';


function App() {
  return (
    <div className={styles.app}>
      <Navbar/>
      <Hero/>
      <Caption/>
      <ProductList/>
    </div>
  );
}

export default App;
