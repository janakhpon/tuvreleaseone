import React, { Component } from 'react';
import firebase from './datamodel/datastore';
import './App.css';
import Post from './components/PostPage';
import LogIn from './components/LogInPage';
import SignUp from './components/SignupPage';
import { connect } from 'react-redux';
import {Dropdown, Menu, Popup } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';



class App extends Component {
  state = { activeItem: 'home'}



  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  handleLogout = () => {
    firebase.auth().signOut().then(() => {
      // eslint-disable-next-line
      <Redirect to="/" />
    }).catch(() => {
      console.log('Error happened');
    })
    localStorage.removeItem('uid');
  }

  render() {
    const { activeItem } = this.state


    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}>

       <Menu inverted>
       <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
         HOME
        </Menu.Item>

        <Dropdown item text='Language' name='language' active={activeItem === 'language'}>
            <Dropdown.Menu >
            <Popup trigger={ <Dropdown.Item>english</Dropdown.Item> } content='english language user interface' />
            <Popup trigger={ <Dropdown.Item>mmzawgyi</Dropdown.Item> } content='myanmar zawgyi user interface' />
             <Popup trigger={ <Dropdown.Item>mmunicode</Dropdown.Item> } content='myanmar unicode user interface' />
            </Dropdown.Menu>
          </Dropdown>

        <Menu.Menu position='right'>
        <Dropdown className='droptext' item text='Options' name='options' active={activeItem === 'options'}>
            <Dropdown.Menu>
              <Dropdown.Item>Go Back</Dropdown.Item>
              <Dropdown.Item>Feedback</Dropdown.Item>
              <Dropdown.Item>Help</Dropdown.Item>
              <Dropdown.Item>About Developers</Dropdown.Item>
              <Dropdown.Item>About System</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Popup trigger={<Menu.Item name='submit' className='centered' style={{ textAlign:'center', padding:'1px;'}} active={activeItem === 'submit'} onClick={this.handleLogout}>
          <i class="fa fa-power-off" style={{color:'#ff0000'}}></i>
        </Menu.Item>} content='Click to logout' />
        </Menu.Menu>
      </Menu>

        <Router>
          <div class="ui container">
            <Route exact path="/" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/home" component={Post} />
          </div>
        </Router>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  authed: state.authed
})

export default connect(mapStateToProps)(App);
