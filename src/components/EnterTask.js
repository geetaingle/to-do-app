import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./EnterTask.css";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    color: "rgb(32, 32, 32)",
  },
  focused: {
    color: "rgb(32, 32, 32)",
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
