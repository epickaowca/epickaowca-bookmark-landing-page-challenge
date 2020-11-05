import styled from 'styled-components'

export const Button = styled.button`
    cursor: pointer;
    font-weight: 500;
    outline: none;
    border: 2px solid;
    border-radius: 5px;
    background: ${p=>p.theme[p.color]};
    color: white;
    padding: 8px 28px;
    font-size: 1rem;
    &:hover{
        color: ${p=>p.theme[p.color]};
        background: white;
    }
    ${p=>p.color==='special' && `background ${p.theme.color5}; color: ${p.theme.color4}; border: 2px solid ${p.theme.color5}; &:hover{border: 2px solid ${p.theme.color4}}`}
`

