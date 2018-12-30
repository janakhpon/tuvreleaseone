import React, { Component } from 'react';
import './SignupPage.css';
import ErrorMessage from './ErrorMessage';

import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import firebase from '../datamodel/datastore';
class LogIn extends Component {

    componentWillMount() {
        this.props.dispatch({ type: 'NO_ERROR_RECEIVED' });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.history.push('/home');
            }
        })
    }

    handleSubmit = (e) => {
        this.props.dispatch({ type: 'NO_ERROR_RECEIVED' });
        e.preventDefault();
        const email = this.getEmail.value;
        const password = this.getPassword.value;

        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            this.props.dispatch({ type: 'NO_ERROR_RECEIVED' });
            this.props.history.push('/home');
        }).catch((error) => {
            console.log(error.message);
            this.props.dispatch({ type: 'ERROR_RECEIVED', message: error.message })
        })
    }
    render() {
        return (

            

            <div className="ui segment main">

            <h2 className="ui teal image header">
                <img className="ui centered image" src="https://i.imgur.com/RxckqDH.png" alt="pic" />
                <div className="content">
                    Log-in to your account
                 </div>
            </h2>


            <form onSubmit={this.handleSubmit}>
                <div className="ui form success">
                    <div className="ten wide field">
                        <label  for="email">E-mail</label>
                        <input type="email" placeholder="joe@schmoe.com"  id="email" ref={(input) => this.getEmail = input} />
                    </div>
                    <div className="ten wide field">
                        <label for="psw">Password</label>
                        <input type="password" placeholder="***********" id="psw" ref={(input) => this.getPassword = input} />
                    </div>

                    
                    <button type="submit" classNameName="ui submit button">log in</button>
                </div>
            </form>
            <div className="ui message row">
                <p className="text-center">doesn't have an account?  <Link to="/signup">Sign Up</Link></p>
            </div>
            {this.props.errors ? <ErrorMessage errorsms = {this.props.errors.message}/> : null} 
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default withRouter(connect(mapStateToProps)(LogIn));