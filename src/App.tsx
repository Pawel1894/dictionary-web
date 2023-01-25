import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query/build/lib/QueryClientProvider";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div data-testid="appEntry" id="app-entry" data-font="sans serif">
        <Header />
        <main>
          <Search />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
