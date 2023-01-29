import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Body from "./components/Body";
import Header from "./components/Header/Header";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import Install from "./components/PWA/Install";

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
        <Install />
        <Header />
        <main>
          <Body />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </PersistQueryClientProvider>
  );
}

export default App;
