import React, { Component } from 'react';
import Cookies from 'js-cookie'
var sectionStyle = {
    fontSize: '30px',
    fontWeight: '300',
};

export default class Category extends Component {


    constructor(props) {
        super(props);
        Cookies.get('authorize') == null ? this.props.history.push('/') : '';
        Cookies.get('payment') == 'expire' ? this.props.history.push('/membership') : '';
    }

    routeChange = () => {
        var { handle } = this.props.match.params
        let path = `/quiz/category/` + handle;
        this.props.history.push(path);
    }

    render() {

        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-4">
                        <div style={sectionStyle} onClick={this.routeChange} className="red-back exam random-exam long"><span>Mock Exam 1</span></div>
                    </div>
                    <div className="col-md-4">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam random-exam long"><span>Mock Exam 2</span></div>
                    </div>
                    <div className="col-md-4">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam random-exam blue long"><span>Mock Exam 3</span></div>
                    </div>
                </div>

            </div>
        );
    }
}
