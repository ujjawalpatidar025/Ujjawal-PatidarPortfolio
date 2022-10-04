import React from 'react'
import {useState,useEffect} from 'react'
import DarkIcon from '@material-ui/icons/Brightness2';
import BrightnessIcon from '@material-ui/icons/Brightness5';
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar_main = () => {
    const [Theme, setTheme] = useState("light_theme");
   
    const toogle= ()=>{
        
        if(Theme==="light_theme")
        {
            
            setTheme("dark_theme");
            
        }
        else
        {
            
            setTheme("light_theme")
        }
        
    }
    useEffect(()=>{
        document.body.className=Theme;
    },[Theme]);
    return(
        <div className='navbar'>
        <div className='navbar_main'>
            <div className='logo'>Ujjawal</div>
            <div className='list'>
                <ul>
                    <li><Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={700} >
         Home
        </Link></li>
                    <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={700} >
          About
        </Link></li>
                    <li><Link activeClass="active" to="experience" spy={true} smooth={true} offset={50} duration={700} >
            Education
                 </Link></li>
                    <li><Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={700} >
         Skills
        </Link></li>
                    <li><Link activeClass="active" to="profiles" spy={true} smooth={true} offset={50} duration={700} >
          Profiles
        </Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={700} >
          Contact
        </Link></li>
                    
                </ul>
                
               
            </div>
           {Theme==="light_theme"?<DarkIcon onClick={()=>toogle()}/>:<BrightnessIcon onClick={()=>toogle()}/>}

            </div>
        </div>

    )
}

export default Navbar_main
