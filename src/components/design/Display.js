import React from 'react';
import './Display.css';

const Display = ({display,textsize}) => {
    return (
        <div className="card card-content rounded shadow-lg p-3 mb-5 bg-body rounded">
            <div className="text-center">
                <div className="tshirtheading border-1 border rounded-pill shadow-lg p-3 mb-5 bg-body rounded">
                        <h3>Product Display</h3>
                </div>
            </div>
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
            <br />
        </div>
    )
}

export default Display