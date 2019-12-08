import React, { useState } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

//material ui
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  root: {
    flexGrow: 1,
    overflow: 'hidden',
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
    width: '100%', // Fix IE 11 issue.
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
    name="editSubTaskName"
    type="text"
    id="editGroup"
    autoComplete="login"
    {...input}
    {...custom}
  />
);

const EditGroup = props => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const { handleSubmit, editSubTask, id, nameEditSubTask, group_id } = props;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const onSubmitData = values => {
    editSubTask(group_id, id, values.nameEditSubTask);
  };

  return (
    <div style={{ display: 'contents' }}>
      <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      {/* Dialog */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form className={classes.form} onSubmit={handleSubmit(onSubmitData)}>
          <DialogContent>
            <DialogContentText>Редактировать текущую группу</DialogContentText>
            <Field component={nameField} name="nameEditSubTask" placeholder={nameEditSubTask} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Отменить
            </Button>
            <Button onClick={handleClose} type="submit" color="primary" type="submit">
              Добавить
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default reduxForm({
  form: 'edit_group'
})(EditGroup);
