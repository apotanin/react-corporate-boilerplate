import React, { Component, Fragment } from 'react';
import { log, child } from 'helpers';

export default class Child extends Component {
    constructor () {
        super();

        log('• child constructor •', child);
    }

    componentWillMount () {
        log('• child componentWillMount •', child);
    }

    componentDidMount () {
        log('• child componentDidMount •', child);
    }

    componentWillReceiveProps (nextProps, nextContext) {
        const { count } = nextProps;

        log(`• child componentWillReceiveProps ${count} •`, child);
    }

    componentWillUpdate (nextProps, nextState, nextContext) {
        const { count } = nextProps;

        log(`• child componentWillUpdate ${count} •`, child);
    }

    componentDidUpdate (prevProps, prevState) {
        const { count } = prevProps;

        log(`• child componentDidUpdate ${count} •`, child);
    }

    render () {
        const { count } = this.props;

        log('• child render •', child);

        return <p>Count: {count}</p>;
    }
}
