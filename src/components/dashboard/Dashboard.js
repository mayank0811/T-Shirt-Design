import React, {Component} from 'react';
import Display from '../design/Display';
import Settings from '../design/Setting';
import { connect } from 'react-redux';
import { storage } from '../config/firebaseconfi';
//this component contains design and settins component

const mapStatetoProps = (state) => {
    return {
        mytshirt: state.design.designs
    }
}

class Dashboard extends Component {

    state = {
        id: this.props.mytshirt.id,
        tshirtcolor: this.props.mytshirt.tshirtcolor,
        uppertext: this.props.mytshirt.uppertext,
        lowertext: this.props.mytshirt.lowertext,
        url: this.props.mytshirt.url,
        textsize: this.props.mytshirt.textsize,
        textcolor: this.props.mytshirt.textcolor,
        price: this.props.mytshirt.price
    }

    changeTshirtcolor = (getTshirt) => {
        this.setState({tshirtcolor: getTshirt.target.id});
        let temp=getTshirt.target.id;
        switch (temp) {
            case 'Blue':
                this.setState({price: 13});
                this.setState({id: 2});
                break;
            case 'White':
                this.setState({price: 12});
                this.setState({id: 3});
                break;
            case 'Red':
                this.setState({price: 10});
                this.setState({id: 4});
                break;
            case 'Grey':
                this.setState({price: 14});
                this.setState({id: 5});
                break;        
            default:
                this.setState({price: 15});
                this.setState({id: 1});
        }
    }

    changeTshirtuppertext = (getuppertext) => {
        this.setState({uppertext: getuppertext.target.value});
    }

    changeTshirtlowertext = (getlowertext) => {
        this.setState({lowertext: getlowertext.target.value});
    }

    changeTshirtlogo = (getlogo) => {
        if(getlogo.target.files[0]){
            //const logoprice = 5;
            const image = (getlogo.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            //this.setState({price: this.state.price + logoprice});
            uploadTask.on('state_changed',
            (snapshot) => {
                console.log(snapshot);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    this.setState({url});
                })
            }
            ) 
        }
    }

    changeTextsize = (getsize) => {
        this.setState({textsize: getsize.target.value});
    }
    
    changeTextcolor = (getcolor) => {
        this.setState({textcolor: getcolor.target.value});
    }

    changeTshirtprice =(tshirtcolor) => {
        this.setState({price: tshirtcolor});
    }

    formattext() {
        const size = this.state.textsize;
        return parseInt(size);
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                        <Display
                        display={this.state} 
                        textsize={this.formattext()}
                        />
                    </div>
                    <div className="col-lg-4">
                        <Settings 
                        color = {this.changeTshirtcolor} 
                        uppertext = {this.changeTshirtuppertext} 
                        lowertext = {this.changeTshirtlowertext}
                        logo = {this.changeTshirtlogo}
                        textsize = {this.changeTextsize}
                        textcolor = {this.changeTextcolor}
                        disprice = {this.state}
                        />
                    </div>
                </div>
            </div>   
        )
    }
}

export default connect(mapStatetoProps)(Dashboard);