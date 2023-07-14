import React from "react";
import "./App.css";
import { Main } from "./components/Main";
import { Quiz } from "./components/Quiz";
import { QuizForm } from "./components/QuizForm";
import { Process } from "./components/Process";
import { Guarantees } from "./components/Guarantees";
import { Comparing } from "./components/Comparing";
import { Cases } from "./components/Cases";

function App() {
  return (
    <div className="App">
      <Main></Main>
      <Quiz>
        <QuizForm></QuizForm>
      </Quiz>
      <Process></Process>
      <Guarantees></Guarantees>
      <Comparing></Comparing>
      <Cases></Cases>
    </div>
  );
}

export default App;
