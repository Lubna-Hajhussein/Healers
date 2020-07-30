import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BillForm from './hosform'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//login page
import $ from 'jquery'
import HospitalBill from "./hospitalbill.js";
 

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Login  extends Component {
  constructor(props){
    super(props)
    this.state = {
     id:""
    };


    this.classes = useStyles.bind(this)
    this.handelLogin=this.handelLogin.bind(this)

  }
  handelLogin(){
   window.localStorage.setItem('id',$('#email').val())
   this.setState( {id:localStorage.getItem('id')})
var user={id:this.state.id,email:$('#email').val(),password:$('#password').val()}

$.post('http://localhost:8000/login',{myData: user })
.done(function () { alert(user.userName); 

})
.fail(function (jqxhr, settings, ex) { alert('failed, ' + ex); });

  }
  render() { 
    return (
      <div >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            About Us
          </Typography>

          <Button color="inherit" to="/" component={Link}>Logout</Button>
        </Toolbar>
      </AppBar>
     
       <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={this.classes.paper}>
      <Avatar className={this.classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={this.classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          component={Link} 
          to="/profile"
          className={this.classes.submit}
          onClick={this.handelLogin}
        >
          log in 
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    
  </Container>
  </div> );
  }
}
 
export default Login;

