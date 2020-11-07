import React, { useEffect } from 'react'
import styled from 'styled-components'
import LandStructure from '../structure/LandStructure'
import Ilustration1 from '../../asset/illustration-features-tab-1.svg'
import Ilustration2 from '../../asset/illustration-features-tab-2.svg'
import Ilustration3 from '../../asset/illustration-features-tab-3.svg'
import { useDispatch, useSelector } from 'react-redux'
import { SetFeature } from '../../redux/action'

const Wrapper = styled.div`
margin-top: 50px;
& > div{
    &:nth-child(1){
        margin: auto;
        max-width: 400px;
        padding: 20px;
        text-align: center;
        & > h1{
            font-size: 2rem;
            font-weight: 500;
        }
        & > p{
            margin: 20px 0;
            opacity: .6;
        }
        & > section{
            margin-top: 40px;
            & > div{
                cursor: pointer;
                position:relative;
                border-bottom: 1px solid rgba(0,0,0,.5);
                padding: 17px;
                &:first-child{
                    border-top: 1px solid rgba(0,0,0,.5);
                }
                & > p{
                    font-weight: 500;
                    opacity: .7;
                    font-size: 1.2rem;
                    margin: auto;
                    width: auto;
                    &:hover{
                        opacity: 1;
                        color: ${p=>p.theme.color2};
                    }
                }
                &:nth-child(${p=>p.feature}){
                    & > p{
                        opacity: 1;
                    }
                    & > div{
                        display: block;
                    }
                }
                & > div{
                    position: absolute;
                    width: 180px;
                    height: 5px;
                    background: ${p=>p.theme.color2};
                    bottom: -1px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: none;
                }
            }
        }
    }
}
${p=>p.theme.media.desktop1}{
    & > div{
        &:nth-child(1){
            max-width: 700px;
            & > p{
                max-width: 500px;
                margin: 20px auto;
            }
            & > section{
                display: flex;
                justify-content: center;
                & > div{
                    padding-bottom: 30px;
                    border-top: none !important;
                    & > div{
                        width: 100%;
                        height: 5px;
                    }
                }
            }
        }
    }
}
${p=>p.theme.media.desktop3}{
    & > div{
        &:nth-child(1){
            max-width: 900px;
            & > section{
                border-bottom: 1px solid rgba(0,0,0,.5);
                & > div{
                    border-bottom: none;
                    margin: 0 40px;
                }
            }
        }
    }
}
`
const content1 = {
    title:"Bookmark in one click",
    description:"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    button1:"More Info",
    img: Ilustration1,
}

const content2 = {
    title:"Intelligent search",
    description:"ur powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    button1:"More Info",
    img: Ilustration2,
}

const content3 = {
    title:"Share your bookmarks",
    description:"Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    button1:"More Info",
    img: Ilustration3,
}


let features = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']

export default function Features() {
    const dispatch = useDispatch()
    const { feature } = useSelector(state => state)

    return (
        <Wrapper feature={feature}>
            <div>
                <h1>Features</h1>
                <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                <section>
                    {features.map((item, index)=><div onClick={()=>dispatch(SetFeature(index+1))} key={index}><p>{item}</p><div></div></div>)}
                </section>
            </div>
            <LandStructure case2 content={feature === 1 ? content1 : feature === 2 ? content2 : content3} />
        </Wrapper>
    )
}
