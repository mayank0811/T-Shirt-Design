import React, {Component} from 'react';
import Display from '../design/Display';
import Settings from '../design/Setting';
import { storage } from '../config/firebaseconfi';

class Dashboard extends Component {

    state = {
        tshirtcolor: 'Black',
        uppertext: "This is UpperText",
        lowertext: "This is LowerText",
        url:'',
        textsize: 38,
        textcolor: 'white'
    }

    changeTshirtcolor = (getTshirt) => {
        this.setState({tshirtcolor: getTshirt.target.id});
    }

    changeTshirtuppertext = (getuppertext) => {
        this.setState({uppertext: getuppertext.target.value});
    }

    changeTshirtlowertext = (getlowertext) => {
        this.setState({lowertext: getlowertext.target.value});
    }

    changeTshirtlogo = (getlogo) => {
        if(getlogo.target.files[0]){
            const image = (getlogo.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
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
                        />
                    </div>
                </div>
            </div>   
        )
    }
}

export default Dashboard