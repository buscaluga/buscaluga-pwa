import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defaultTheme } from "./config/theme";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./page/HomePage";
import { SearchProvider } from "./context/SearchContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <HomePage />
        </SearchProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
