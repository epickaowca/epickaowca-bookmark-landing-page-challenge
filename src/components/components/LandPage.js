import React from 'react'
import LandStructure from '../structure/LandStructure'
import Hero from '../../asset/illustration-hero.svg'

const content = {
    button2:"Get it on Firefox",
    button1:"Get it on Chrome",
    description:"A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
    title:"A Simple Bookmark Manager",
    img:Hero
}
export default function LandPage() {
    return (
        <div>
            <LandStructure content={content}  />
        </div>
    )
}
