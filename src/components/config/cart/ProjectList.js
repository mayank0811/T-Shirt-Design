import React from 'react';
import { useDispatch } from 'react-redux';

const imgBase ='https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/'

const ProjectLists = ({design}) => {
    const dispatchitem = useDispatch()
    return (
        <div>
            <div className="itemsHere">
                <div className="itemscolumn"><img className="img-fluid" src={`${imgBase}${design.tshirtcolor}`} alt="T-Shirt"/><h4>{design.name} T-Shirt</h4></div>
                <div className="itemscolumn">
                    <div className="addminusgroup">
                    <button onClick={() => {dispatchitem({type:"add", tshirt:design})}} className="btn- btn-info btn-sm">
                        +
                    </button>
                    <h4>{design.count}</h4>
                    <button onClick={() => {dispatchitem({type:"subtract", tshirt:design})}} className="btn- btn-info btn-sm">
                        -
                    </button>
                    </div>
                </div>
                <div className="itemscolumn"><button className="btn- btn-primary btn-lg">View item</button></div>  
                <div onClick={() => {dispatchitem({type:"DELETE_item", tshirt:design})}} className="itemscolumn"><button className="btn- btn-danger btn-lg">Delete</button></div>
                <div className="itemscolumn"><h2>${design.price*design.count}</h2></div>
            </div>
        </div>
    )
}
export default ProjectLists;