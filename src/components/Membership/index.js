import React, { Component } from 'react';
import { connect } from "react-redux";
import { SHOW_MODAL, TYPE_OF_MODAL, PAYPAL_AMOUNT, MEMBERSHIP_MONTH } from '../../store/reducer/Modal/type';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'
class Membership extends Component {

    constructor(props) {
        super(props);
        Cookies.get('authorize') == null ? this.props.history.push('/') : this.props.history.push('/membership');
    }

    paypalModal(e) {
        console.log(e.currentTarget.dataset.id);

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                    {Cookies.get('payment') == 'expire' ? <div className="alert-danger">Your current account is Expired. Please pay first.</div> : '' }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="membership">
                            <h3 className="MembershipPlan-title">Free</h3>
                            <span className="MembershipPlan-price  ">
                            For 3 days
                            </span>
                                                        <div className="MembershipPlan-cta">
                                <button className="btn btn-small is-downgrade btn-plain">{(Cookies.get('curr_billing') == undefined) ? 'Current' : 'Downngrade'} </button>
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="membership">
                            <h3 className="MembershipPlan-title">3 Months</h3>
                            <span className="MembershipPlan-price  ">
                                $3<sup>.99</sup>
                            </span>
                                                        <div className="MembershipPlan-cta">
                                <button onClick={() => {
                                    this.props.ShowModalClick('block')
                                    this.props.ShowModalType('paypal')
                                    this.props.PaypalAmount('3.99')
                                    this.props.MemberShipMonth('3')
                                }} data-id='3.99' className="btn btn-small is-downgrade btn-plain">{(Cookies.get('curr_billing') == 3) ? 'Current' : 'Upgrade'} </button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="membership">
                            <h3 className="MembershipPlan-title">6 Months</h3>
                            <span className="MembershipPlan-price  ">
                                $5<sup>.99</sup>
                            </span>
                                                        <div className="MembershipPlan-cta">
                                <button onClick={() => {
                                    this.props.ShowModalClick('block')
                                    this.props.ShowModalType('paypal')
                                    this.props.PaypalAmount('5.99')
                                    this.props.MemberShipMonth('6')
                                }} data-id='5.99' className="btn btn-small is-downgrade btn-plain">{(Cookies.get('curr_billing') == 6) ? 'Current' : 'Upgrade'}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="membership">
                            <h3 className="MembershipPlan-title">12 Months</h3>
                            <span className="MembershipPlan-price  ">
                                $11<sup>.99</sup>
                            </span>
                                                        <div className="MembershipPlan-cta">
                                <button onClick={() => {
                                    this.props.ShowModalClick('block')
                                    this.props.ShowModalType('paypal')
                                    this.props.PaypalAmount('11.99')
                                    this.props.MemberShipMonth('12')
                                }} data-id='11.99' className="btn btn-small is-downgrade btn-plain">{(Cookies.get('curr_billing') == 12) ? 'Current' : 'Upgrade'} </button>
                            </div>
                           
                        </div>
                    </div>
                </div>
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
        PaypalAmount: (amount) => dispatch({
            type: PAYPAL_AMOUNT,
            payload: amount
        }),
        MemberShipMonth: (month) => dispatch({
            type: MEMBERSHIP_MONTH,
            payload: month
        }),
    }
};


export default connect(null, mapDispatchToProps)(Membership);