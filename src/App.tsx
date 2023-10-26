import React from "react";
import "./App.css";
import { Main } from "./components/Main";
import { Quiz } from "./components/Quiz";
import { QuizForm } from "./components/QuizForm";
import { Process } from "./components/Process";
import { Guarantees } from "./components/Guarantees";
import { Comparing } from "./components/Comparing";
import { Cases } from "./components/Cases";
import { FormBottom } from "./components/FormBottom";
import Footer from "./components/Footer";
import { ModalCallMe } from "./components/ModalCallMe";
import { ModalsContainer } from "./components/ModalsContainer";
import { RealFooter } from "./components/RealFooter";

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

      <Footer></Footer>
      <ModalsContainer></ModalsContainer>
      <RealFooter></RealFooter>
    </div>
  );
}

export default App;
