import React, {useState} from 'react'
import SideBar from '../component/Sidebar'
import NavBar from '../component/Navbar';

export const Home = () => {
  const [isOpen, setIsOpen] =useState(false)
       
   const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar  isOpen={isOpen} toggle={toggle}/>
             <NavBar toggle={toggle}/>
        </>
    )
}
