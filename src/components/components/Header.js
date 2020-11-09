import React from 'react'
import Nav from '../structure/Nav'
import { ReactComponent as Logo } from '../../asset/logo-bookmark.svg'
import { ReactComponent as Close } from '../../asset/icon-close.svg'
import { ReactComponent as Hamburger } from '../../asset/icon-hamburger.svg'
import styled from 'styled-components'
import { toggleNav } from '../../redux/action'
import { useSelector, useDispatch } from 'react-redux'

const HeaderElem = styled.header`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    z-index: 6;
    overflow: auto;
    ${p=>p.navEject ? `background:${p.theme.color6};position: fixed; top: 0; width: 100vw; min-height: 100vh;` : 'position: relative'}
    
    & > svg{
        position: relative;
        z-index: 6;
        & > g{
            ${p=>p.navEject && '& > path{fill: white; } & > g{ & > circle { fill: white;}& > path{fill: black;}}'}
        }
    }
    ${p=>p.theme.media.desktop1}{
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        background: white;
        position: relative;
        width: 100%;
        min-height: unset;
        top: unset;

        & > svg{
            & > g{
                & > path{
                    fill: #242A45;
                }
                & > g{
                    & > circle{
                        fill: #5267DF;
                    }
                    & > path{
                        fill: #fff;
                    }
                }
            }
            &:nth-child(2){
                display: none;
            }
        }
    }
    ${p=>p.theme.media.desktop4}{
        padding-left: 200px;
    }
`


export default function Header() {
    const { navEject } = useSelector(state=>state)
    const dispatch = useDispatch()
    return (
        <HeaderElem navEject={navEject}>
            <Logo />
            {navEject ? <Close onClick={()=>dispatch(toggleNav())} /> : <Hamburger onClick={()=>dispatch(toggleNav())} /> }
            <Nav />
        </HeaderElem>
    )
}
