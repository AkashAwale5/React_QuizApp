
import './App.css';
import NewQuestion from './components/NewQuestion';
import Quiz from './components/Quiz';
import { useState } from 'react';

function App() {
  const questions = [
    { id: 1, question: "What is React JS?", option1: "Used For frontend", option2: "used for backend", option3: "framework", option4: "All of the above" ,category:"React",correctAnswer:"Used For frontend"},
    { id: 2, question: "What is Virtual Dom?", option1: "Used For Rendering", option2: "Avoid Refresh", option3: "None Of the Above ", option4: "All of the above",category:"React",correctAnswer:"All of the above" },
    { id: 3, question: "What is JavaScript", option1: "Used For Rendering", option2: "Avoid Refresh", option3: "None Of the Above", option4: "All of the above",category:"JavaScript",correctAnswer:"None Of the Above" },
    { id: 4, question: "What is Java", option1: "Used For webdevelopment", option2: "web", option3: "None Of the Above ", option4: "All of the above",category:"Java",correctAnswer:"Used For webdevelopment" }
  ];

  const [question, setQuestion] = useState(questions);
  //create method
  const addquestionhandler = (question) => {
    console.log(question);
    setQuestion((prevState) => {
      return [question, ...prevState];
    });
  };
  return (
    <div className="App">
      <h1>Quiz-App</h1>
      {/* assignment 2 */}
       <NewQuestion addquestion={addquestionhandler} /> 
      {/* assignment 1 start */}
       <Quiz questions={question} /> 
    </div>
  );
}

export default App;
