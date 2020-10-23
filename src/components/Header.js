import React from 'react';
import profile from '../images/Profile-thumbnail.png';
import '../styles/Header.css';

function HeaderComponent() {
    return (
        <div className="header">
            <div className="header__image">
                
            </div>
            <h4 className="header__title">&lt; Editing Artilog heading</h4>
            <div className='header__right'>
            <div className="header__upgrade">
                <button className="header__button">UPGRADE</button>
            </div>
            <img className='header__profile'src={profile} alt="profile"/>
            </div>
            
        </div>
    )
}

export default HeaderComponent
