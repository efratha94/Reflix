import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class Landing extends Component{
    constructor(){
        super();
        this.state = {
            users: [
                {name: "Efrat", backgroundColor: "teal"},
                {name: "Osnat", backgroundColor: "purple"},
                {name: "Erez", backgroundColor: "red"},
                {name: "Zohar", backgroundColor: "orange"},
                {name: "Teddy", backgroundColor: "green"}
            ]
        }
    }

    render() {
        return (
            <div>
                
            <div id="users">
                {this.state.users.map(user => {
                    return (
                        <Link to="/catalog" key={user.backgroundColor} class={`link user ${user.backgroundColor}`}><span class="username">{user.name}</span></Link>
                    )
                })}
            </div>
            </div>
        )
    }
}

export default Landing