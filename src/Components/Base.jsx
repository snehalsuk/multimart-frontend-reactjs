import Footer from "./Footer/Footer";
import NavbarTop from "./Navbarr/NavbarTop";


const Base=({title="Welcome to website",children})=>{

    return(
        <div className="container-fluid p-0 m-0">
            <NavbarTop/>
            {children}
            <Footer/>
        </div>
        );
    };
    
    export default Base