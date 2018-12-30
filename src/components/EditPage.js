import React, { Component } from 'react';

import { connect } from 'react-redux';

import firebase from '../datamodel/datastore';

class EditComponent extends Component {

    state = { ctime: "", formatt: "" };

    handleFinalEdit = (e) => {

        e.preventDefault()


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




        this.setState({ ctime: v });
        this.setState({ formatt: formatval });














        const title = this.getTitleInput.value
        const message = this.getMessageInput.value
        const hashsay = this.getHashsayInput.value
        const gettime = this.state.ctime;
        const getdate = this.state.formatt;

        this.props.dispatch({ type: 'CLEAR_ERROR', id: this.props.post.id })

        if (title.length === 0 || title.length <= 3 || title.trim() === "") {
            this.props.dispatch({
                type: 'POST_EDIT_ERROR', message: 'Title has to be more than 3 characters', id:
                    this.props.post.id
            })
            this.forceUpdate()
            return;
        }
        if (message.length === 0 || message.length <= 10 || message.trim() === "") {
            this.props.dispatch({
                type: 'POST_EDIT_ERROR', message: 'Message has to be more than 10 characters',
                id: this.props.post.id
            })
            this.forceUpdate()
            return;
        }
        if (hashsay.length === 0 || hashsay.length <= 3 || hashsay.trim() === "") {
            this.props.dispatch({
                type: 'POST_EDIT_ERROR', message: 'Hashsay has to be more than 3 characters',
                id: this.props.post.id
            })
            this.forceUpdate()
            return;
        }
        if (gettime.length === 0 || hashsay.trim() === "") {
            this.props.dispatch({
                type: 'POST_EDIT_ERROR', message: 'fetching time ran into errors',
                id: this.gettime
            })
            this.forceUpdate()
            return;
        }

        if (getdate.length === 0) {
            this.props.dispatch({
                type: 'POST_EDIT_ERROR', message: 'fetching time ran into errors',
                id: this.getdate
            })
            this.forceUpdate()
            return;
        }





        this.props.dispatch({
            type: 'ADD_EDIT_POST',
            data: {
                id: this.props.post.id,
                title,
                message,
                hashsay,
                gettime,
                getdate,
                editing: this.props.post.editing
            }
        })
        let updates = {}
        updates['users/' + this.props.post.key] = this.props.post;
        updates['users/' + this.props.post.key].title = title;
        updates['users/' + this.props.post.key].message = message;
        updates['users/' + this.props.post.key].hashsay = hashsay;
        updates['users/' + this.props.post.key].gettime = gettime;
        updates['users/' + this.props.post.key].getdate = getdate;

        firebase.database().ref().update(updates)

    }


    render() {
        return (
            <form onSubmit={this.handleFinalEdit}>

                <div className="ui fluid input">

                    <input type="text" ref={(input) => this.getTitleInput = input} defaultValue={this.props.post.title} placeholder="enter Title for Post" />

                </div>

                <div className="ui fluid divider inverted">
                    <h1>:</h1>
                </div>


                <div className="ui fluid input">

                    <textarea ref={(input) => this.getMessageInput = input} defaultValue={this.props.post.message} placeholder="your description on related outlook" rows="5" cols=""></textarea>

                </div>
                <div className="ui fluid divider inverted">
                    <h1>:</h1>
                </div>

                <div className="ui fluid input">

                    <input type="text" ref={(input) => this.getHashsayInput = input} defaultValue={this.props.post.hashsay} placeholder="strong thought" />

                </div>

                <div className="ui fluid divider inverted">
                    <h1>:</h1>
                </div>
                <div className="ui fluid divider inverted">

                </div>

                <button className='ui red button' type='reset'><i className="fa fa-times"></i>cancel</button>
                <button className='ui blue button' type='submit'><i class="fa fa-pencil"></i>update</button>




                {console.log(this.props.post.errorMessage)}
                {this.props.post.errorMessage ? <p style={{ color: '#ff0000' }}>{this.props.post.errorMessage}</p> : null}
            </form >
        );
    }
}




export default connect()(EditComponent);