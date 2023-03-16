import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

import Base from '../Base';
import Cart from '../Cart';

import MobileCategory from '../CategoryAll/MobileCategory'
import "./single.css"


const SingleCategory = () => {

  

  const [amount, setAmount]=useState();
  const [totalamt, setTotalAmt]=useState(0);
  const [count, setCount]=useState(0);
  const [updateprice,setUpdatePrice]=useState();
    const [updatecount,setUpdateCount]=useState();
    const [title,setTitle]=useState();
    const [cart,setCart]=useState([])
const [order,setOrder]=useState("")
  
    const location= useLocation();

    // console.log(location.state)
    // console.log(location,"useLocation Hook");

    // const data=location.state?.data;

  
    const setDecrease=()=>{

      if(count>0){
      setCount(count-1);
      }

    }

    const setIncrement=()=>{

      setCount(count+1)
    
     
     setTotalAmt(location.state.price*count)
 
   



    }


    const handleCart=(e)=>{

      console.log(count)
     
      console.log(location.state.price*count)


      setUpdateCount(count);
      setUpdatePrice(location.state.price*count);
      setTitle(location.state.title);
      // setCart([title,updatecount,updateprice]);
     



    }

  
  const orderPlace=()=>{

    setOrder("Oder is Successfully placed")
    setUpdateCount(0);
    setUpdatePrice(0);
    setTitle("");
  }


  




  return (
    <>
    <Base>
    <div className="single_container">
       <h1 className="single_title">{location.state.title}</h1>

       <Card className="card_img_container" >
       
       <Card.Img 
       style={{height:"15rem",
      width:"15rem"}}
      src={`http://localhost:8080/prod/image/${location.state.image}`} 
       />
     
      

<h4 className="single_price"><i class="fa-solid fa-indian-rupee-sign"> {location.state.price} </i></h4>

<div className="single_items_inc_dec">
          <h3>Add Items : </h3>
          <i class="fas fa-minus minus"
          onClick={setDecrease} ></i>
          <input type="text" className="single_input" placeholder={count}/>
          <i class="fas fa-plus add"
          onClick={setIncrement} ></i>

          </div>
          

          <div className="single__totalprice" >
            <h3 >
              Total Price:
              <span>
             
         {location.state.price*count}
         </span> 
         </h3>
            
           

          </div>
          <div className="addtocart">
          <Button onClick={handleCart}>Add to Cart</Button>
         
          </div>

          </Card>      
 


    </div>
   
    

   
<div>


  <MobileCategory/>
</div>
</Base>

    </>
  )
}

export default SingleCategory