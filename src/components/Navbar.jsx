import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  const url = window.location.href;
  console.log(url);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });


    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

   
}, []);
  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
  };
  return (
    <div className={scrollPosition > 100  || window.location.href !== "http://localhost:3000/" ? 'navbar nav-scrolled':`navbar`}>
        <h3  onClick={()=> navigate('/')} style={{fontSize:"30px",lineHeight:"24px",opacity: 0.75}} ><span style={{color: "#FF1493",fontFamily: "Aclonica"}}>StrongHer</span><br /><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fitness</span></h3>
       
          {url ===  "http://localhost:3000/" || url ===  "http://localhost:3000/#about"  || url ===  "http://localhost:3000/#search"  ?
            <ul>
              <li onClick={()=> navigate('/')} >Home</li>
              <a href="#about"><li>About</li></a>
              <a href="#search"><li>Search</li></a>
            </ul>
          
          :

            <ul>
              <li onClick={()=> navigate('/')} >Home</li>
              <li  onClick={()=> navigate('/#about')} >About</li>
             <li  onClick={()=> navigate('/#search')}>Search</li>
            </ul>
          }
          
  
    </div>
  )
}

export default Navbar