import React from 'react';
import { useDispatch } from 'react-redux';
const urlImgBase = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";

function Settings ({color,uppertext,lowertext,logo,textsize,textcolor,disprice}) {
        const dispatchitem = useDispatch()
        function callmethod() {
            dispatchitem({type:"ADD_item", tshirt:disprice})
        }
        return (
            <div className="card bg-light container rounded shadow-lg p-3 mb-5 bg-body rounded">
                <div className="text-center">
                    <div className="tshirtheading border-1  border rounded-pill shadow-lg p-3 mb-5 bg-body rounded">
                            <h3>Settings</h3>
                    </div>
                </div>
                <h4>T-Shirt Colours</h4>
                <div onmouseover="bigImg(this)" onmouseout="normalImg(this)" className="tshirt-color">
                    <img onmouseover="bigImg(this)" onmouseout="normalImg(this)" onClick={color} src={`${urlImgBase}black.png`} alt="black t-shirt" id="Black"></img>
                    <img onClick={color} src={`${urlImgBase}blue.png`} alt="blue t-shirt" id="Blue"></img>
                    <img onClick={color} src={`${urlImgBase}white.png`} alt="white t-shirt" id="White"></img>
                    <img onClick={color} src={`${urlImgBase}red.png`} alt="red t-shirt" id="Red"></img>
                    <img onClick={color} src={`${urlImgBase}grey.png`} alt="grey t-shirt" id="Grey"></img>
                </div>
                <hr />  
                <h4> Upload Image</h4>
                <div className="form-group ">
                    <input onChange={logo} type="file" className="form-control-file ab-2"/>
                </div>
                <hr />
                <h4>Write Text</h4>
                <input onChange={uppertext} type="text" className="form-control form-control-sm ab-2" maxLength="18" placeholder="Upper Text" />
                <input onChange={lowertext} type="text" className="form-control form-control-sm" maxLength="18" placeholder="Lower Text" />
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
                <h3>Price: ${disprice.price} </h3>
                <hr />
                <button onClick={callmethod} className="btn btn-success btn-m ab-2">Add to Cart</button>
            </div>
        )
}

export default Settings