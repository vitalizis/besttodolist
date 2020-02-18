import React, { useState } from 'react';

import { useCookies } from 'react-cookie';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import CreateGroup from './components/CreateGroup';
import EditGroup from './components/EditGroup';
import CreateSubTask from './components/CreateSubTask';
import EditSubTask from './components/EditSubTask';

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

const MainPage = props => {
  const { tasks, removeTask, addTask, editTask, removeSubTask, addSubTask, editSubTask } = props;
  const [cookies, removeCookie] = useCookies(['cookie-name']);
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = useState(false);
  const logOut = () => {
    removeCookie('token');
    window.location.reload();
  };

  const removeTaskClick = id => {
    console.log('click!');
    removeTask(id);
  };

  const removeSubTaskClick = (group_id, id) => {
    removeSubTask(group_id, id);
  };
  
  const classes = useStyles();
  return (
    <div>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={logOut}
      >
        Logout
      </Button>
      <CreateGroup addTask={addTask} />
      {tasks
        ? tasks.map(task => (
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Grid justify="space-between" container spacing={24}>
                    <Grid item>
                      <Typography gutterBottom variant="h5" component="h2">
                        Группа: {task.name}
                      </Typography>
                    </Grid>
                    <EditGroup id={task.id} editTask={editTask} nameEditTask={task.name} />
                    <Grid item>
                      <div>
                        <DeleteIcon onClick={() => removeTaskClick(task.id)} color="secondary">
                          Delete
                          <DeleteIcon className={classes.rightIcon} />
                        </DeleteIcon>
                        {/* </Button> */}
                      </div>
                    </Grid>
                  </Grid>
                  <CreateSubTask addSubTask={addSubTask} group_id={task.id} />
                  <List dense={dense}>
                    {task.subTasks
                      ? task.subTasks.map(subTask => (
                          <ListItem>
                            <ListItemText
                              primary={subTask.name}
                              secondary={secondary ? 'Secondary text' : null}
                            />
                            <ListItemSecondaryAction>
                              <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => removeSubTaskClick(task.id, subTask.id)}
                              >
                                <DeleteIcon />
                              </IconButton>
                              <EditSubTask
                                nameEditSubTask={subTask.name}
                                group_id={task.id}
                                id={subTask.id}
                                editSubTask={editSubTask}
                              />
                            </ListItemSecondaryAction>
                          </ListItem>
                        ))
                      : null}
                  </List>
                </Grid>
              </Grid>
            </Paper>
          ))
        : null}
    </div>
  );
};

export default MainPage;
