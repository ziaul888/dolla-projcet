import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,
    SidebarMenu,SidebarLink,SideBtnWrapper,SidebarRoute} from "./SidebarElement"


const SideBar = ( {isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="services">Services</SidebarLink>
                    <SidebarLink to="discover">Discover</SidebarLink>
                    <SidebarLink to="signup">Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrapper>
                <SidebarRoute to="./signin">
                    Sign In
                </SidebarRoute>
                </SideBtnWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default SideBar