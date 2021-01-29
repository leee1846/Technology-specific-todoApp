import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import TodoContainer from "./containers/TodoContainer";
import { Output } from "./styles/Output.style";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Output>
        <GlobalStyle />
        <TodoContainer />
      </Output>
    </ThemeProvider>
  );
}

export default App;
