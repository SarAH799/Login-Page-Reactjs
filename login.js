import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core'

const Login=()=>{

    const paperStyle={ padding: 20, height: '50vh', width: 280, margin: '40px auto'}
    const btnstyle={margin:'20px auto' }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar>S</Avatar>
                <h2>Sign In</h2>
                </Grid>

                <TextField label='Username' placeholder='Enter Username' fullWidth required/>
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant= 'contained'fullWidth style={btnstyle}>Login</Button>
                <Typography>
                    <Link href="#">
                        Forgot Password
                    </Link>
                </Typography>
                <Typography>Do you have an account?
                    <Link href="#">
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login