import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./bannercards.css"


const BannerEarphone = () => {
    return (
        <div  className="banner_cards_container">
        <Card className="electronic-card">
        <Card.Title>Upgrade your home | Amazon Brands & more</Card.Title>
          
       
           <div className="bannercards_img">
          
           <Card className="cards_inside">
           <a href="#watch">
          <Card.Img variant="top" src="./images/watch-04.jpg" />
         </a>
          <Card.Text style={{paddingLeft:'20px'}}>
              Watch 
            </Card.Text>
          </Card>
          <Card className="cards_inside">
          <a href="#sofa">
          <Card.Img variant="top" src="./images/double-sofa-03.png" />
          </a>
          <Card.Text style={{paddingLeft:'20px'}}>
              Double Sofa
            </Card.Text>
          </Card>
          <Card className="cards_inside">
          <a href="#laptop">
         <Card.Img variant="top" src="./images/lenovo thinkpad.jpg" />
         </a>
         <Card.Text style={{paddingLeft:'20px'}}>
              Laptop 
            </Card.Text>
         </Card>
         <Card className="cards_inside">
         <a href="#mobile">
          <Card.Img variant="top" src="./images/618hqM-yxtL._SX679_.jpg" />
          </a>
          <Card.Text style={{paddingLeft:'20px'}}>
              Mobile
            </Card.Text>
          </Card>
          
          </div>
          
        </Card>
        
        </div>
  )
}

export default BannerEarphone