import React from 'react'
import RightContent from './RightContent'
import Side from './Side'
import '../styles/Body.css'

function Body() {
    return (
        <div className='body'>
            <Side/>
            <RightContent/>
        </div>
    )
}

export default Body
