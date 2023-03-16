import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./bannercards.css"


const BannerLaptop = () => {
    return (
        <div  className="banner_cards_container">
        <Card  className="electronic-card">
        <Card.Title>Upgrade your home | Amazon Brands & more</Card.Title>
          
       
           <div className="bannercards_img">
          
           <Card className="cards_inside">
           <a href="#watch">
          <Card.Img variant="top" src="./images/51nogtZqnLL._SY450_.jpg" />
          </a>
          <Card.Text style={{paddingLeft:'20px'}}>
              Smart Watch 
            </Card.Text>
          </Card>
          <Card className="cards_inside">
          <a href="#watch">
          <Card.Img variant="top" src="./images/61u2dhY-JBL._SY355_.jpg" />
         </a>
          <Card.Text style={{paddingLeft:'20px'}}>
          Watch 
            </Card.Text>
          </Card>
          <Card className="cards_inside">
          <a href="#mobile">
         <Card.Img variant="top" src="./images/71yzJoE7WlL._SX569_.jpg" />
         </a>
         <Card.Text style={{paddingLeft:'20px'}}>
              Mobile 
            </Card.Text>
         </Card>
         <Card className="cards_inside">
         <a href="#headphone">
          <Card.Img variant="top" src="./images/51xxA+6E+xL._SY355_.jpg" />
          </a>
          <Card.Text style={{paddingLeft:'20px'}}>
              HeadPhone
            </Card.Text>
          </Card>
          
          </div>
          
        </Card>
        
        </div>
  )
}

export default BannerLaptop