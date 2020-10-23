import React from 'react';
import '../styles/RightLower.css';
import { useStateValue } from './StateProvider';

function RightLower() {
    const [{fontsize,color,fontfamily,align,fontweight},dispatch]=useStateValue();
    const style={
        fontSize:fontsize,
        backgroundColor:color,
        fontFamily:fontfamily,
        textAlign:align,
        fontWeight:fontweight
        
    }

   
    console.log(fontsize);
    return (
        <div className='right__lower'>
            <textarea style={style} className='right__lower__text'></textarea>
        </div>
    )
}

export default RightLower
