import React from 'react';

import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

import { Redirect, Link } from 'react-router-dom';

//material ui import
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
const loginField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="login"
    label="login"
    type="text"
    id="login"
    autoComplete="login"
    {...input}
    {...custom}
  />
);

const passwordField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    name="password"
    label="password"
    type="password"
    id="password"
    autoComplete="password"
    {...input}
    {...custom}
  />
);

const LoginPage = props => {
  const { signIn, handleSubmit, token } = props;

  const classes = useStyles();

  const onSubmitData = values => {
    console.log(values);
    signIn(values.login, values.password);
  };

  const login = () => {
    window.location.reload();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmitData)}>
          <Field component={loginField} name="login" />
          <Field component={passwordField} name="password" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default reduxForm({
  form: 'login'
})(LoginPage);
