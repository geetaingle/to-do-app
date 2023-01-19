import { Checkbox, IconButton, Paper } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "./Task.css";
import Delete from "@mui/icons-material/Delete";

const useStyles = makeStyles((theme) => ({
  taskPaper: {
    margin: 5,
    padding: 10,
    backgroundColor: "#ffffff7a",
    position: "relative",
    height: 30,
    lineHeight: "25px",
    fontSize: 17,
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
  const classes = useStyles();

  return (
    <>
      <Paper
        className={classes.taskPaper}
        id={props.task.isComplete ? "task-complete" : ""}
      >
        <span>{props.task.taskName}</span>
        <span className="task-checkbox">
          <CustomCheckBox
            checked={props.task.isComplete}
            onChange={(e) => props.handleCheck(props.taskKey, e)}
          />

          <IconButton
            aria-label="delete"
            onClick={() => props.handleDelete(props.taskKey)}
          >
            <Delete color="error" />
          </IconButton>
        </span>
      </Paper>
    </>
  );
}

export default Task;
