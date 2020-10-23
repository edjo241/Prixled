import React from 'react'
import HeaderComponent from './/Header';
import RightUpper from './RightUpper';
import RightLower from './RightLower';
import '../styles/RightContent.css'


function RightContent() {

    // const style={
    //     fonstSize
    // }

    return (
        <div className='right__content'>
            <HeaderComponent/>
            <RightUpper/>
            <RightLower/>
        </div>
    )
}

export default RightContent 
