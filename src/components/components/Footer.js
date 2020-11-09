import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../asset/logo-bookmark.svg'
import { ReactComponent as  Fb } from '../../asset/icon-facebook.svg'
import { ReactComponent as  Tw } from '../../asset/icon-twitter.svg'

const Wrapper = styled.footer`
    background: ${p=>p.theme.color6};
    & > div{
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 40px 0;
        max-width: 1200px;
        & > section{
            &:nth-child(1){
                & > svg{
                    & > g{
                        & > path{
                            fill: white;
                        }
                    }
                }
                & > p{
                    color: rgba(255,255,255,.8);
                    margin: 25px 0;
                    cursor: pointer;
                    &:hover{
                        color: ${p=>p.theme.color2};
                    }
                }
            }
            &:nth-child(2){
                & > svg{
                    margin: 20px;
                    cursor: pointer;
                    &:hover{
                        & > path{
                            fill: ${p=>p.theme.color2};
                        }
                    }
                }
            }
        }
    }
${p=>p.theme.media.desktop1}{
    & > div{
        flex-direction: row;
        justify-content: space-between;
        padding: 40px;
        & > section{
            &:nth-child(1){
               display: flex; 
               align-items: center;
               & > p{
                   margin: 0 15px;
               }
            }
            &:nth-child(2){
                & > svg{
                    margin: unset;
                    &:nth-child(1){
                        margin-right: 15px;
                    }
                }
            }
        }
    }
}
${p=>p.theme.media.desktop2}{
    & > div{
        & > section{
            &:nth-child(1){
                & > svg{
                    margin-right: 40px;
                }
            }
        }
    }
}
`

export default function Footer() {
    return (
        <Wrapper>
            <div>
                <section>
                    <Logo />
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                </section>

                <section>
                    <Fb />
                    <Tw />
                </section>
            </div>
        </Wrapper>
    )
}
