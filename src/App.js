import "./App.css";
import Images from "./Components/Images";
import Navbar from "./Components/Navbar";
import SearchField from "./Components/SearchField";

function App() {
  return (
    <div className="">

      <Navbar>
        <SearchField></SearchField>
      </Navbar>

      <Images></Images>

    </div>
  );
}

export default App;
