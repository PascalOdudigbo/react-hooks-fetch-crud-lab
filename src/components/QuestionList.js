import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({questions, handleOnDeleteQuestion}) {

  const questionItem = questions.map(question => <QuestionItem key={question.id} question={question} onDeleteQuestion={handleOnDeleteQuestion}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItem}</ul>
    </section>
  );
}

export default QuestionList;
