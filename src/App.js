import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import NavbarTop from './Components/Navbarr/NavbarTop';
import Header from './Components/header/Header';
import Product from './Components/product/Product';
import ProdMobile from './Components/ProductMobile/ProdMobile';
import Footer from './Components/Footer/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import Privateroute from './Components/Privateroute';
import Userdashboard from './Components/Pages/Userdashboard';
import SingleCategory from './Components/SingleCategory/SingleCategory';
import SingleWatch from './Components/SingleCategory/SingleWatch';
import SingleLaptop from './Components/SingleCategory/SingleLaptop';
import SingleHeadphone from './Components/SingleCategory/SingleHeadphone';
import SingleSofa from './Components/SingleCategory/SingleSofa';
import Cart from './Components/Cart';
import Search from './Components/Pages/Search';



function App() {
  return (
    // <div className="App">
    //  <NavbarTop/>
    //  <Header/>
    //  <ProdMobile/>
    //  <Product/>
    //  <Footer/>

    // </div>

    <BrowserRouter>
    <Routes>

    <Route path="home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/> 
    <Route path="/mobileitems" element={<SingleCategory/>}/> 
    <Route path="/watchitems" element={<SingleWatch/>}/> 
    <Route path="/laptopitems" element={<SingleLaptop/>}/> 
    <Route path="/headphoneitems" element={<SingleHeadphone/>}/> 
    <Route path="/sofaitems" element={<SingleSofa/>}/> 
    <Route path="/cart" element={<Cart/>}/> 
    <Route path="/search" element={<Search/>}/> 



    <Route path="/user" element={<Privateroute/>}>
  <Route path="dashboard" element={<Userdashboard/>}/>
  <Route path="profile-info" element={<h1>hello snehal</h1>}/>
   </Route>

    </Routes>
  </BrowserRouter>


  );
}

export default App;
