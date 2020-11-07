import React from 'react'
import styled, { css } from 'styled-components'
import { Button } from '../elements/button'


const Wrapper = styled.div`
margin-top: 50px;
& > div{
    &:nth-child(1){
        margin-bottom: 50px;
        position: relative;
        display: flex;
        justify-content: flex-${p=>p.case2 ? 'start': 'end'};
        & > div{
            position: absolute;
            width: 250px; 
            height: 175px;
            background: ${p=>p.theme.color1};
            top: 50px;
            z-index: 1;
            ${p=>p.case2 ? 
                css`border-top-right-radius: 50%;
                    border-bottom-right-radius: 50%;
                    left: 0;
                `:
                css`border-top-left-radius: 50%;
                    border-bottom-left-radius: 50%;
                    right: 0;
                `}
        }
        & > img{
            object-fit: contain;
            width: 300px;
            ${p=>p.case2 && 'height: 193px'};
            position: relative;
            z-index: 2;
            ${p=>p.case2 && 'margin-left: 20px'}
           
        }
    }
    &:nth-child(2){
        margin: auto;
        max-width: 360px;
        padding: 20px;
        text-align: center;
        & h1{
            font-size: ${p=>p.case2 ? '1.6' : '2'}rem;
            font-weight: 500;
        }
        & p {
            margin: 20px 0;
            opacity: .7;
        }
        & section{
            display: flex;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            justify-content: ${p=>p.case2 ? 'flex-start' : 'center'};

            & > button{
                font-size: .9rem;
                white-space: nowrap;
                padding: 15px 20px;
                margin: ${p=>p.case2 ? '10px 0' : '10px'};
                ${p=>p.case2 && 'display: none'};
            }
        }
    }
}
${p=>p.theme.media.mobile1}{
    & div{
        &:nth-child(1){
            & > img{
                width: 400px;
                ${p=>p.case2 && 'height: 258px'};
            }
            & > div{
                width: 320px;
                height: 235px;
                top: 70px;
            }
        }
        &:nth-child(2){
            max-width: 370px;
            & > h1{
                font-size: ${p=>p.case2 ? '1.8' : '2.2'}rem;
            }
            & > p{
                font-size: 1.2rem;
            }
            & > section{
                & > button{
                    font-size: 1rem;
                }
            }
        }
    }
}
${p=>p.theme.media.desktop1}{
    margin-top: 70px;
    display: flex;
    flex-direction: row${p=>p.case2 ? '' : '-reverse'};
    & > div{
        &:nth-child(1){
            & > img{
                width: 300px;
                ${p=>p.case2 && 'height: 193px'};
            }
            & > div{
                width: 250px; 
                height: 175px;
            }
        }
        &:nth-child(2){
            text-align: left;
            & > h1{
                font-size: ${p=>p.case2 ? '1.6' : '2'}rem;
            }
            & > p{
                font-size: 1rem;
            }
            & > section{
                & > button{
                    font-size: .9rem;
                    display: block;
                }
            }
        }
    }
}
${p=>p.theme.media.desktop2}{
    & div{
        &:nth-child(1){
            & > img{
                width: 400px;
                ${p=>p.case2 && 'height: 258px'};
                margin-${p=>p.case2 ? 'left':'right'} 30px;
            }
            & > div{
                width: 320px;
                height: 235px;
                top: 70px;
            }
        }
        &:nth-child(2){
            max-width: 370px;
            & > h1{
                font-size: ${p=>p.case2 ? '1.8' : '2.2'}rem;
            }
            & > p{
                font-size: 1.2rem;
            }
            & > section{
                & > button{
                    font-size: 1rem;
                }
            }
        }
    }
}
${p=>p.theme.media.desktop3}{
    & div{
        &:nth-child(1){
            & > img{
                width: ${p=>p.case2 ? '500' : '600'}px;
                ${p=>p.case2 && 'height: 322px'};
                margin-${p=>p.case2 ? 'left: 70px':'right: 50px'};
            }
            & > div{
                ${p=>p.case2 ? 'width: 400px; height: 300px' : 'width: 450px; height: 350px;'};
                top: 100px;
            }
        }
        &:nth-child(2){
            max-width: 410px;
            & > h1{
                font-size: ${p=>p.case2 ? '2' : '2.5'}rem;
            }
            & > p{
                font-size: 1.4rem;
            }
            & > section{
                & > button{
                    font-size: 1.1rem;
                }
            }
        }
    }
}

`

export default function LandStructure({content, case2}) {
    const { img, title, description, button1, button2} = content
    return (
        <Wrapper case2={case2}>
            <div>
                <img src={img} alt='heroPicture'/>
                <div></div>
            </div>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <section>
                    <Button color="color1">{button1}</Button>
                    {button2 && <Button color="special">{button2}</Button>}
                </section>
            </div>

        </Wrapper>
    )
}
