import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { theme } from "./Layout";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <div></div>
      </Layout>
    </ThemeProvider>
  );
};
