import React from 'react'
import '../styles/text.css'
import Text from './Text'
import { withGeneralStyling, withHeaderStyling } from './Textfile'

const Title = withHeaderStyling(Text)
const SubTitle = withGeneralStyling(Text)


export default function Slide({slide}) {
    return (
        <div className="slide-image-wrapper">
            <img src={slide.image_url} className='slide-image-image' alt=""/>
            <Title content={slide.title}/>
            <SubTitle content={slide.sub_title}/>
        </div>
    )
}
