import 'bootstrap/dist/css/bootstrap.min.css';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";


function NavBar(){

    return(
    <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
    <h3 className="mx-4" id="logo">Seach<span>Name</span></h3>
    </a>
     <div class="navbar-brand icons">
     <a className='mx-2' href="https://github.com/Guimonteirol" target="_blank" rel="noreferrer"> <BsGithub size={25} color="FFF" /></a>
     <a className='mx-2' href="https://www.linkedin.com/in/guilhermemonteirol/" target="_blank" rel="noreferrer"><BsLinkedin size={25} color="FFF" /></a>
     <a className='mx-2' href="https://www.linkedin.com/in/guilhermemonteirol/" target="_blank" rel="noreferrer"><BsWhatsapp size={25} color="FFF" /></a>

     </div>
  </nav>
  
    )

}

export default NavBar