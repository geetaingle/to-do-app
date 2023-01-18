import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import EnterTask from "./components/EnterTask";
import Task from "./components/Task";
import { useRef, useState, useEffect } from "react";

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Goudy Bookletter 1911', serif",
  },
});
const data = {};

function App() {
  const [tasks, setTasks] = useState(data);
  const [shrinkLabel, setShrinkLabel] = useState(false);

  const textFieldRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEnterTask = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      let temp = { ...tasks };

      temp[Object.keys(temp).length] = {
        taskName: e.target.value,
        isComplete: false,
      };
      setTasks(temp);
      textFieldRef.current.value = null;
      textFieldRef.current.blur();
      setShrinkLabel(false);
    }
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
          <Task key={key} task={val} />
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
