import React from 'react'
//import img from '../../images/svg-1.svg'

import {InfoContianer,InfoWrapper,InfoRow,Colum1,TextWrapper,TopLine,
    Heading,Subtitle,BtnWrap,Colum2,ImgWrap,Img} from './InfoElement';
    import {Button} from '../ButtonElement'

export const InfoSection = ({lightText,lightBg,id,imgStart,topLine,
    darkText,headline,description,buttonLabel,alt,primary,dark,dark2,img}) => {
return (
<>
    <InfoContianer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Colum1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to="home"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1: 0}
                            dark2={dark2 ? 1: 0}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Colum1>
                <Colum2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                </Colum2>
            </InfoRow>
        </InfoWrapper>
    </InfoContianer>
</>
)
}