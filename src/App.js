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

  const onChange = (e) => {
    const baz = foo.filter((item) => {
      let a = item.name.split("");
      for (let i = 0; i < a.length; i++) {
        console.log(a);
        return a[i] === e.target.value;
      }
    });
    console.log(baz);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Output>
          <GlobalStyle />
          <TodoContainer />
        </Output>
      </ThemeProvider>
      <input type='text' onChange={onChange} />
    </Provider>
  );
}

export default App;
