import React from 'react';
import './Header.css'
import headerImg from '../../../images/car-2.jpg'

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className="row justify-content-center header-background">
                <img src={headerImg} alt=""/>
            </div>            
        </div>
    );
};

export default Header;