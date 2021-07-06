import React from 'react';
import './Display.css';

const Display = ({display,textsize}) => {
    return (
        <div className="card card-content">
            <div className="imgTshirt text-center">
                <img 
                className="img-responsive"
                src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${display.tshirtcolor}`}
                alt="img-tshirt"
                />
            </div>
            <div className="logoText text-center">
                <div className="upperText">
                    <p style={{fontSize: textsize , color:display.textcolor}}>{display.uppertext}</p>
                </div>
                <img
                src={`${display.url}` || 'https://carmitive.com/wp-content/uploads/2017/08/blank-white-page.jpg'}
                alt="logo-text"
                />
                <div className="lowerText">
                    <p style={{fontSize: textsize , color:display.textcolor}}>{display.lowertext}</p>
                </div>
            </div>
        </div>
    )
}

export default Display