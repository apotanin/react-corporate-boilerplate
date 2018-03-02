import React, { Component, Fragment } from 'react';

import MyComponent from './MyComponent';

const data = {
    firstName: 'Walter',
    lastName:  'White',
    age:       19,
};

export default class Example extends Component {
    render () {
        return (
            <Fragment>
                <MyComponent { ...data } />
            </Fragment>
        );
    }
}
