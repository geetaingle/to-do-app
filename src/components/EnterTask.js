import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./EnterTask.css";

const useStyles = makeStyles((theme) => ({
  textField: {
    // "&:focus": {
    //   backgroundColor: "#fff",
    //   borderColor: "#0e1f31",
    //   color: "#0e1f31",
    // },
    "&.Mui-focused": {
      borderColor: "#C52328",
      borderWidth: "2px",
    },
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
      />
    </>
  );
}

export default EnterTask;
