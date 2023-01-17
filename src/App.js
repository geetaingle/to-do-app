import "./App.css";
import EnterTask from "./components/EnterTask";

function App() {
  return (
    <div className="App">
      <div className="bg-entertask">
        <EnterTask />
      </div>
      <div className="bg-tasklist">task one</div>
    </div>
  );
}

export default App;
