import React from 'react';
import coffe from '../img/coffe.svg';

const Logo = (props) => (
    <div className="container">
        <img src={coffe} style={{width: '25%', height: '25%', position: 'center', left: '47%'}} alt="logo" />
    </div>
);

export default Logo;