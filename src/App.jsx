import "./App.css";
import { Banner } from "./components/Banner";
import { DataGrid } from "./components/DataGrid";
import { Navbar } from "./components/Navbar";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Banner /> */}
      <SearchForm />
      <DataGrid />
    </div>
  );
}

export default App;
