import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./EnterTask.css";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    color: "black",
  },
  focused: {
    color: "#2e2e2e",
    fontSize: 25,
  },
}));

function EnterTask(props) {
  const classes = useStyles();

  return (
    <>
      <TextField
        id="standard-basic"
        label="What you want to do today?"
        variant="standard"
        className={classes.textField}
        InputProps={{
          classes: { focused: classes.focused },
        }}
        InputLabelProps={{ shrink: props.shrink }}
        inputRef={props.textFieldRef}
        onKeyPress={(e) => props.handleEnterTask(e)}
        onClick={props.handleTextLabel}
      />
    </>
  );
}

export default EnterTask;
