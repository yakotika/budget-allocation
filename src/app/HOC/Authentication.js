import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount () {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/login');
      }
    }
    componentWillUpdate (nextProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/login');
      }
    }
    render () {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps (state) {
    return { isAuthenticated: state.login.isAuthenticated };
  }

  return connect(mapStateToProps)(Authentication);
}