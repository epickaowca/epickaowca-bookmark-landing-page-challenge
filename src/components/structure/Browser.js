import React from 'react'
import bg from '../../asset/bg-dots.svg'
import { Button } from '../elements/button'
import styled from 'styled-components'

const Wrapper = styled.div`
border-radius: 10px;
box-shadow: 0 10px 15px rgba(0,0,0,.1);
max-width: 280px;
height: 350px;
& > img{
    margin: 20px 0 ;
}
& > h2{
    font-weight: 500;
    font-size: 1.4rem;
}
& > p{
    opacity: .7;
    margin: 20px 0;
}
& > button{
    padding: 15px  30px;
    font-weight: 400;
    margin-top: 10px;
}
& > img{
    &:nth-child(4){
        width: 100%;
    }
}
`

export default function Browser({content}) {
    const { title, ver } = content
    return (
        <Wrapper>
            <img src={require(`../../asset/logo-${title.toLowerCase()}.svg`).default}  alt='browserLogo'/>
            <h2>Add to {title}</h2>
            <p>Minimum version {ver}</p>
            <img src={bg}  alt='background'/>
            <Button color='color1'>Add & Install Extension</Button>
        </Wrapper>
    )
}
