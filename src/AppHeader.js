import React, { Component , Fragment } from "react";

export default class AppHeader extends Component {
    render(){
        return(
            <Fragment>
                <h1>{ this.props.title}</h1>
                <h2>{ this.props.subject}</h2>
                <h3>{ this.props.favourite_color}</h3>
            </Fragment>
        );
    }
}