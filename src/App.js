import { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import TodoContainer from "./containers/todoContainer/TodoContainer";
import { Output } from "./styles/Output.style";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { Provider } from "react-redux";
import store from "./stores/rootReducer";
import LoginContainer from "./containers/loginContainer/LoginContainer";

function App() {
  const [user, setUser] = useState(null);
  const foo = [{ name: "jake" }, { name: "james" }];

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Output>
          <GlobalStyle />
          {!user ? <LoginContainer /> : <TodoContainer />}
        </Output>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
