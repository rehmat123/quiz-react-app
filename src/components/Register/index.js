import React, { Component } from 'react'
import Cookies from 'js-cookie';
import Globals from '../../Globals/constant';
import Errors from '../Error/index';
export default class Register extends Component {
    state = {
        'errors': [],
        'fname': '',
        'lname': '',
        'email': '',
        'phone': '',
        loading: false,
        uploadValue: 'Sign Up',
        'message': ''
    }
    onChange = date => this.setState({ date })
    register =  (event) => {
        event.preventDefault();
       
        if (this.state.email === '' || this.state.password === '') {
            return this.setState({ errors: ['Email and Password Both Required'] })
        }
        let lastAtPos = this.state.email.lastIndexOf('@');
        let lastDotPos = this.state.email.lastIndexOf('.');
 
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
            return this.setState({ errors: ['Email is not valid'] })
        }
        this.setState({ loading: true, uploadValue: 'Loading....' })
        
        fetch(Globals.api + '/api/user/signup', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: 'first_name=' + this.state.fname + '&last_name=' + this.state.lname + '&email=' + this.state.email +'&phone=' + encodeURIComponent(this.state.phone)
        }).then(res => res.json()).then((data) => {
            if (data.status=="true") {
                this.setState({ loading: false, uploadValue: 'Done Registration' })
                this.setState({ errors: [] })
                this.setState({ message: data.message })
            } else {
                this.setState({ loading: false, uploadValue: 'Sign Up' })
                this.setState({ errors: [data.message] })
            }
        }).then(console.log)
    }
    render() {
        return (
            <div className="sign-up-form-box">
              
                <div className="inner-form-box">
                    <Errors errors={this.state.errors} />
                    {this.state.message ? <div class='alert-success'>{this.state.message}</div> : ''}
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.fname} onChange={event => this.setState({ fname: event.target.value })} placeholder="First name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.lname} onChange={event => this.setState({ lname: event.target.value })} placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} placeholder="Email Address" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.phone} onChange={event => this.setState({ phone: event.target.value })} placeholder="Phone Number" />
                    </div>
                    <button className="btn btn-block submit-btn" onClick={this.register}>{this.state.loading === true && <i className="fa fa-spinner fa-spin spin1"></i>}{this.state.uploadValue}</button>
                </div>
            </div>
        )
    }
}