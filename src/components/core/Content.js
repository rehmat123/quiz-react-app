import React, { Component } from 'react';
import Cookies from 'js-cookie'
export default class Content extends Component {
  constructor(props) {
    super(props);
    Cookies.get('authorize') == null ? this.props.history.push('/') : this.props.history.push('/home');
  }
  render() {
    return (
      <div className="body">
        <img className="top" width='100%' height='867px' src="../../../public/assets/shutterstock_233207233.jpg" />
      </div>
    );
  }
}
