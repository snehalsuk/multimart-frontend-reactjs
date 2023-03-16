import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Button, ButtonGroup, Form, Input, NavItem, NavLink } from 'reactstrap';
import { doLogout, getCurrentUserDetail, isLoggedIn } from '../../auth';
import { myAxios } from '../../services/helper';
import Search from '../Pages/Search';


const NavbarTop = () => {


  const navigate=useNavigate();

  const [searchdata,setSearchData]=useState();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const [login,setLogin]=useState(false)
  const [user,setUser]=useState(undefined)

  const[handlesearch,setHandleSearch]=useState()
  const [adddata, setAddData]=useState();

  useEffect(()=>{
    setLogin(isLoggedIn())
    setUser(getCurrentUserDetail())

  
  },[])


 




  const logout=()=>{

    doLogout(()=>{
    
      setLogin(false);
    navigate("/home")
    })
  }


  const handleClick=()=>{

    console.log("click")
    if(login){

        navigate("/cart")

     }else{
    navigate("/signup")
  }}

  const handleSearch=(e)=>{

setHandleSearch(e.target.value)


  }

  const handleSeachOpt=()=>{

    

      return myAxios.get(`/prod/products/search/${handlesearch}`)
      .then((data)=>{
        // console.log(data);
      
     
      setAddData(data);
      // console.log(adddata.data);
      
    navigate("/search",{state:{data:adddata.data}})
      }).catch(error=>{
      
      })
  


  }

  
  return (
 <>

<Navbar className="nav_banner" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand tag={ReactLink} to="/home" >
          <h3>MidNight</h3>
          </Navbar.Brand>
        <Nav className="me-auto">
         <NavItem>
              <NavLink tag={ReactLink} to="/home">
                Home
              </NavLink>
            </NavItem> 
           
           
            <Input type="search"
             placeholder='Search'
             onChange={(e)=> handleSearch(e)}
             />
            

            <Button className='ml-1' onClick={handleSeachOpt}><i class="fa fa-search" aria-hidden="true"></i></Button>
            
            <Button className='ml-4' onClick={handleClick} ><i class="fa fa-shopping-cart" aria-hidden="true">
            </i></Button> 
             
        
         
        </Nav>
        <Nav>

{
  
  login && (
    <>
    <NavItem >
      <NavLink onClick={logout} tag={ReactLink} to="/home">
        Logout
      </NavLink>
    </NavItem>

    {/* <NavItem>
      <NavLink>
        {user.email}
      </NavLink>
    </NavItem> */}

</>
  )
  
}

{
  !login && (
    <>
    <NavItem>
                <NavLink  tag={ReactLink} to="/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                Signup
              </NavLink>
            </NavItem>
    
    </>
  )
}
        
        </Nav>
      </Container>
  
       
      
    </Navbar>
  

 </>
  
  )
}

export default NavbarTop