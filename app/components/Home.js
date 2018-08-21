import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Home extends Component{

    /* It Calls only Once */
    constructor(props){
        super();

        /* State is used if we want to reflact data on UI when any modification in data. */
        this.state = {
            age: props.age,
            status: 0,

            /* We need this homeLink as we are using it in Home.js to reflact on UI. */
            homeLink : props.initialLinkName
        };

        /* I want to change the status after 3 Sec  */
        setTimeout(()=> {
            this.setState({
                status: this.state.status+= 1
            });
        }, 3000);

        console.log("Constructor");
    }

    /* Life Cycle Methods */
    componentWillMount(){
        console.log("Constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    ComponentWillUpdate(nextProps, nextState){
        console.log("ComponentWillUpdate", nextProps, nextState);
    }

    ComponentDidUpdate(prevProps, prevState){
            console.log("ComponentDidUpdate", prevProps, prevState);
        }

    ComponentWillUnmount(){
            console.log("ComponentWillUnmount");
        }


    onMakeOlder(){

        /* This will reflact data on UI */
        this.setState({
            age: this.state.age + 3
        });
        console.log(this.state.age);
    }

    onChangeLink(){
        /* We can put this directly in button onClick just like greet button. But it is in more modularise form */
        this.props.changeLink(this.state.homeLink);
    }

    onChangeHandler(event){
        this.setState({
            homeLink: event.target.value
        });
    }

    render(){
        var text ="Somethings !!!!!!!!";
        return (
            <div>
                <p> In a new Component </p>
                <p> {text} </p>
                <p> Your Name is {this.props.name}, and age is {this.state.age} </p>
                <p> Status is {this.state.status} </p>
                <p> User Object => Name : {this.props.user.name} </p>
                <div>
                      <h4> Hobbies are </h4>
                      <ul>
                            {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
                      </ul>
                </div>
                <hr />
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()}> Make Me Older! </button>
                 <hr />
                <button className="btn btn-primary" onClick={this.props.greet}> Greet Me from Child Component! </button>
                 <hr />
                 <hr />

                {/* Change Link based on Input */}
                <input type = "text" value={this.state.homeLink} onChange={(event) => this.onChangeHandler(event)}/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}> Change Header Link </button>
                 <hr />
                 <hr />
                 <hr />
                {this.props.children}
               {/*
                           this.props.children is used to get the data
                           which is available in between of open and closing component tag.
                           Please see the Home tag in app.js
                */}
            </div>

        );
    }
}

export default Home;