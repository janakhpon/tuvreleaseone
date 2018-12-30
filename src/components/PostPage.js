import React, { Component } from 'react';
import AllPosts from './DisplayPage.js'
import './PostPage.css'

import { connect } from 'react-redux';

import firebase from '../datamodel/datastore';
// eslint-disable-next-line
import { withRouter, Redirect } from 'react-router-dom';

import withAuthorization from '../datamodel/withAuthorization';
import { Button, Header, Icon, Modal} from 'semantic-ui-react';
import generateId from '../datamodel/utils';
class Post extends Component {

    state = { ctime: "", formatt: ""};

    componentDidMount() {
        const ref = firebase.database().ref('users/');

        this.props.dispatch({ type: 'LOADING_TRUE' });
        ref.on('value', snapshot => {
            if (snapshot.val() === null) {
                this.props.dispatch({ type: 'LOADING_FALSE' });
                return;
            }
            // eslint-disable-next-line
            [...Object.values(snapshot.val())].map((post) => {
                this.props.dispatch({ type: 'ADD_POST', data: post })
                this.props.dispatch({ type: 'LOADING_FALSE' })
            })
        })

    }




    handleSubmit = (e) => {
        e.preventDefault();



        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var v = hours + ":" + minutes + ":" + seconds + " ";
        if (hours > 11) {
            v += "PM    ";
        } else {
            v += "AM    "
        }


        this.setState({ ctime: v });

        var d = new Date();
        var month = [];
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var n = month[d.getMonth()];


        var day = [];
        day[0] = "Saturday";
        day[1] = "Monday";
        day[2] = "Tuesday";
        day[3] = "Wednesday";
        day[4] = "Thursday";
        day[5] = "Friday";
        day[6] = "Sunday";
        var today = day[d.getDay()];
        var formatval = n + " " + d.getDate() + "," + today + "," + d.getFullYear();





        this.setState({ formatt: formatval });















        const title = this.titleInput.value;
        this.props.dispatch({ type: 'NO_ERROR_RECEIVED' })
        //validations
        if (title.length === 0 || title.length <= 5 || title.trim() === "") {
            this.props.dispatch({ type: 'POST_ERROR', message: 'Title has to be more than 5 characters' })
            return;
        }
        const message = this.messageInput.value;
        if (message.length <= 10 || message.trim() === "") {
            this.props.dispatch({ type: 'POST_ERROR', message: 'Message has to be more than 10 characters' })
            return;
        }

        const hashsay = this.hashsayInput.value;
        if (message.length <= 3 || message.trim() === "") {
            this.props.dispatch({ type: 'POST_ERROR', message: 'Message has to be more than 10 characters' })
            return;
        }

        const gettime = this.state.ctime;
        if (gettime.length === 0 || hashsay.trim() === "") {
            this.props.dispatch({
                type: 'POST_EDIT_ERROR', message: 'fetching time ran into errors',
                id: this.gettime
            })
            this.forceUpdate()
            return;
        }

        const getdate = this.state.formatt;
        if (getdate.length === 0 || hashsay.trim() === "") {
            this.props.dispatch({
                type: 'POST_EDIT_ERROR', message: 'fetching time ran into errors',
                id: this.getdate
            })
            this.forceUpdate()
            return;
        }




        //generate id
        const id = generateId();
        const newPost = {
            id,
            title,
            message,
            hashsay,
            gettime,
            getdate,
            editing: false,
            errorMessage: ''
        }
        const postRef1 = firebase.database().ref('users/')
        const postKey = postRef1.push()
        const postRef = firebase.database().ref('users/' + postKey.key)
        const uid = firebase.auth().currentUser.uid
        postRef.set({
            id: id,
            title: title,
            message: message,
            hashsay: hashsay,
            gettime: gettime,
            getdate: getdate,
            editing: false,
            uid: uid,
            key: postKey.key,
            errorMessage: ''
        })

        if (this.props.posts.editing) {
            this.props.dispatch({
                type: 'ADD_EDIT_POST',
                data: newPost
            })
        }
        this.props.dispatch({
            type: 'ADDING_POST'

        })

        this.titleInput.value = '';
        this.messageInput.value = '';
        this.hashsayInput.value = '';




    }

    render() {
        return (

            <div className="ui grid">
                <div className="sixteen wide column">
                    
                        <Modal trigger={<Button><Icon name='share' /> share your outlook ?</Button>} closeIcon>
                            <Header icon='share' content='share your outlook to make TU better! ' />
                            <Modal.Content>

                            <form onSubmit={this.handleSubmit}>

                                <div className="ui fluid input">

                                    <input type="text" ref={(input) => this.titleInput = input} placeholder="enter Title for Post" />

                                </div>

                                <div className="ui fluid divider inverted">
                                    <h1>:</h1>
                                </div>


                                <div className="ui fluid input">

                                    <textarea ref={(input) => this.messageInput = input} placeholder="your description on related outlook" rows="5" cols=""></textarea>

                                </div>
                                <div className="ui fluid divider inverted">
                                    <h1>:</h1>
                                </div>

                                <div className="ui fluid input">

                                    <input type="text" ref={(input) => this.hashsayInput = input} placeholder="strong thought" />

                                </div>

                                <div className="ui fluid divider inverted">
                                    <h1>:</h1>
                                </div>
                                <div className="ui fluid divider inverted">
                                    
                                </div>

                                <button className='ui red button' type='reset'><i className="fa fa-times"></i>cancel</button>
                                <button className='ui blue button' type='submit'><i className="fa fa-share"></i>share</button>

                                </form>

                            </Modal.Content>
                            <Modal.Actions>

                                {this.props.errors ? <h4 style={{ color: '#ff0000' }}>{this.props.errors.message}</h4 > : null}  
                                <p>{this.state.noti}</p>   

                            </Modal.Actions>
                        </Modal>

                  



                    
                </div>
                <div className="sixteen wide column">
                    <AllPosts posts={this.props.posts} />
                </div>
            </div>


















        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.posts,
    errors: state.errors

})
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(connect(mapStateToProps)(Post));
