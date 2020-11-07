import React from 'react'
import Browsers from '../structure/Browser'
import styled from 'styled-components'

const Wrapper = styled.div`
margin-top: 100px;
text-align: center;
& > h1{
    font-size: 1.7rem;
    font-weight: 500;
}
& > p{
    opacity: .7;
    max-width: 420px;
    margin: 20px auto;
}
& > div{
    margin: 40px;
    & > div{
        margin: 50px auto;
    }
}
${p=>p.theme.media.desktop2}{
 & > div{
    display: flex;
    & > div{
        width: 250px;
        & > button{
            font-size: .9rem;
            padding: 10px 20px;
        }
        &:nth-child(2){
            margin-top: 100px;
        }
        &:nth-child(3){
            margin-top: 150px;
        }
    }
 }   
}
${p=>p.theme.media.desktop3}{
 & > div{
     max-width: 1140px;
     margin: auto;
     display: flex;
     & > div{
         width: 320px;
         & > button{
            padding: 15px  30px;
         }
     }
 }   
}
`
const content = [
    {title: 'Chrome', ver: '62'},
    {title: 'Firefox', ver: '55'},
    {title: 'Opera', ver: '46'}
]

export default function Extensions() {
    return (
        <Wrapper>
            <h1>Download the extension</h1>
            <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            <div>
                {content.map((content, index)=><Browsers key={index} content={content} />)}
            </div>
        </Wrapper>
    )
}
