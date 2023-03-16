import React, { useEffect, useState } from 'react'
import "../product/product.css"
import Card from 'react-bootstrap/Card';
import { postByWatchCategory } from '../../services/post-services';
import {  useNavigate } from 'react-router-dom';



const WatchCategory = () => {
    const [watchcat,setWatchCat]=useState([]);

    const [singledata, setSingleData]=useState({dat:""});
    const navigate=useNavigate();


    useEffect(()=>{
    
      postByWatchCategory().then((data)=>{
        console.log(data);
        setWatchCat(data);
      }).catch(error=>{
      
      })
        
    
    },[]);
    
    

    const handleClick=(e)=>{
      console.log("clicked")
      
        console.log(e)
        console.log(singledata)
     setSingleData(e);
      navigate("/watchitems", {state:{id:e.id,title:e.title,description:e.description,image:e.image,price:e.price}})
      
    }
    
    
    
    
      return (
        <div id="watch">
       <div className="product__header__discount">
        <h1>Upto 60% off | Smart Watches </h1>
        </div>
    <div className="product-card">
    {
        watchcat.map((user)=>(
    
    
          <div className="product__card_img" style={{ paddingBottom:'20px' }}>
          <Card className="main-card-img" >
           
            <Card.Img  
            className="card-product-img"
            onClick={(e) => handleClick(user)} 
            variant="top" src={`http://localhost:8080/prod/image/${user.image}`} />
                     
      
            <Card.Body>
              <Card.Text>
              <h4 >{user.title}</h4>
              
              </Card.Text>
           </Card.Body>
           
           
          </Card>
          </div>
     )
     )  }
    
    
    </div>
    </div>
    
    
  )
}

export default WatchCategory