import React from 'react'
import "./footer.css"
import { useNavigate } from 'react-router-dom'


const Footer = () => {

  const navigate=useNavigate();

  const handleregister=()=>{

    navigate("/signup");
  }

  return (
    <section className="container-bottom" >

       
    
        <div className="footer_logo">
        
     
        <section class="mb-4">
    
      <a class="btn btn-outline-light btn-floating m-1" href="https://m.facebook.com/100002630854162" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

   
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.twitter.com" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

    
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.google.com" role="button"
        ><i class="fab fa-google"></i
      ></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram/snehal_sukhadeve" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

    
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/snehal-sukhadeve-2980551a2/" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/snehalsuk" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
     

  
    <div  >
  
      
  <a className="footer_home"   href="#mobile">Mobile</a>

  <a className="footer_features" href="#laptop">laptop</a>

  <a className="footer_pricing" href="#headphone">Headphone</a>

  <a className="footer_features" href="#sofa">Sofa</a>

<a className="footer_pricing" href="#watch">Watch</a>



</div>

      </div>


      <section className="footer_register">
        
        <div className="register">
        <p className="register_free">
          <span >Register for free</span>
          </p>
         
          <button type="button" class="btn btn-outline-light btn-rounded"
          onClick={handleregister}>
            Sign up!
          </button>
       
      </div>
        </section>
        <section className="footer_copyright">
        <div className="footer_copy" >
    © 2020 Copyright : 
    <a className="footer_text" href="https://IinvestMe.com/"> IinvestMe.com</a>
  </div>
        </section>
    </section>
    
  )
}

export default Footer