import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import Output from "./style/Output";
import TodoListContainer from "./pages/TodoListContainer";
import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Output>
        <TodoListContainer />
      </Output>
    </Provider>
  );
}

export default App;
