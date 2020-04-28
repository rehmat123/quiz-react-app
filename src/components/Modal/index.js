import React, { Component } from 'react';
import MyButton from '../util/MyButton.jsx';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import Login from '../Login/index.js';
import { Link } from 'react-router-dom';
import Register from '../Register/index.js';
import { HIDE_MODAL, CURRENT_BILLING_PACKAGE } from '../../store/reducer/Modal/type.js';
import Transaction from '../paypal/index.js';
import Cookies from 'js-cookie'

class Modal extends Component {

  constructor(props) {
    super(props);
    this.renderSwitch = this.renderSwitch.bind(this);
  }
  paymentHandler(details, data, m_month) {

    if (details.status == "COMPLETED") {
      return fetch("http://admin.qltsexam.com/api/user/membership", {
        method: "post",
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
        }),
        body: 'id=' + Cookies.get('user_id') + '&membership_month=' + m_month
      }).then((data) => {

        Cookies.set('curr_billing', m_month)
        window.location.href = '/home';
      });
    }
    else {

    }
  }


  renderSwitch() {

    switch (this.props.data.type) {
      case 'Login':
        return <Login />
      case 'Register':
        return <Register />
      case 'paypal':
        return <Transaction
          amount={this.props.data.amount}
          onSuccess={this.paymentHandler} />
      default:
        break;
    }
  }
  hideModal = () => {
    this.props.HideModalClick('none');
  };

  style = {
    'float': 'right',
    'marginTop': '-12px'
  }
  render() {

    let { style } = this.props;

    return (
      <Fade delay={500}>
        <div className={`popup-container  ${this.props.data.show === 'block' ? "display-block" : "display-none"}`} style={style}>
          {this.props.data.m_month}
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <Link style={this.style} to="" onClick={this.hideModal}><i className="fa fa-times"></i></Link>
                <div className="popup">
                  {(this.props.data.type !== 'paypal') ? <div className="popup-header">
                    <img src="../../../public/assets/logo.png"  width='200' height='200' />
                  </div> : ''}


                  {
                    this.renderSwitch()

                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    data: state.show,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

    HideModalClick: (display) => dispatch({
      type: HIDE_MODAL,
      displayModal: display
    }),
    CrrentBillingPackage: (curr_package) => dispatch({
      type: CURRENT_BILLING_PACKAGE,
      payload: curr_package
    }),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);
