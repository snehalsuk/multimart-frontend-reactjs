import React, { useEffect, useState } from 'react'
import { postByMobileCategory } from '../../services/post-services';
import "./mobile.css"
import Card from 'react-bootstrap/Card';
import {  useNavigate } from 'react-router-dom';

const MobileCategory = () => {


  const [singledata, setSingleData]=useState({dat:""});
    
    const [mobilecat,setMobileCat]=useState([]);

const navigate=useNavigate();

useEffect(()=>{

  postByMobileCategory().then((data)=>{
    console.log(data);
  setMobileCat(data);
  }).catch(error=>{
  
  })
    

},[]);


 const handleClick=(e)=>{
  console.log("clicked")
  
    console.log(e)
    console.log(singledata)
 setSingleData(e);
  navigate("/mobileitems", {state:{id:e.id,title:e.title,description:e.description,image:e.image,price:e.price}})
  
}




  return (
    <div id="mobile" className="mobile-container">
    <div className="product__header__discount">
    <h1>Upto 30% off | Mobiles Phones </h1>
    </div>
<div className="product-card" >
{
    mobilecat.map((user,index)=>(


      <div className="product__card_img" style={{ paddingBottom:'20px' }}>
      <Card className="main-card-img" >
       
        <Card.Img  variant="top"
        className="card-product-img" 
        onClick={(e) => handleClick(user)} 
        src={`http://localhost:8080/prod/image/${user.image}`} />
                 
  
        <Card.Body >
          <Card.Text >
          
          <h4 >{user.title}</h4>
          {/* {user.id} */}
          {/* {index} */}
          
         
          
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

export default MobileCategory