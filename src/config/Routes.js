import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';

import signInActions from '../pages/Login/redux/actions';
import tasksActions from '../pages/Main/redux/tasksActions';

import LoginPage from '../pages/Login/LoginPage';
import MainPage from '../pages/Main/MainPage';

const Routes = props => {
  const {
    signIn,
    auth,
    state,
    tasks,
    removeTask,
    addTask,
    editTask,
    removeSubTask,
    addSubTask,
    editSubTask
  } = props;
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  if (auth) {
    setCookie('token', auth);
  }
  {console.log(state, 'my state')}
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          cookies['token'] === 'undefined' || cookies['token'] === undefined ? (
            <Redirect to="/login" />
          ) : (
            <Redirect to="/main" />
          )
        }
      />
      <Route
        exact
        path="/login"
        render={() =>
          cookies['token'] === 'undefined' || cookies['token'] === undefined ? (
            <LoginPage signIn={signIn} token={cookies['token']} />
          ) : (
            <Redirect to="/main" />
          )
        }
      />
      <Route
        exact
        path="/main"
        render={() =>
          cookies['token'] === 'undefined' || cookies['token'] === undefined ? (
            <Redirect to="/login" />
          ) : (
            <MainPage
              tasks={tasks}
              removeTask={removeTask}
              addTask={addTask}
              editTask={editTask}
              removeSubTask={removeSubTask}
              addSubTask={addSubTask}
              editSubTask={editSubTask}
            />
          )
        }
      />
    </Switch>
  );
};

const mapStateToProps = state => ({
  auth: state.auth.token,
  state: state,
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signInActions.signIn(email, password)),
  removeTask: index => dispatch(tasksActions.removeTask(index)),
  addTask: name => dispatch(tasksActions.addTask(name)),
  editTask: (name, id) => dispatch(tasksActions.editTask(name, id)),
  removeSubTask: (group_id, id) => dispatch(tasksActions.removeSubTask(group_id, id)),
  addSubTask: (group_id, name) => dispatch(tasksActions.addSubTask(group_id, name)),
  editSubTask: (group_id, id, name) => dispatch(tasksActions.editSubTask(group_id, id, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
