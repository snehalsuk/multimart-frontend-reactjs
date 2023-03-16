import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { loadAllPosts, postByMobileCategory } from '../../services/post-services';
import "./product.css"

const Product = () => {

  const [users,setUsers]=useState([]);

    const [mobilecat,setMobileCat]=useState([]);

    
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


useEffect(()=>{

  // loadAllPosts().then((data)=>{
  //   console.log(data);
  //   setUsers(data);
  // }).catch(error=>{
   
  // })
  

},[]);






  return (
    <div>
        <h1>Up to 50% off | Winter essentials from local shops near you</h1>
    <div className="product-card">
    {
    
    users.map((user,index)=>(
    
    
        <div className="product__card_img">
    <Card className="card-img" >
     
      <Card.Img  variant="top" src={`http://localhost:8080/prod/image/${user.image}`} />
               

      <Card.Body>
        <Card.Text>
          <div>
        {user.title}
        
        </div>
        
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
export default Product