import React, { Component } from 'react';
import { connect } from "react-redux";
import { SHOW_MODAL, TYPE_OF_MODAL } from '../../store/reducer/Modal/type';
import { Link } from 'react-router-dom';
import logo from '../../../public/assets/logo.png';
import Cookies from 'js-cookie'

class Header extends Component {

  state = {
    login: true,
    tab: 'home'
  }
  logout() {
    Cookies.remove('authorize');
    window.location.href = '/';
  }

  onClick = event => {
    this.setState({
      tab: event.target.name
    })
  }

  renderheader() {
    if (Cookies.get('authorize') === 'login') {
      return (<div className="pull-right margin-top" role="navigation">
        <Link name="home" className={`links ${this.state.tab === 'home' ? "active" : ""}`} onClick={this.onClick} to="/home">Home</Link>
        <Link name="snap" className={`links ${this.state.tab === 'snap' ? "active" : ""}`} onClick={this.onClick} to="/snap-question">Snap Question</Link>
        <Link name="random" className={`links ${this.state.tab === 'random' ? "active" : ""}`} onClick={this.onClick} to="/random-question">Random Question</Link>
        <Link name="membership" className={`links ${this.state.tab === 'membership' ? "active" : ""}`} onClick={this.onClick} to="/membership">Membership</Link>
        <Link className="links" onClick={this.logout} to="/logout">Logout</Link>
      </div>);
    }
    else {
      return (<div className="pull-right margin-top" role="navigation">
        <button className="button-login" onClick={() => {
          this.props.ShowModalClick('block')
          this.props.ShowModalType('Login')
        }}>Login</button>
        <button className="button-login" onClick={() => {
          this.props.ShowModalClick('block')
          this.props.ShowModalType('Register')
        }}>Register</button>
      </div>);
    }
  }
  render() {
    return (
      <div className="header">
        <div className="pull-left">
          <img src={logo} width='100' height='100' className="logo" />
        </div>

        {this.renderheader()}

      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {

    ShowModalClick: (display) => dispatch({
      type: SHOW_MODAL,
      displayModal: display
    }),
    ShowModalType: (type) => dispatch({
      type: TYPE_OF_MODAL,
      payload: type
    }),
  }
};


export default connect(null, mapDispatchToProps)(Header);

