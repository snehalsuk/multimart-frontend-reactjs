import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap'
import { signUp } from '../../services/user-service'
import { NavLink as ReactLink } from 'react-router-dom';


import { useNavigate } from 'react-router-dom'
import Base from '../Base'




const Signup = () => {

    const navigate=useNavigate();

    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        roles:'',
        
    })
    const [error,setError]=useState({
        errors:{},
        isError:false
    })

    const resetData=()=>{
        setData({
            name:'',
        email:'',
        password:'',
        roles:'',
        })
    }


    const submitForm=(e)=>{
        e.preventDefault();
        console.log(data);
      

        signUp(data).then((resp)=>{
            console.log(resp);
            console.log("success log");
            // toast.success("User is registerd successfully "+resp.id);
         
            setData({
                name:'',
            email:'',
            password:'',
            roles:'',
            })
            navigate("/login")
        }).catch((error)=>{
            console.log(error)
            console.log("Error log")


            setError({
                error:error,
                isError:true
            })
        })
    }

const handleChange=(e,property)=>{
    console.log(e.target.value)
        setData({...data,[property]:e.target.value})

}

// useEffect(()=>{
//     console.log(data);
// },[data])

const clickLogin=()=>{

    navigate("/login");
}


  return (
    <Base>
    <Container>
        <Row className="mt-4">
            <Col sm={{size:6,offset:3}}>
            
<Card>
    <CardHeader style={{textAlign:"center",border:"none",color:"teal"}}>
       <h4>SignUp</h4>
    </CardHeader>
    <CardBody>
        <Form onSubmit={submitForm}>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input 
                type="text"
                placeholder="Enter name"
                id="name"
                onChange={(e)=>handleChange(e,'name')}
                value={data.name}
                invalid={error.errors?.response?.data?.name? true:false}
                />
            <FormFeedback>
            {error.errors?.response?.data?.name}
            
            </FormFeedback>


            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input 
                type="email"
                placeholder="Enter email"
                id="email"
                onChange={(e)=>handleChange(e,'email')}
                value={data.email}
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input 
                type="password"
                placeholder="Enter password"
                id="password"
                onChange={(e)=>handleChange(e,'password')}
                value={data.password}
               />
            </FormGroup>
            <FormGroup>
                <Label for="about">Roles</Label>
                <Input 
                type="text"
                placeholder="Enter role"
                id="roles"
                onChange={(e)=>handleChange(e,'roles')}
                // style={{height:"150px"}}
                value={data.roles}
               />
            </FormGroup>
            <Container className="text-center">
                <Button color="primary">Register</Button>
                <Button onClick={resetData} color="secondary" type="reset" className="ms-2">Reset</Button>
           
            </Container>
       
           
       
        </Form>

        
    </CardBody>
</Card>
<Container>
            Already Register? <a  href=''
            onClick={clickLogin}>Login</a>
                
              
        </Container>
</Col>
{/* {JSON.stringify(data)} */}

        </Row>

        
    </Container>
</Base>
  )
}

export default Signup