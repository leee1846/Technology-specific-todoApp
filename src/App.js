import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import Output from "./style/Output";
import TodoListContainer from "./pages/TodoListContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Output>
        <TodoListContainer />
      </Output>
    </>
  );
}

export default App;
