import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
  return (
    <div data-testid="appEntry" id="app-entry" data-font="sans serif">
      <Header />
      <main>
        <Search />
      </main>
    </div>
  );
}

export default App;
