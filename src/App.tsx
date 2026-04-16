import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { TransactionContextProvider } from "./contexts/TransactionsContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SavingsContextProvider } from "./contexts/SavingsContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TransactionContextProvider>
        <SavingsContextProvider>
          <BrowserRouter>
            <ToastContainer />
            <AppRoutes />
            <GlobalStyles />
          </BrowserRouter>
        </SavingsContextProvider>
      </TransactionContextProvider>
    </ThemeProvider>
  );
}

export default App;
