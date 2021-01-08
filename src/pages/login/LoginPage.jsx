import React, {useRef, useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthService from "../../auth/AuthService";
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import Urls from '../../model/Urls';

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
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -21,
        marginLeft: -12,
    },
    wrapper: {
        position: 'relative',
    },
}));

export default function LoginPage(props) {
    document.title = 'Авторизация';
    const classes = useStyles();
    const formRef = useRef(null)
    const [isError, setIsError] = useState(false);
    const [isSpin, setIsSpin] = useState(false);

    const buttonClassname = clsx({
        [classes.buttonSuccess]: isSpin,
    });

    async function handleSubmit(event) {
        event.preventDefault();
        setIsError(false);
        setIsSpin(true);
        const username = formRef.current.login.value;
        const password = formRef.current.password.value;

        const responseStatus = await AuthService.login(username, password);
        setIsSpin(false);

        if (responseStatus) {
            props.history.push(Urls.USER_LIST_PAGE_URL);
            return;
        }

        setIsError(true);
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmit}
                    ref={formRef}
                >
                    <TextField
                        error={isError}
                        onChange={() => setIsError(false)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="login"
                        label="Phone number"
                        name="login"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        error={isError}
                        onChange={() => setIsError(false)}
                        helperText={isError && 'Incorrect login or password'}
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


                    <div className={[classes.wrapper, buttonClassname]}>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            disabled={isSpin}
                        >
                            Sign In
                        </Button>
                        {isSpin && <CircularProgress size={24} className={classes.buttonProgress} />}
                    </div>

                </form>
            </div>
        </Container>
    );
}
