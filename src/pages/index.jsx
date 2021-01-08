import React, {useState} from 'react'
import SideBar from '../component/Sidebar'
import NavBar from '../component/Navbar';
import { HeroSection } from '../HeroSection';
import { InfoSection } from '../component/InfoSection';
import { homeObjOne } from '../component/InfoSection/Data';

export const Home = () => {
  const [isOpen, setIsOpen] =useState(false)
       
   const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar  isOpen={isOpen} toggle={toggle}/>
             <NavBar toggle={toggle}/>
             <HeroSection/>
             <InfoSection {...homeObjOne}/>
        </>
    )
}
