import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./bannercards.css"
import {  useNavigate } from 'react-router-dom';



const BannerCards = () => {

  const navigate=useNavigate();

const handleCat=()=>{


  navigate("/laptopitems")
}


  return (
    <div  className="banner_cards_container">
    <Card className="electronic-card">
    <Card.Title>Electronics devices for home office</Card.Title>
      
   
       <div className="bannercards_img">
      
       <Card className="cards_inside">
       <a href="#laptop">
      <Card.Img variant="top" src="./images/Hp victus.jpg" 
     
      /></a>
      <Card.Text style={{paddingLeft:'20px'}}>
          Laptop
        </Card.Text>
      </Card>
      <Card className="cards_inside">
      <a href="#mobile">
      <Card.Img variant="top" src="./images/phone-04.jpg" />
      </a>
      <Card.Text style={{paddingLeft:'20px'}}>
          Mobile Phone
        </Card.Text>
      </Card>
      <Card className="cards_inside">
      <a href="#sofa">
     <Card.Img variant="top" src="./images/arm-chair-01.jpg" />
     </a>
     <Card.Text style={{paddingLeft:'20px'}}>
          Arm Chair
        </Card.Text>
     </Card>
     <Card className="cards_inside">
     <a href="#watch">
      <Card.Img variant="top" src="./images/watch-01.jpg" />
      </a>
     
      <Card.Text style={{paddingLeft:'20px'}}>
          Digital Watch 
        </Card.Text>
      </Card>
      
      </div>
      
    </Card>
    
    </div>
  )
}

export default BannerCards