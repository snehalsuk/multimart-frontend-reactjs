import React, { useEffect, useState } from 'react'
import { postBySofaCategory } from '../../services/post-services';
import "../product/product.css"
import Card from 'react-bootstrap/Card';
import {  useNavigate } from 'react-router-dom';



const SofaCategory = () => {
    const [sofacat,setSofaCat]=useState([]);
    const [singledata, setSingleData]=useState({dat:""});
    const navigate=useNavigate();


useEffect(()=>{

  postBySofaCategory().then((data)=>{
    console.log(data);
  setSofaCat(data);
  }).catch(error=>{
  
  })
    

},[]);

const handleClick=(e)=>{
  console.log("clicked")
  
    console.log(e)
    console.log(singledata)
 setSingleData(e);
  navigate("/sofaitems", {state:{id:e.id,title:e.title,description:e.description,image:e.image,price:e.price}})
  
}



  return (
    <div id="sofa">
      <div className="product__header__discount">
    <h1>Upto 60% off | Curated furniture picks for your home</h1>
    </div>
<div className="product-card">
{
    sofacat.map((user)=>(


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

export default SofaCategory