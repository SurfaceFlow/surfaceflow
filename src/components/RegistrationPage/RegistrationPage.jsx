import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'

import { register } from '../actions/auth'

const useStyles = makeStyles({
    button: {
        '&.MuiButton-root': { 
            fontSize: 22, 
            minWidth: 170, 
            height: 60,
            backgroundColor: '#023866',
            marginTop: 28
        }
    },
    header: {
        '&.MuiTypography-root': {
            color: '#023866',
            fontSize: 46
        }
    },
    textField: {
        '& .MuiInputLabel-root': {
            color: '#023866',
            top: '-2px',
            backgroundColor: 'ghostwhite',
            padding: '0 9px'
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '2px solid #023866'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#023866'
        }
    },
    link: {
        '&.MuiTypography-root': {
            color: '#73738D',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: 18
        }
    }
})

const RegistrationPage = (props) => {
    const { t } = useTranslation()

    const form = useRef()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const classes = useStyles()
    const dispatch = useDispatch()

    const onChangeUsername = (e) => {
        const username = e.target.value
        setUsername(username)
    };

    const onChangeEmail = (e) => {
        const email = e.target.value
        setEmail(email)
    };

    const onChangePassword = (e) => {
        const password = e.target.value
        setPassword(password)
    };

    const validateUsername = () => {
        if (username.length === 0) setUsernameError(t("usernameerror"))
        else setUsernameError('')
    }

    const validateEmail = () => {
        if (email.length === 0) setEmailError(t("emailerror"))
        else setEmailError('')
    }

    const validatePassword = () => {
        if (password.length <= 8) setPasswordError(t("passworderror"))
        else setPasswordError('')
    }

    const handleRegister = (e) => {
        e.preventDefault()

        validateUsername()
        validateEmail()
        validatePassword()

        if (username.length === 0 || email.length === 0 || password.length <= 8) return

        dispatch(register(username, email, password))
            .then(() => {
                props.history.push('/login')
            })
            .catch((err) => {
                console.error(err);
            })
        
    }

    return (
        <div className="vh-90">
            <div className="centered-element">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    >
                        <Typography className={classes.header} component="h1" variant="h5">
                            {t("signup")}
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleRegister} ref={form} sx={{ mt: 3 }}>
                            <Grid container>
                                <Grid item xs={12} sx={{mt: 4}}>
                                    <TextField
                                    className={classes.textField}
                                    required
                                    fullWidth
                                    id="username"
                                    label={t("username")}
                                    name="username"
                                    autoComplete="username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    error={usernameError}
                                    helperText={usernameError}
                                    onBlur={validateUsername}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{mt: 4}}>
                                    <TextField
                                    className={classes.textField}
                                    required
                                    fullWidth
                                    id="email"
                                    label={t("emailaddress")}
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    error={emailError}
                                    helperText={emailError}
                                    onBlur={validateEmail}
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{mt: 4}}>
                                    <TextField
                                    className={classes.textField}
                                    required
                                    fullWidth
                                    name="password"
                                    label={t("password")}
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={onChangePassword}
                                    error={passwordError}
                                    helperText={passwordError}
                                    onBlur={validatePassword}
                                    />
                                </Grid>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" className={classes.button} >
                                {t("signup")}
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item style={{margin: '10px auto'}}>
                                    <Link href="/login" variant="body2" className={classes.link} >
                                        {t("Already have an account? Sign in")}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>
        </div>
    )
}

export default RegistrationPage