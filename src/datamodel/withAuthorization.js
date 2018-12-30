// eslint-disable-next-line
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import firebase from '../datamodel/datastore';

const withAuthorization = (authCondition) => (Component) => {
    class withAuthorization extends Component {
        componentDidMount() {
            firebase.auth().onAuthStateChanged(authUser => {
                if (!authCondition(authUser)) {
                    this.props.history.push('/')
                }
            });
        }
        render() {
            return <Component />
        }
    }
    return withRouter(withAuthorization)
}

export default withAuthorization;