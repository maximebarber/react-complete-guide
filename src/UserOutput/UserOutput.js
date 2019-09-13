import React, { Component } from "react";

class UserOutput extends Component {
    render() {
        return (
            <div id="userOutput">
                <p>This hive's name is {this.props.name}</p>
            </div>
        )
    }
}

export default UserOutput