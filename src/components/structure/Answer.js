import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../asset/icon-arrow.svg'
import gsap from 'gsap'
import { useSelector, useDispatch } from 'react-redux'
import { SetFaq } from '../../redux/action'

const Wrapper = styled.div`
padding: 15px;
& > hr{
    border: 1px solid rgba(0,0,0,.2);
    margin-top: 0;
}
& > div{
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    & > h2{
        font-size: .9rem;
    }
    & > div{
        display: flex;
        & > svg{
            margin: auto;
        }
    }
    &:hover{
        & > h2{
            color: ${p=>p.theme.color2}
        }
    }
} 
& > p{
    opacity: .7;
    height: 0;
    overflow: hidden;
    line-height: 30px;
}
${p=>p.theme.media.mobile1}{
    & > div{
        & > h2{
            font-size: 1rem;
        }
    }
}
`

export default function Answer({content, index }) {
    const dispatch = useDispatch()
    const { faq } = useSelector(state=>state)
    const pElem = useRef()
    const arrowElem = useRef()
    const { question, answer } = content
    useEffect(()=>{
        if(!faq || !pElem || !arrowElem) return
        let tl = gsap.timeline()
        const { current: p } = pElem
        const { current: arrow } = arrowElem
        if(faq[index]===true){
            tl.to(p, {duration: .5, height: 'auto'})
            .to(p, {duration: .5, css:{marginBottom:20}}, "-=.5")
            .to(arrow, {duration: .5, rotate: '180deg'}, "-=.5")
            .to(arrow.children[0], {duration: .5, stroke: '#FA5757'}, "-=.5")
        }else{
            tl.to(p, {duration: .5, height: '0'})
            .to(p, {duration: .5, css:{marginBottom:0}}, "-=.5")
            .to(arrow, {duration: .5, rotate: '0deg'}, "-=.5")
            .to(arrow.children[0], {duration: .5, stroke: '#5368DF'}, "-=.5")
        }
    }, [faq, index])

    return (
        <Wrapper>
            <div onClick={()=>dispatch(SetFaq(index))}>
                <h2>{question}</h2>
                <div>
                    <Arrow ref={arrowElem} />
                </div>
            </div>
            <p ref={pElem}>{answer}</p>
            <hr></hr>
        </Wrapper>
    )
}
