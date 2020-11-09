import React from 'react'
import styled from 'styled-components'
import { Button } from '../elements/button'
import Answer from '../structure/Answer'
const Wrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 440px;
margin: auto;
& > section{
    &:nth-child(1){
        text-align: center;
        padding: 20px;
        
        & > h1{
            font-size: 1.6rem;
            font-weight: 500;
        }
        & > p{
            opacity: .7;
            margin: 20px;
        }
    }
}
& > button{
    margin: auto;
    margin-top: 35px;
    padding: 15px 30px;
}
${p=>p.theme.media.desktop2}{
    max-width: unset;
    & > section{
        &:nth-child(1){
            max-width:440px;
            margin: auto;
        }
        &:nth-child(2){
            margin: auto;
            max-width: 600px;
            & > div{
                padding: 0;
                & > div{
                    & > h2{
                        padding: 30px 0;
                        font-size: 1.4rem;
                    }
                }
                &:nth-child(1){
                    border-top: 2px solid rgba(0,0,0,.2);
                }
            }
        }
    }
} 
`
const content = [
    {question: 'What is Bookmark?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'},
    {question: 'How can I request a new browser?', answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'},
    {question: 'Is there a mobile app?', answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'},
    {question: 'What about other Chromium browsers?', answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'},
]

export default function FAQ() {
    return (
        <Wrapper>
            <section>
                <h1>Frequently Asked Questions</h1>
                <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            </section>
            <section>
                {content.map((content, index)=><Answer key={index} index={index} content={content}/>)}
            </section>
            <Button color='color1'>More Info</Button>
        </Wrapper>
    )
}
