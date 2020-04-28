import React, { Component } from 'react';
import Background from '../../../public/assets/background.png';
import Cookies from 'js-cookie'
var sectionStyle = {
    backgroundImage: `url(${Background})`,
    color: 'rgb(0,0,0,1)',
    fontSize: '30px',
    fontWeight: '300',
};

export default class Snap extends Component {

    constructor(props) {
        super(props);
        Cookies.get('authorize') == null ? this.props.history.push('/') : this.props.history.push('/snap-question');
        Cookies.get('payment') == 'expire' ? this.props.history.push('/membership') : '';
    }

    routeChange = () => {
        let path = `/quiz/category/snap`;
        this.props.history.push(path);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span>Snap Exam 1</span></div>
                    </div>
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span>Snap Exam 2</span></div>
                    </div>
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span> Snap Exam 3</span></div>
                    </div>
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span>Snap Exam 4</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span>Snap Exam 5</span></div>
                    </div>
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span>Snap Exam 6</span></div>
                    </div>
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span>Snap Exam 7</span></div>
                    </div>
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span>Snap Exam 8</span></div>
                    </div>
                </div>
                <div className="row max-height">
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span>Snap Exam 9</span></div>
                    </div>
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span>Snap Exam 10</span></div>
                    </div>
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span>Snap Exam 11</span></div>
                    </div>
                    <div className="col-md-3">
                        <div style={sectionStyle} onClick={this.routeChange} className="exam"><span>Snap Exam 12</span></div>
                    </div>
                </div>
            </div>
        );
    }
}
