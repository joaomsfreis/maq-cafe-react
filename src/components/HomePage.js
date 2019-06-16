import React from 'react';
import Logo from './Logo';
import InteractionScreen from './InteractionScreen';

const HomePage = (props) => (
    <div className="container">
        <div className="row text-center">
            <div className="col-12">
                <Logo/>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-12">
                <h4>Quantidades disponível</h4>
            </div>
        </div>
        <InteractionScreen/>
    </div>
);

export default HomePage;