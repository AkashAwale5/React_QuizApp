import Question from "./Question";
import "./Quiz.css";

import QuestionFiltter from "./QuestionFiltter";
import { useState } from "react";

const Quiz = (props) => {
    const { questions } = props;

    //button on change
    const onClickHandle = () => {
        alert("Submitted Successfully !!!");
        console.log(questions);
    };
    //-----Filtter logic----------------------------------------
    const [filteredCategory, setFilteredCategory] = useState("All");
    const filterChangeHandler = (selectedCategory) => {
        setFilteredCategory(selectedCategory);
    };
    const filtteredQuestions = questions.filter((question) => {
        return question.category === filteredCategory;
    })

    //display questions 
    let length1 = filtteredQuestions.length
    let questioncontent = <p>There is No Quiz in {filteredCategory} </p>;
    if (filtteredQuestions.length > 0) {
        questioncontent = filtteredQuestions.map((question, index) => {
            return (
                <div>
                    <Question key={question.id} question={question} len={length1} index={index} />
                    <hr />
                </div>
            )
        });
    }
    //---for all
    filteredCategory === "All" ? length1 = Object.keys(questions).length : length1 = filtteredQuestions.length

    if (filteredCategory === "All") {
        questioncontent = questions.map((question, index) => {
            return (
                <div>
                    <Question key={question.id} question={question} len={length1} index={index} />
                    <hr />
                </div>
            )
        });
    }

    return (
        <div className="quizfull">
            <div className="quiz_totalque">
                <h2>Total Que: {length1}</h2>
                <h2 className="quiz__time">Time:10 Min</h2>
            </div>
            {/* //apply  filtter */}
            <QuestionFiltter
                selected={filteredCategory}
                onChangeFilter={filterChangeHandler}
            />
            {questioncontent}
            <div>
                <button className="quiz_submitbtn" onClick={onClickHandle}>Submit</button>
            </div>
        </div>
    );
};

export default Quiz;