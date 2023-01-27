import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Body from "./components/Body";
import Header from "./components/Header/Header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="max-w-3xl mx-auto mb-20 md:mb-28"
        data-testid="appEntry"
        id="app-entry"
        data-font="sans serif"
      >
        <Header />
        <main>
          <Body />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
