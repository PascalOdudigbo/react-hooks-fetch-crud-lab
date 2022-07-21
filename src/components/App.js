import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(response=> response.json())
    .then(questions=>setQuestions(questions));
  },[]);

  function handleOnAddQuestion(question){
    setQuestions([...questions, question]);
  }
  function handleOnDeleteQuestion(deletedQuestion){
    const newQuestionsList = questions.filter((question)=> question.id !== deletedQuestion.id)
    setQuestions(newQuestionsList);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAddQuestion={handleOnAddQuestion}/> : <QuestionList questions={questions} handleOnDeleteQuestion={handleOnDeleteQuestion}/>}
    </main>
  );
}

export default App;
