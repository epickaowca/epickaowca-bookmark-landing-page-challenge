import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../elements/button'
import errIco from '../../asset/icon-error.svg'

const Wrapper = styled.div`
margin-top: 100px;
background: ${p=>p.theme.color1};
min-height: 250px;
display: flex;
flex-direction: column;
text-align: center;
padding: 50px 20px;
align-items: center;
& > p{
    margin-top: 10px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: .8rem;
}
& > h1{
    max-width: 360px;
    color: white;
    font-size: 1.5rem;
    margin: 20px 0;
}
& > form{
    width: 280px;
    display: flex;
    flex-direction: column;
    & > label{
        position: relative;
        & > input{
            width: 100%;
            margin-bottom: 45px;
            padding: 15px;
            background: white;
            outline: none;
            border: none;
            border-radius: 5px;
            ${p=>!p.valid && 'border: 2px solid red; border-bottom: 4px solid red;'};
        }
        & > img{
            ${p=>!p.valid ? 'display: block;' : 'display: none;'};
            position: absolute;
            right: 10px;
            top: 25%;
            transform: translateY(-50%);
            height: 25px;
        }
        & > div{
            ${p=>!p.valid ? 'display: block;' : 'display: none;'};
            position: absolute;
            width: 100%;
            background: red;
            color: white;
            bottom: 20px;
            height: 30px;
            padding-top: 8px;
            font-size: .9rem;
            text-align: left;
            padding-left: 15px;
            font-style: italic;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
}
${p=>p.theme.media.desktop1}{
    padding: 100px 20px;
    & > form{
        flex-direction: row;
        width: 400px;
        align-items: center;
        justify-content: space-between;
        & > label{
            & > input{
                width: 250px;
                margin: 0;
                height: 45px;
            }
            & > img{
                top: 40%;
            }
            & > div{
                bottom: -20px;
            }
        }
        & > button{
            height: 49px;
        }
    }
}

${p=>p.theme.media.desktop3}{
    & > h1{
        font-size: 2rem;
        max-width: 400px;
    }
    & > p{
        font-size: .9rem;
        letter-spacing: 4px;
    }
    & > form{
        flex-direction: row;
        width: 550px;
        align-items: center;
        justify-content: space-between;
        & > label{
            & > input{
                width: 350px;
                margin: 0;
                height: 45px;
            }
        }
        & > button{
            height: 49px;
        }
    }
}

`

export default function Contact() {
    const [emailValid, setEmailValid] = useState(true)
    const formHandler = (e)=>{
        e.preventDefault()
        const email = e.target.children[0].children[1].value
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            setEmailValid(true)
        }else{
            setEmailValid(false)
        }
    }
    return (
        <Wrapper valid={emailValid}>
            <p>35,000+ already joined</p>
            <h1>Stay up-to-date with what we’re doing</h1>
            <form onSubmit={formHandler}>
                <label>
                    <img src={errIco}/>
                    <input placeholder="Enter your email address" type="text"></input>
                    <div>Whoops, make sure it's an email</div>
                </label>
                <Button special color="color2">Contact Us</Button>
            </form>
        </Wrapper>
    )
}
