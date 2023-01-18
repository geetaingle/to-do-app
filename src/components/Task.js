import { Paper, Checkbox } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { useState } from "react";
import "./Task.css";

const useStyles = makeStyles((theme) => ({
  taskPaper: {
    margin: 5,
    padding: 10,
    backgroundColor: "#ffffff7a",
    "&:hover": {
      backgroundColor: "#ffffffcf",
    },
  },
}));

const CustomCheckBox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Task(props) {
  const [checked, setChecked] = useState(false);

  const classes = useStyles();

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleDelete = () => {
    // Do something when the button is clicked
  };

  return (
    <>
      <Paper className={classes.taskPaper}>
        <span>{props.task.taskName}</span>
        <span className="task-checkbox">
          <CustomCheckBox checked={checked} onChange={handleCheck} />
        </span>
      </Paper>
    </>
  );
}

export default Task;
