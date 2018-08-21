import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './app/components/Header';
/*   another way to import any component     import { Header } from './app/components/Header'; */

import Home from './app/components/Home';

class App extends Component {
    constructor(){
        super();
        this.state = {
            homeLink : "Home"
        };
    }
    onChangeLinkName(newName){

        /* We need this to reflact the HomeLink name changes to be reflact in Header.js*/
        this.setState({
            homeLink : newName
        });
    }

    onGreet(){
        alert("Hello!!!!");
    }
  render() {
    var user={
        name : "Akshay Gupta",
        hobbies : ["Cricket", "Hockey", "Pool"]
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header homeLink = {this.state.homeLink} />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Home
                        name={"Akshay"}
                        age={27}
                        user={user}
                        greet={this.onGreet}
                        changeLink ={this.onChangeLinkName.bind(this)}
                        initialLinkName = {this.state.homeLink}
                        >

                        <hr />
                        <hr />
                        <hr />
                        <p> This is the children paragraph </p>
                    </Home>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
