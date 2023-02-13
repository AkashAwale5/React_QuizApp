import React from "react";
import AddQuestion from "./AddQuestion";
import { useState } from "react";
import "./NewQuestion.css";
const NewQuestion = (props) => {

const [isEditing, setIsEditing] = useState(false);

const saveQuestionDataHandler = (enteredQueData) => {
  console.log(enteredQueData);
  const questionData =
  {
    ...enteredQueData,//id: Math.random().toString()
  };
  props.addquestion(questionData);//addquestion
  setIsEditing(false);
};

const startEditingHandler = () => {
  setIsEditing(true);
};
const stopEditingHandler = () => {
  setIsEditing(false);
};
return (
  <div className="new-question">
    {!isEditing && (
      <button onClick={startEditingHandler}>Add New Question</button>
    )}
    {isEditing && (
      <AddQuestion saveHandler={saveQuestionDataHandler}
      onCancel={stopEditingHandler}
       /> 
    )}
  </div>
);
};





export default NewQuestion;