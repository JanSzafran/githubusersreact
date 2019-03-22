import React, { Component } from 'react';
import './User.css';

class User extends Component {

    render() {
        const { user } = this.props;
        return (
            <div>
                <img height="80" width="80" style={{borderRadius: '50%'}} src={user.avatar} />
                <h2>User details: </h2>
                <h3>Nickname:</h3>
                <h4>{user.nickname}</h4>
                <h3>Full Name:</h3>
                <h4>{user.fullName}</h4>
                <h3>Location:</h3>
                <h4>{user.location}</h4>
                <h3>Number of public repos:</h3>
                <h4>{user.publicRepos}</h4>
                <h3>Followers:</h3>
                <h4>{user.followers}</h4>
            </div>
        )
    }
}

export default User;