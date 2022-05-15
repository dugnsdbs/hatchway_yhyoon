import React, { useState } from 'react'
import useStyles from './styles.js'
import { Container, Paper, Button, Grid, Typography, Avatar } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined"
import Input from './Input.js';
import { useHistory } from 'react-router-dom'
import { signin, signup } from '../../actions/auth';
import { useDispatch } from 'react-redux'



const initialState = { firstName:"", lastName:"", email:"", password:"", confirmPassword:""}

const Auth = () => {

  const [formData, setFormData] = useState(initialState)
  const [isSignup, setIsSingup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory()

  const switchSignup = () => {
    setIsSingup((preIsSignup) => !preIsSignup)
  }

  const handleShowPassword = () => {
    setShowPassword((preShowPassword) => !preShowPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignup){
      dispatch(signup(formData, history))
      history.push('/')
    }else{
      dispatch(signin(formData, history));
      history.push('/')
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: {result, token}});
      history.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try Again Later");
  }

  const googleId = process.env.React_App_GOOGLE_KEY

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} elevation={5}>
        <Avatar className={classes.avatar}>
          <LockOutLinedIcon/>
        </Avatar>
        <Typography variant="h5" > { isSignup ? "Sign Up" : "Sign In" }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                  <Input name="lastName" label="Last Name" handleChange={handleChange}  half/>
                </>
              ) }
              <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "test" : "password"} handleShowPassword={handleShowPassword}/>
              { isSignup ? <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/> : null}
          </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                { isSignup ? "Sign Up" : "Sign In"}
              </Button>
          <GoogleLogin
          clientId ={googleId}
          render={(renderProps) => (
            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
              Google Sign In
            </Button>
          )}
          onSuccess = {googleSuccess}
          onFailure = {googleFailure}
          cookiesPolicy = "single_host_origin"
          />

          <Grid container justfycontent ="flex-end">
            <Grid item>
              <Button onClick={switchSignup} >
                { isSignup ?  "Don't have an account? Sign Up" : "Already have an account? Sign In "  }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth