import React, { Component } from 'react';
import ProjectList from  './ProjectList';
import { connect } from 'react-redux';
import Navbar from '../../navbar/navbarofcart';
import './cart.css';
import { Link } from 'react-router-dom';

const mapStatetoProps = (state) => {
    return {
        designs: state.design.newdesigns
    }
}

//This page contains all the components of cart page.

class Project extends  Component {
    render () { 
        const { designs } = this.props
        function finishshop() {
            if(designs.length===0){
                alert('Please add some items to Cart.');
            }
            else{
                alert('Thank you for Shopping.');
                window.location.replace('http://localhost:3000/');
            }
        }
        let finalprice=0;
        return (
            <>
                <div>
                <Navbar />
                <br />  
                </div>
                <Link to ="/">
                <div className="container">
                    <div className="container1 border-1 border rounded-pill shadow-lg p-3 mb-5 w-25 h-25 bg-body rounded">
                    < img src="https://image.flaticon.com/icons/png/512/271/271218.png" alt="arrow" className="arrow-icon"/>              
                    <h4>Continue Designing</h4>
                    </div>
                </div>
                </Link>
                <section className="container mb-5">
                    <h1>Shopping Cart</h1>
                    <hr />
                    <div className="row">
                        <div className="container project-list" >
                            {
                            designs.length===0 ? (
                                <div className="cartmessage">
                                    <img src="data:image/png;base64,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" alt="cartimage"></img>
                                    <h1>
                                        The Cart is Empty.
                                    </h1>
                                </div>
                            ) : (
                                console.log('Cart Has items.')
                            )}
                            {designs && designs.map(design =>{
                                // eslint-disable-next-line
                                {finalprice+=(design.price*design.count)}
                                return(
                                    <>
                                    <ProjectList design={design} key={design.id}/>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <div className="container">
                    <hr />
                    <h2 className="finalprice">
                        Total Price: ${finalprice}
                        <br />
                    </h2>
                    <button onClick={finishshop}className="checkoutbutton btn btn-success btn-lg">Checkout</button>
                    <hr/>
                </div>
                <div>
                <footer className="footer mt-auto py-4 bg-dark">
                    <div className="container">
                        <span className="text-muted text-right"><h6>&#169;Copyright: TShirtDesign</h6></span>
                    </div>
                    </footer>
                </div>
            </>
        )
    }
} 

export default connect(mapStatetoProps)(Project);