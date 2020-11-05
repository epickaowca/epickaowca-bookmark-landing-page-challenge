import React from 'react'
import { Button } from '../elements/button'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import {ReactComponent as Fb} from '../../asset/icon-facebook.svg'
import {ReactComponent as Tw} from '../../asset/icon-twitter.svg'

const NavElem = styled.nav`
    display: ${p=>p.navEject ? 'flex' : 'none'};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 5;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    & > p{
        font-size: 1.2rem;
        padding-bottom: 15px;
        color: white;
        margin: 15px;
        border-bottom: 1px solid rgba(255,255,255,.2);
        text-transform: uppercase;
        &:first-child{
            margin-top: 50px;
            padding-top: 15px;
            border-top: 1px solid rgba(255,255,255,.2);
        }
    }
    & > button{
        margin: 0 20px;
        margin-top: 15px;
        background: transparent;
        font-size: 1.2rem;
        text-transform: uppercase;
    }
    & > span{
        margin-bottom: 20px;
        margin-top: 150px;
        & > svg{
            margin: 0 20px;
        }
    }
    ${p=>p.theme.media.desktop1}{
        position: relative;
        left: unset;
        transform: unset;
        display: flex;
        flex-direction: row;
        width: unset;
        padding: unset;
        align-items: center;
        & > p{
            cursor: pointer;
            font-size: .9rem;
            color: black;
            margin: 0 20px;
            padding: 0;
            &:nth-child(1){
                margin: 0;
                padding: 0;
            }
            &:hover{
                
            }
        }
        & > button{
            font-size: .9rem;
            margin: 0;
            background: ${p=>p.theme.color2};
            font-weight: 400;
        }
        & > span{
            display: none;
        }
    }
`
export default function Nav() {
    const { navEject }= useSelector(state=>state)
    return (
        <NavElem navEject={navEject}>
            <p>Features</p>
            <p>Pricing</p>
            <p>Contact</p>
            <Button color="color2">Login</Button>
            {navEject && <span><Fb /><Tw /></span>}
        </NavElem>
    )
}
