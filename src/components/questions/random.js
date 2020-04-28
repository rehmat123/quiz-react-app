import React, { Component } from 'react';
import Cookies from 'js-cookie'
var sectionStyle = {
    fontSize: '30px',
    fontWeight: '300',
};


export default class Random extends Component {

    constructor(props) {
        super(props);
        Cookies.get('authorize') == null ? this.props.history.push('/') : this.props.history.push('/random-question');
        Cookies.get('payment') == 'expire' ? this.props.history.push('/membership') : '';
    }

    routeChange = () => {
        let path = `/quiz/category/random`;
        this.props.history.push(path);
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-4">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam  red long"><span>Morning Session</span></div>
                    </div>
                    <div className="col-md-4">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam green long"><span>Afternoon Session</span></div>
                    </div>
                </div>

            </div>
        );
    }
}
