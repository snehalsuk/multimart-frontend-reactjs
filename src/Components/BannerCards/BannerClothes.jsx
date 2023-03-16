import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./bannercards.css"


const BannerClothes = () => {
  
    return (
        <div  className="banner_cards_container"   >
        <Card  className="electronic-card">
        <Card.Title>Up to 70% off || Gadget Store</Card.Title>
          
       
           <div className="bannercards_img">
          
           <Card className="cards_inside">
           <a href="#watch">
          <Card.Img variant="top" src="./images/watch-02.jpg" />
         </a>
          <Card.Text style={{paddingLeft:'20px'}}>
              Women Watch 
            </Card.Text>
          </Card>
          <Card className="cards_inside">
          <a href="#headphone">
          <Card.Img variant="top" src="./images/wireless-03.png" />
         </a>
          <Card.Text style={{paddingLeft:'20px'}}>
              HeadPhone
            </Card.Text>
          </Card>
          <Card className="cards_inside">
          <a href="#mobile">
         <Card.Img variant="top" src="./images/phone-06.jpg" />
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
          
          </div>
         
        </Card>
        
        </div>
  )
}

export default BannerClothes