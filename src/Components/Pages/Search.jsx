import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Base from '../Base';
import NavbarTop from '../Navbarr/NavbarTop';
import { Button, Card } from 'react-bootstrap';
import "../SingleCategory/single.css"
import Cart from '../Cart';


const Search = ({adddata}) => {

  const [searchstate,setSearchState]=useState([]);
    const location= useLocation();
 
    const [amount, setAmount]=useState();
    const [totalamt, setTotalAmt]=useState(0);
    const [count, setCount]=useState(0);
    const [updateprice,setUpdatePrice]=useState();
      const [updatecount,setUpdateCount]=useState();
      const [title,setTitle]=useState();
      const [cart,setCart]=useState([])
  const [order,setOrder]=useState("")
 
    useEffect(()=>{
    console.log(location.state)
    setSearchState(location.state.data);

    console.log(searchstate)
    
  }
    )
    const addToCart=()=>{
      console.log()

    }



    
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
    <div>
    {
    searchstate.map((user,index)=>(

    <div className="single_container">
  
 

       <h1 className="single_title">{user.title}</h1>

       <Card className="card_img_container" >
       
       <Card.Img 
         style={{height:"15rem",
         width:"15rem"}}
       
       src={`http://localhost:8080/prod/image/${user.image}`} />


<h4 className="single_price"><i class="fa-solid fa-indian-rupee-sign"> {user.price} </i></h4>

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
             
         {user.price*count}
         </span> 
         </h3>
            
           

          </div>
          <div className="addtocart">
          <Button onClick={handleCart}>Add to Cart</Button>
         
          </div>

          </Card>      

          </div>
      
      )
    )
 
      }

</div>


</Base>

    </>
  
  )
}

export default Search