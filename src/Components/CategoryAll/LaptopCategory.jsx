import React, { useEffect, useState } from 'react'
import { postByLaptopCategory } from '../../services/post-services';
import "../product/product.css"
import Card from 'react-bootstrap/Card';
import {  useNavigate } from 'react-router-dom';



const LaptopCategory = () => {
    const [laptopcat,setLaptopCat]=useState([]);

    const [singledata, setSingleData]=useState({dat:""});
    const navigate=useNavigate();

    useEffect(()=>{
    
      postByLaptopCategory().then((data)=>{
        console.log(data);
        setLaptopCat(data);
      }).catch(error=>{
      
      })
        
    
    },[]);
    
    
    const handleClick=(e)=>{
      console.log("clicked")
      
        console.log(e)
        console.log(singledata)
     setSingleData(e);
      navigate("/laptopitems", {state:{id:e.id,title:e.title,description:e.description,image:e.image,price:e.price}})
      
    }
    
    
      return (
        <div id="laptop">
          <div className="product__header__discount">
        <h1>Laptop From Top Brand </h1>
        </div>
    <div className="product-card">
    {
        laptopcat.map((user)=>(
    
    
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

export default LaptopCategory