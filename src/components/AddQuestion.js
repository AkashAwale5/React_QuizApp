import React, { useState } from "react";
import "./AddQuestion.css";


const AddQuestion = (props) => {
    const [enteredQue, setEnterQue] = useState("");
    const [enteredOptionA, setOptionA] = useState("");
    const [enteredOptionB, setOptionB] = useState("");
    const [enteredOptionC, setOptionC] = useState("");
    const [enteredOptionD, setOptionD] = useState("");
    const [queCategory, setQueCategory] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");

    //onchange handler
    const queChangehandler = (event) => {
        setEnterQue(event.target.value);
    };
    const optionAChangehandler = (event) => {
        setOptionA(event.target.value);
    };
    const optionBChangehandler = (event) => {
        setOptionB(event.target.value);
    };
    const optionCChangehandler = (event) => {
        setOptionC(event.target.value);
    };
    const optionDChangehandler = (event) => {
        setOptionD(event.target.value);
    };
    const categoryChangeHandler = (event) => {
        console.log("category change,,," + event.target.value);
        setQueCategory(event.target.value);
    };
    //correct option handler
    const correctOptionChangeHandler = (event) => {
        setCorrectAnswer(event.target.value);
    };
    //form submit handler
    const formHandler = (event) => {
        event.preventDefault();
        //new Question for printing
        const newQuestion = {
            question: enteredQue,
            category: queCategory,
            option1: enteredOptionA,
            option2: enteredOptionB,
            option3: enteredOptionC,
            option4: enteredOptionD,
            correctAnswer: correctAnswer,
        };
        //parent method
        props.saveHandler(newQuestion);
        setEnterQue(" ");
        setOptionA(" ");
        setOptionB(" ");
        setOptionC(" ");
        setOptionD(" ");

    };
    return (
        <form onSubmit={formHandler}>
            <div className="new-question__controls">
                <div className="new-question__control">
                    <label>Enter Question</label>
                    <input type="text" onChange={queChangehandler}
                        value={enteredQue} />
                </div>
                <br></br>
                {/* create category */}
                <div className="new-question__control">
                    <label>Category</label>
                    <select value={queCategory} onChange={categoryChangeHandler}>
                        <option value="React">React</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                        <option value="JavaScript">JavaScript</option>
                    </select>
                </div>
                <br></br>
                <div className="new-question__control">
                    <label>Option A</label>
                    <input type="text" onChange={optionAChangehandler}
                        value={enteredOptionA} />
                </div>
                <br></br>
                <div className="new-question__control">
                    <label>Option B</label>
                    <input type="text" onChange={optionBChangehandler}
                        value={enteredOptionB} />
                </div>
                <br></br>
                <div className="new-question__control">
                    <label>Option C</label>
                    <input type="text" onChange={optionCChangehandler}
                        value={enteredOptionC} />
                </div>
                <br></br>
                <div className="new-question__control">
                    <label>Option D</label>
                    <input type="text" onChange={optionDChangehandler}
                        value={enteredOptionD} />
                </div>
                <br></br>
                {/* dropdownlist for correct option */}
                <div className="new-question__control">
                    <label>Correct Option</label>
                    <select value={correctAnswer} onChange={correctOptionChangeHandler}>
                        <option value={enteredOptionA}>Option A</option>
                        <option value={enteredOptionB}>Option B</option>
                        <option value={enteredOptionC}>Option C</option>
                        <option value={enteredOptionD}>Option D</option>
                    </select>
                </div>
                <br></br>
                <div className="new-question__actions">
                    <button type="submit">Add Question</button>
                    <button onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </form>
    );
};

export default AddQuestion;