
import "./Question.css";

const Question = (props) => {
    return (
        <div className="Question-item">
            <div className="question-item">
                <h1><span>Q{props.index+1}.</span>
                    {props.question.question}</h1>
            </div>
            <div>
                <div className="question__option" ><span>1.</span>{props.question.option1}</div>
                <div className="question__option" ><span>2.</span>{props.question.option2}</div>
                <div className="question__option" ><span>3.</span>{props.question.option3}</div>
                <div className="question__option" ><span>4.</span>{props.question.option4}</div>
                <h1 className="question_page">{props.index+1} of {props.len}</h1>
            </div>
        </div>
    );
};

export default Question;