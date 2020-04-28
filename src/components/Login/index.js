import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Globals from '../../Globals/constant';
import Cookies from 'js-cookie'
import Errors from '../Error/index';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    state = {
        'email': '',
        'password': '',
        'redirect': true,
        'errors': [],
        'ShowloginForm': false,
        loading: false,
        uploadValue: 'Login'
    }

    login = (event) => {
        event.preventDefault();

        if (this.state.email === '' || this.state.password === '') {
            return this.setState({ errors: ['Email and Password Both Required'] })
        }
        let lastAtPos = this.state.email.lastIndexOf('@');
        let lastDotPos = this.state.email.lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
            return this.setState({ errors: ['Email is not valid'] })
        }


        this.setState({ loading: true, uploadValue: 'Login Please Wait ....' })
        fetch(Globals.api + '/api/user/login', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: 'email=' + this.state.email + '&password=' + this.state.password
        }).then(res => res.json()).then((data) => {
            

            if (data.status == "true") {
                Cookies.set('authorize', "login")
                var g1 = new Date();
                var membership_date =  data.data.membership_date.substring(0, data.data.membership_date.length - 3);
                //var membership_date ="2020-01-10 14:04:28"
                var g2 = new Date(membership_date);       

                var myDate = new Date(g2.getTime()+(3*24*60*60*1000));
                
                Cookies.set('user_id', data.data.id);

                if (data.data.membership_status === 'None') {

                    if (myDate.getTime() > g1.getTime()) {

                       console.log('payment not expire but free trial');
                        window.location.href = Globals.appHomePage;

                    }
                    else {
                        console.log('paymentexpire on free trial');
                        Cookies.set('payment', "expire");
                        window.location.href = '/membership';

                    }

                }
                else {
                    var newdate = g2.setMonth(g2.getMonth() + parseInt(data.data.membership_status));

                
                    if (g1.getTime() > newdate) {
                        Cookies.set('payment', "expire");
                        console.log('payment  expire but renewal');
                        Cookies.set('curr_billing', data.data.membership_status);
                        window.location.href = '/membership';
                    }
                    else {
                        console.log('payment  not expire but renewal');
                        Cookies.set('curr_billing', data.data.membership_status);
                        window.location.href = Globals.appHomePage;

                    }



                }
                //document.write("g1 is greater than g2"); 


            } else {
                this.setState({ loading: false, uploadValue: 'Login' })
                this.setState({ errors: [data.message] })
            }
        }).then(console.log)
    }
    render() {
        return (
            <form className='login'>
                
                <Errors errors={this.state.errors} />
                <div className="inner-form-box">

                    <div className="form-group">
                        <input type="email" placeholder="Email Address" className="form-control" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" onKeyPress={this.keyPressed} onChange={event => this.setState({ password: event.target.value })} />
                    </div>
                    <button className="btn btn-block submit-btn" onClick={this.login}>{this.state.loading === true && <i className="fa fa-spinner fa-spin spin1"></i>} {this.state.uploadValue}</button>

                </div>
            </form>

        );
    }
}
