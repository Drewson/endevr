import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import FlatButton from 'material-ui/FlatButton';

import './style.css';

export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    Blaze.remove(this.view);
  }
  render() {
    return (
      <div>
        <span ref="container" />
      </div>
    );
  }
}
