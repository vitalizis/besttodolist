import React, { useState } from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";

//material ui
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  card: {
    minWidth: 275
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const nameField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="createGroupName"
    label="Create group"
    type="text"
    id="createGroup"
    autoComplete="login"
    {...input}
    {...custom}
  />
);

const CreateGroup = props => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const { handleSubmit, addTask } = props;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const onSubmitData = values => {
    addTask(values.createGroupName);
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid justify="space-between" container spacing={24}>
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                Добавить новую группу
              </Typography>
            </Grid>

            <Grid item>
              <div>
                <Fab
                  color="secondary"
                  aria-label="add"
                  className={classes.margin}
                  onClick={handleClickOpen}
                >
                  <AddIcon />
                </Fab>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* </form> */}
      </Paper>
      {/* Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form className={classes.form} onSubmit={handleSubmit(onSubmitData)}>
          <DialogContent>
            <DialogContentText>Добавить новую группу</DialogContentText>
            <Field component={nameField} name="createGroupName" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Отменить
            </Button>
            <Button onClick={handleClose} type="submit" color="primary">
              Добавить
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default reduxForm({
  form: "create_group"
})(CreateGroup);
