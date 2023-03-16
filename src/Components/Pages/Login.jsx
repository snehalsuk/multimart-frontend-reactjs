import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

import Base from '../Base'
import { loginUser } from '../../services/user-service'
import { doLogin } from '../../auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();

    const [loginDetail,setLoginDetail]=useState({
        username:'',
        password:''
    })




    const handleChange=(event,field)=>{
        let actualValue=event.target.value
        setLoginDetail({
            ...loginDetail,
            [field]:actualValue
        })
    }

    const handleReset=()=>{
        setLoginDetail({
            username:'',
            password:''
        })
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(loginDetail)  
        if(loginDetail.username.trim=='' || loginDetail.password.trim==''){
            // toast.error("Username is required")
            return;
        } 

        loginUser(loginDetail).then((data)=>{
            console.log("user login")
            console.log(data)

            doLogin(data,()=>{
                console.log("login detail is saved to localstorage")
           
           navigate("/cart");
           
            })

            // toast.success("Login success")
        }).catch(error=>{
            console.log(error)
            // toast.error("Something went wrong")
        })
     }


     const clickSign=()=>{
        navigate("/signup");
     }

  return (
    <Base>
    <Container>
        <Row className="mt-4">
            <Col sm={{size:6,offset:3}}>
            
<Card>
    <CardHeader style={{textAlign:"center",border:"none",color:"teal"}}>
        <h5>Login Here</h5>
    </CardHeader>
    <CardBody>
        <Form onSubmit={handleFormSubmit}>
        
            <FormGroup>
                <Label for="email">Username</Label>
                <Input 
                type="name"
                placeholder="Enter Name"
                id="name"
                value={loginDetail.username}
                onChange={(e)=> handleChange(e,'username')}
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input 
                type="password"
                placeholder="Enter password"
                id="password"
                value={loginDetail.password}
                onChange={(e)=> handleChange(e,'password')}
                />
            </FormGroup>
            <Container className="text-center">
                <Button color="primary">Submit</Button>
                <Button onClick={handleReset} color="secondary" type="reset" className="ms-2">Reset</Button>
           
            </Container>
            </Form>
            </CardBody>
            </Card>
            <Container>
            Not having an account? <a  href=''
            onClick={clickSign}>SignUp</a>
                
              
        </Container>
            </Col>
            </Row>
            </Container>
</Base>
  )
}

export default Login