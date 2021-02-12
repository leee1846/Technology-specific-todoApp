import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import TodoContainer from "./containers/TodoContainer";
import { Output } from "./styles/Output.style";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { Provider } from "react-redux";
import store from "./stores/rootReducer";

function App() {
  const foo = [{ name: "jake" }, { name: "james" }];

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Output>
          <GlobalStyle />
          <TodoContainer />
        </Output>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
