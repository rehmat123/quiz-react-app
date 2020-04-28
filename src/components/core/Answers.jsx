import React, {Component} from 'react';

class Answers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnswered: false,
            classNames: ['', '', '', '',''],
            
        }

        this.checkAnswer = this.checkAnswer.bind(this);
        this.clearClasses = this.clearClasses.bind(this);
    }
    
    checkAnswer(e) {
        let { isAnswered, questionNo,active ,changeactive} = this.props;
            this.clearClasses();
            let elem = e.currentTarget;
            
            let { correct, increaseScore ,myAnswer } = this.props;
            
           
            changeactive(elem.dataset.id);
            

            myAnswer(questionNo,elem.dataset.id)
            

            this.props.showButton();       
           
        
    }
    clearClasses(){
        this.setState({
            classNames: ['', '', '', '','']
        })
        
    }
    render() {
        let { answers } = this.props;
        let { classNames } = this.state;
        
        let transition = {
            transitionName: "example",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300
        }
        
        return (
            <div id="answers">
               
                <ul>
                    
                    <li onClick={this.checkAnswer} 
                        className={(parseInt(this.props.active) === 1 || parseInt(this.props.questiondata.my_answer) === 1 ) ? 'right': ''}  data-id="1">
                    <span>A</span> 
                    <p>{answers[0]}</p></li>

                    <li onClick={this.checkAnswer} 
                        className={ (parseInt(this.props.active) === 2 || parseInt(this.props.questiondata.my_answer) ===2 ) ? 'right': ''} data-id="2">
                    <span>B</span> 
                    <p>{answers[1]}</p></li>

                    <li onClick={this.checkAnswer} 
                       className={(parseInt(this.props.active) === 3  || parseInt(this.props.questiondata.my_answer) ===3) ? 'right': ''} data-id="3">
                    <span>C</span> 
                    <p>{answers[2]}</p></li>

                    <li onClick={this.checkAnswer} 
                        className={(parseInt(this.props.active) === 4 || parseInt(this.props.questiondata.my_answer) ===4) ? 'right': ''} data-id="4">
                    <span>D</span> 
                    <p>{answers[3]}</p></li>

                    <li onClick={this.checkAnswer} 
                        className={(parseInt(this.props.active) === 5  || parseInt(this.props.questiondata.my_answer) ===5) ? 'right': ''}  data-id="5">
                    <span>E</span> 
                    <p>{answers[4]}</p></li>
                </ul>
            </div>
        );
    }
}

export default Answers