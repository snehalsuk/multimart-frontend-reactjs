import React from 'react'
import { Container } from 'reactstrap'
import Base from '../Base'
import HeadphoneCategory from '../CategoryAll/HeadphoneCategory'
import LaptopCategory from '../CategoryAll/LaptopCategory'
import MobileCategory from '../CategoryAll/MobileCategory'
import SofaCategory from '../CategoryAll/SofaCategory'
import WatchCategory from '../CategoryAll/WatchCategory'
import Header from '../header/Header'
import Product from '../product/Product'
import ProdMobile from '../ProductMobile/ProdMobile'
import SingleCategory from '../SingleCategory/SingleCategory'

const Home = () => {
  return (
   <Base>
  
  
     <Header/>
    
   
    <MobileCategory/>
   
   <WatchCategory/>
    
    <LaptopCategory/>
   <HeadphoneCategory/>
   <SofaCategory/>


   
   </Base>
  )
}

export default Home