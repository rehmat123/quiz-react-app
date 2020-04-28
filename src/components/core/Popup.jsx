import React, { Component } from 'react';
import MyButton from '../util/MyButton.jsx';
import Fade from 'react-reveal/Fade';
class Popup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time: 'end',
            title: 'Congratulations!',
            buttonText: 'Go to Home'
        };

        this.popupHandle = this.popupHandle.bind(this);
    }

    popupHandle() {
        window.location.href = '/home';

    }



    componentWillReceiveProps(nextProps) {
        this.setState({
            text: 'You have completed the quiz. <br /> You got: <strong>' + this.props.score +
                '</strong> out of <strong>' +
                this.props.total +
                '</strong> questions right.'
        })
    }


    render() {

        let { title, text, buttonText } = this.state;

        let { style } = this.props;

        return (
            <Fade delay={500}>
                <div className="popup-container" style={style}>
                    <div className="container">
                        <div className="ml-5 col-md-10 col-10">
                            <div className="popup">
                                <h1>{title}</h1>
                                <p>You have completed the quiz. <br /> You got: <strong> {this.props.score} </strong> out of <strong>  {this.props.total} </strong> questions right.</p>
                                <span onClick={this.popupHandle}>
                                    <MyButton
                                        text={buttonText}
                                        bck='#FF9800'
                                        color='#fff'
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Popup;

