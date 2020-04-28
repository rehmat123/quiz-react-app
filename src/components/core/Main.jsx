import React, { Component } from 'react';
import Answers from './Answers.jsx';
import Popup from './Popup.jsx';
import Background from '../../../public/assets/logo.png';
import Globals from '../../Globals/constant';
import Cookies from 'js-cookie'

var sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    color: 'rgb(0,0,0,1)',
    fontSize: '30px',
    fontWeight: '300',

};

class Main extends Component {

    constructor(props) {
        super(props);
        Cookies.get('authorize') == null ? this.props.history.push('/') : '';
        Cookies.get('payment') == 'expire' ? this.props.history.push('/membership') : '';
        this.state = {
            question_data: [],
            count: 0,
            total: '',
            showButton: false,
            questionAnswered: false,
            score: 0,
            description: '',
            displayPopup: 'flex',
            my_answer: [],
            active: 0,
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.PreviousQuestion = this.PreviousQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
        this.handleMy_answer = this.handleMy_answer.bind(this);
    }
    componentDidMount() {
        const { handle } = this.props.match.params
        var url = '/api/user/quiz';
        if (handle == 'snap') {
            var body = 'category= snap';
        }
        if (handle == 'random') {
            url = '/api/user/randomquiz';
            var body = 'category= snap';
        }
        if (handle == 'torts') {
            var body = 'category= Torts';
        }
        if (handle == 'criminal-law') {
            var body = 'category= Criminal Law';
        }
        if (handle == 'contract') {
            var body = 'category= Contract';
        }
        if (handle == 'money-launderting-taxation') {
            var body = 'category= Money Laundering and Taxation';
        }
        if (handle == 'proffesional-conduct-and-accounts') {
            var body = 'category= Professional Conduct and Accounts';
        }
        if (handle == 'law-of-the-eu') {
            var body = 'category= Law of the EU';
        }
        if (handle == 'england-legal-system') {
            var body = 'category= England Legal System, Constitutional Law and Human Rights';
        }
        if (handle == 'property-law') {
            var body = 'category= Property Law';
        }



        fetch(Globals.api + url, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: body
        }).then(res => res.json()).then((data) => {
            this.setState({ question_data: data.data });
            this.setState({ total: data.data.length });

        }).then(() => {
            let { count } = this.state;
            this.insertData(count);
        });

    }


    insertData(count) {
        this.setState({
            question: this.state.question_data[count].q_question,
            answers: [
                this.state.question_data[count].q_a,
                this.state.question_data[count].q_b,
                this.state.question_data[count].q_c,
                this.state.question_data[count].q_d,
                this.state.question_data[count].q_e,
            ],
            description: this.state.question_data[count].q_desc,
            correct: this.state.question_data[count].q_cor,
            count: this.state.count + 1
        });
    }
    insertDataPrevious(count) {
        this.setState({
            question: this.state.question_data[count].q_question,
            answers: [
                this.state.question_data[count].q_a,
                this.state.question_data[count].q_b,
                this.state.question_data[count].q_c,
                this.state.question_data[count].q_d,
                this.state.question_data[count].q_e,
            ],
            description: this.state.question_data[count].q_desc,
            correct: this.state.question_data[count].q_cor,
            count: this.state.count - 1
        });
    }


    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    nextQuestion() {
        let { count, total } = this.state;

        this.setState({
            active: 0
        })


        if (count === total) {
            let total = 0;
            for (var i = 0; i < this.state.question_data.length; i++) {
                if (parseInt(this.state.question_data[i].q_cor) == parseInt(this.state.question_data[i].my_answer)) {
                    total = total + 1
                }
            }
            this.setState({
                displayPopup: 'flex',
                score: total
            });
        } else {
            this.insertData(count);
            this.setState({
                questionAnswered: false
            });
        }
    }

    PreviousQuestion() {
        let { count, total } = this.state;

        this.setState({
            active: 0
        })

        if (count === 2) {

            this.setState({
                showButton: false,
            });
        }
        this.insertDataPrevious(count - 1);
        this.setState({
            questionAnswered: false
        });

    }

    handleStartQuiz() {
        this.setState({
            displayPopup: 'none',
            count: 1
        });
    }

    handleIncreaseScore(id) {
        this.setState({
            active: id
        })
    }
    handleMy_answer(question_no, answer) {
        this.state.question_data[question_no - 1].my_answer = answer;
        this.forceUpdate();
    }

    closetest() {
        window.location.href = '/home';
    }
    render() {
        const { handle } = this.props.match.params;
        var type = handle;

        let { count, total, description, question, answers, correct, showButton, questionAnswered, displayPopup, score } = this.state;

        if (!answers) {
            return null;
        }

        return (
            <div className="container margin-top1">
                {
                    (this.state.displayPopup == 'flex' && this.state.score) ? <Popup style={{ display: this.state.displayPopup }}
                        score={this.state.score}
                        total={this.state.total}
                        startQuiz={this.handleStartQuiz}
                    /> : ''}

                <button style={sectionStyle} onClick={this.closetest} className="exit pull-right">  </button>
                <div className="row">
                    <div className="col-lg-12 col-md-10">
                        <div id="question">
                            <div className="pull-right">Time : 02:50:00</div>
                            <div className="pull-left"> Question {count}/{total}</div>
                            <h4 className="bg-light">{type.charAt(0).toUpperCase() + type.slice(1)} Quiz</h4>


                        </div>
                        <div className="description">
                            <p> {description}</p>
                        </div>
                        <div className="question">
                            <p>{question}</p>
                        </div>
                        <Answers
                            questionNo={count}
                            answers={answers}
                            correct={correct}
                            showButton={this.handleShowButton}
                            isAnswered={questionAnswered}
                            changeactive={this.handleIncreaseScore}
                            myAnswer={this.handleMy_answer}
                            active={this.state.active}
                            questiondata={this.state.question_data[count - 1]}
                        />


                        <div id="submit">
                            {showButton ? <button className="fancy-btn pull-left"
                                onClick={this.PreviousQuestion}
                            > Previous question
                                        </button> : ''}

                            {showButton ?
                                <button className="fancy-btn pull-right"
                                    onClick={this.nextQuestion} >
                                    {count === total ? 'Finish quiz' : 'Next question'}
                                </button> : <span></span>}
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default Main;