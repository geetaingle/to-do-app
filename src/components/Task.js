import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

function Task(props) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.taskPaper}>{props.task.taskName}</Paper>
    </>
  );
}

export default Task;
