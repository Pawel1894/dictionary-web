import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Body from "./components/Body";
import Header from "./components/Header/Header";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import ConnectionStatus from "./components/UI/ConnectionStatus";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      retry: 0,
      staleTime: 2000,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

function App() {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <div
        className="max-w-3xl mx-auto mb-20 md:mb-28"
        data-testid="appEntry"
        id="app-entry"
        data-font="sans serif"
      >
        <h1 className="sr-only">This is dictionary app where you can find words definitions</h1>
        <Header />
        <main>
          <Body />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
      <ConnectionStatus />
    </PersistQueryClientProvider>
  );
}

export default App;
