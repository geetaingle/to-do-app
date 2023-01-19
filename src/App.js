import "./App.css";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import EnterTask from "./components/EnterTask";
import Task from "./components/Task";
import { useRef, useState, useEffect } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "'Goudy Bookletter 1911', serif",
  },
});
const data = {};

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState(data);
  const [shrinkLabel, setShrinkLabel] = useState(false);

  const textFieldRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setTitle(data.message));
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEnterTask = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      let temp = { ...tasks };

      temp[Math.random()] = {
        taskName: e.target.value,
        isComplete: false,
      };
      setTasks(temp);
      textFieldRef.current.value = null;
      textFieldRef.current.blur();
      setShrinkLabel(false);
    }
  };

  const handleCheck = (key, e) => {
    let temp = { ...tasks };
    temp[key].isComplete = e.target.checked;
    setTasks(temp);
  };

  const handleDelete = (key) => {
    let temp = { ...tasks };
    delete temp[key];
    setTasks(temp);
  };

  const handleTextLabel = () => {
    setShrinkLabel(true);
  };

  const handleClickOutside = (e) => {
    if (textFieldRef.current && !textFieldRef.current.contains(e.target)) {
      setShrinkLabel(false);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="app-title">{title}</div>
      <div className="bg-entertask">
        <EnterTask
          handleEnterTask={handleEnterTask}
          textFieldRef={textFieldRef}
          shrink={shrinkLabel}
          handleTextLabel={handleTextLabel}
        />
      </div>
      <div className="bg-tasklist">
        {Object.entries(tasks).map(([key, val]) => (
          <Task
            key={key}
            taskKey={key}
            task={val}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
