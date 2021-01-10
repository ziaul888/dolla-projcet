import React, {useState} from 'react'
//import SideBar from '../component/Sidebar'
import NavBar from '../component/Navbar';
import { HeroSection } from '../HeroSection';
import { InfoSection } from '../component/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../component/InfoSection/Data';
import { Service } from '../component/Service/Index';

export const Home = () => {
  const [isOpen, setIsOpen] =useState(false)
       
   const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
           
            <NavBar toggle={toggle}/>
            <HeroSection/>
             <InfoSection {...homeObjOne}/>
             <InfoSection {...homeObjTwo}/>
             <InfoSection {...homeObjThree}/>
             <Service/>
        </>
    )
}
