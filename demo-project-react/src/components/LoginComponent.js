import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin } from './../_actions/authentication';
import './Login.css';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    userLogin = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        const { authentication } = this.props;
        if (username && password) {
            console.log(authentication.data)
            if (authentication.data && username === "hruday@gmail.com"
                && password === "hruday123") {
                this.props.history.push("/dashboard")
            } else {
                alert("Authentication error")
            }
        }else{
            alert("Invalid Login")
        }
    }
    render() {
        return (
            <div className="loginContainer">
                <h3>Login Form</h3>
                {/* <label for="username">Username</label><br/> */}
                <input type="text" id="username" placeholder="Username" onChange={(e) => this.setState({ username: e.target.value })} /><br />
                {/* <label for="password">Password</label><br/> */}<br />
                <input type="password" id="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} /><br /><br />
                <button type="submit" className="loginButton" onClick={this.userLogin}>Login</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => bindActionCreators({
    userLogin: userLogin
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);
