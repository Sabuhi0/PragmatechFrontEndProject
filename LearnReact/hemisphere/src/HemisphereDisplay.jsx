import React from "react";
import './Hemisphere.css';
import northernPic from './images/Northern-Hemisphere.png';
import southernPic from './images/Southern-Hemisphere.jpg';

const hemisphereConfig = {
    Northern: {
        text: 'it is northern hemisphere',
        image: northernPic
    },
    Southern: {
        text: 'it is southern hemisphere',
        image: southernPic
    }
}

const HemisphereDisplay = ({ latitude }) => {
    console.log(latitude)
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, image } = hemisphereConfig[hemisphere];

    return(
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={image} alt="hemisphere"/>
                </div>
                <div className="ui teal bottom attached label ">
                    <h1>{ text }</h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;