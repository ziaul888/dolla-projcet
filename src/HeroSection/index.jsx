import React,{useState} from 'react'
import {Button} from '../component/ButtonElement'
import {HeroBg,VideoBg,
     HeroContainer,
     HeroContent,
     HeroH1, HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight} from './HeroElement'
import Video from '../videos/video.mp4'
//import { Button } from 'react-scroll'

export const HeroSection = () => {
 const [hover,setHover]=useState(false)
  
  const onHover=()=>{
      setHover(!hover)
  }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy             
                </HeroH1>
                <HeroP> Sign up for a new Account today and recevie $500 in credit towards your next payment</HeroP>
                <HeroBtnWrapper >
                <Button to="signup"
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
                dark="true"
                   >Get start {hover ? <ArrowForward/>: <ArrowRight/>} 
                   </Button>
             </HeroBtnWrapper>
             </HeroContent>
        </HeroContainer>
    )
}
