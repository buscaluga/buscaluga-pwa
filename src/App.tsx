import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./page/HomePage";

function App() {
  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
