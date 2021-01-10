import React from 'react' 
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from 'react-icons/fa'
import {FooterContainer,FooterWrap,FooterLinksContainer,
FooterLinkItems,
FooterLinkTitle,
FooterLink,
FooterLinksWrapper,
SocialMediaWrap,
SocialLogo,
WebsiteRight,SocialIcon,SocialIconLink,SocialMedia}  from './FooterElement'

export const Footer = () => {
return (
<FooterContainer>
    <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle> About Us</FooterLinkTitle>
                    <FooterLink to='/signin'>How it works</FooterLink>
                    <FooterLink to='/signin'>Testimonials</FooterLink>
                    <FooterLink to='/signin'>Careers</FooterLink>
                    <FooterLink to='/signin'>Investors</FooterLink>
                    <FooterLink to='/signin'>Terms of Servoce</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle> Contact US</FooterLinkTitle>
                    <FooterLink to='/signin'>contact</FooterLink>
                    <FooterLink to='/signin'>Testimonials</FooterLink>
                    <FooterLink to='/signin'>Careers</FooterLink>
                    <FooterLink to='/signin'>Investors</FooterLink>
                    <FooterLink to='/signin'>Terms of Servoce</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to='/signin'>Submit videos</FooterLink>
                    <FooterLink to='/signin'>Testimonials</FooterLink>
                    <FooterLink to='/signin'>Careers</FooterLink>
                    <FooterLink to='/signin'>Investors</FooterLink>
                    <FooterLink to='/signin'>Terms of Servoce</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to='/signin'>Facebook</FooterLink>
                    <FooterLink to='/signin'>Youtube</FooterLink>
                    <FooterLink to='/signin'>Instagram</FooterLink>
                    <FooterLink to='/signin'>Investors</FooterLink>
                    
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
        <SocialMediaWrap>
            <SocialLogo to='/'>
                dolla
            </SocialLogo>
            <WebsiteRight>dolla @ {new Date().getFullYear()} all right reserved</WebsiteRight>
            <SocialIcon>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                    <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                    <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                    <FaYoutube/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                    <FaTwitter/>
                </SocialIconLink>
            </SocialIcon>
        </SocialMediaWrap>
        </SocialMedia>
    </FooterWrap>
</FooterContainer>
)
}

