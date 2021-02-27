import { GlobalStyle } from "./styles/GlobalStyle.js";
import { Output } from "./styles/Output.style.js";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { Provider } from "react-redux";
import store from "./stores/rootReducer";
import PageRouter from "./pages/PageRouter";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Output>
          <GlobalStyle />
          <PageRouter />
        </Output>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
