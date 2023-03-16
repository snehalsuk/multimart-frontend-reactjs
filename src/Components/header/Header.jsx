import React, { useEffect, useState } from 'react'
import "./header.css"
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { loadAllPosts } from '../../services/post-services';
import BannerCards from '../BannerCards/BannerCards';
import Card from 'react-bootstrap/Card';
import BannerEarphone from '../BannerCards/BannerEarphone';
import BannerLaptop from '../BannerCards/BannerLaptop';
import BannerClothes from '../BannerCards/BannerClothes';
import "./data"
import data from './data'



const Header = () => {

    const [postContent,setPostContent]=useState([])

        useEffect(()=>{

            loadAllPosts().then((data)=>{
                console.log(data);
                setPostContent(data)
            }).catch(error=>{
                console.log(error)
            })
    
        },[])

        // const [item, setItem]=useState(data);




  return (
   
    <div className="banner_text_image_container">
  
    <Carousel indicators={false} >
   {
     
     postContent.map(user =>{
    //  const {image}=user;
 return (

    <Carousel.Item 
     interval={10000}
    >
  
  <img className="banner-img" src={`http://localhost:8080/banner/image/${user.image}`} /> 

      
   
    </Carousel.Item>
   
    )
})
  
   }

 
    


     <Card className="items_cards"> 
     <BannerCards />
   <BannerClothes/>
   <BannerEarphone/>
   <BannerLaptop/>
     
     
  </Card>  
  
    </Carousel>
  
   </div>

 
   

  
  )
}

export default Header