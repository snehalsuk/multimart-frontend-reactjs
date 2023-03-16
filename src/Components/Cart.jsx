import React from 'react'
import Base from './Base'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'



const Cart = () => {
  return (
   <Base>
   <Container style={{height:"50rem"}}>
   <Row className="mt-4">
            <Col sm={{size:7,offset:3}}>
            
<Card>
    <CardHeader style={{textAlign:"center",border:"none",color:"teal"}}>
      <h5>Shopping Cart</h5>
    </CardHeader>
    <CardBody>

        Cart functionality coming soon.....
    </CardBody>
            </Card>


            <Card style={{top:"30px"}}>
    <CardHeader style={{textAlign:"center",border:"none",color:"teal"}}>
      <h5>Checkout</h5>
    </CardHeader>
    <CardBody>

        Checkout functionality coming soon.....
    </CardBody>
            </Card>

            </Col>
            </Row> 
   </Container>
   
   </Base>
  )
}

export default Cart