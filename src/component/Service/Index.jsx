import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'
import {ServiceContainer,
    ServiceH1,
    ServiceWrapper,
    ServiceCard,
    ServiceIcon,
    ServiceH2,ServiceP} from './ServiceElement'

export const Service = () => {
return (
<ServiceContainer id="service">
    <ServiceH1>Our Services</ServiceH1>
    <ServiceWrapper>
        <ServiceCard>
            <ServiceIcon src={Icon1}/>
                <ServiceH2>Reduce expenses </ServiceH2>
                <ServiceP>We help reduce your fess and increase your overall revene</ServiceP>
        </ServiceCard>
        <ServiceCard>
            <ServiceIcon src={Icon2}/>
                <ServiceH2>Virtual offices</ServiceH2>
                <ServiceP>We help reduce your fess and increase your overall revene</ServiceP>
            
        </ServiceCard>
        <ServiceCard>
            <ServiceIcon src={Icon3}/>
                <ServiceH2>Premium benefits </ServiceH2>
                <ServiceP>We help reduce your fess and increase your overall revene</ServiceP>
           
        </ServiceCard>
    </ServiceWrapper>
</ServiceContainer>
)
}