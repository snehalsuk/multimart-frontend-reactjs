import React, { useEffect, useState } from 'react'
import { postByHeadphoneCategory } from '../../services/post-services';
import "../product/product.css"
import Card from 'react-bootstrap/Card';
import {  useNavigate } from 'react-router-dom';



const HeadphoneCategory = () => {
  const [singledata, setSingleData]=useState({dat:""});
    
    const [eaphonecat,setEarphoneCat]=useState([]);
    const navigate=useNavigate();


useEffect(()=>{

  postByHeadphoneCategory().then((data)=>{
    console.log(data);
    setEarphoneCat(data);
  }).catch(error=>{
  
  })
    

},[]);


const handleClick=(e)=>{
  console.log("clicked")
  
    console.log(e)
    console.log(singledata)
 setSingleData(e);
  navigate("/headphoneitems", {state:{id:e.id,title:e.title,description:e.description,image:e.image,price:e.price}})
  
}


  return (
    <div id="headphone">
          <div className="product__header__discount">
    <h1>Upto 30% off | HeadPhones </h1>
    </div>
<div className="product-card">
{
   eaphonecat.map((user)=>(


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

export default HeadphoneCategory