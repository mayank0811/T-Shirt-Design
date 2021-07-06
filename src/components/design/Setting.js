import React from 'react';
const urlImgBase = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";

const Settings = ({color,uppertext,lowertext,logo,textsize,textcolor}) => {
    return (
        <div className="card bg-light container">
            <h2 className="text-center"> Settings</h2>
            <hr />
            <h4> Change T-Shirt Colour</h4>
            <div className="tshirt-color">
                <img onClick={color} src={`${urlImgBase}black.png`} alt="black t-shirt" id="black"></img>
                <img onClick={color} src={`${urlImgBase}blue.png`} alt="blue t-shirt" id="blue"></img>
                <img onClick={color} src={`${urlImgBase}white.png`} alt="white t-shirt" id="white"></img>
                <img onClick={color} src={`${urlImgBase}red.png`} alt="red t-shirt" id="red"></img>
                <img onClick={color} src={`${urlImgBase}grey.png`} alt="grey t-shirt" id="grey"></img>
            </div>  
            <hr />
            <h4>Write Text</h4>
            <input onChange={uppertext} type="text" className="form-control form-control-sm ab-2" placeholder="Upper Text" />
            <input onChange={lowertext} type="text" className="form-control form-control-sm" placeholder="Lower Text" />

            <hr />
            <h4> Upload Image</h4>
            <div className="form-group">
                <input onChange={logo} type="file" className="form-control-file ab-2"/>
            </div>
            <hr />
            <h4>Text Size</h4>
            <input onChange={textsize} type="range" className="form-control-file ab-2" min="0" max="50"/>
            <hr />
            <h4>Text Color</h4>
            <select onChange={textcolor} className="form-control form-control-sm ab-2">
                <option>white</option>
                <option>black</option>
                <option>red</option>
                <option>blue</option>
            </select>
            <hr />
            <button className="btn btn-primary btn-sm ab-2">Save</button>
        </div>
    )
}

export default Settings