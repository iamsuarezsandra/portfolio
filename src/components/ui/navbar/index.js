import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    bar: {
        background: '#f8f8fa'
    },
    toolbar: {
        minHeight: 80
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#000000',
    },
    about: {
        marginRight: theme.spacing(3),
        color: '#000000',
    },
    proyects: {
        marginRight: theme.spacing(3),
        color: '#4a39f5',
    },
    contact: {
        borderRadius: theme.spacing(20),
        color: '#ffffff',
    }
}));


export default function BackToTop(props) {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.bar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.title}>@Iamsuarezsandra</Typography>

                    <Link href="#" onClick={preventDefault} className={classes.about}>
                        <Typography variant="h6">
                            Acerca de mi
                        </Typography>
                    </Link>
                    <Link href="#" onClick={preventDefault} className={classes.proyects}>
                        <Typography variant="h6">
                            Proyectos
                        </Typography>
                    </Link>
                    <Button  variant="contained" className={classes.contact} color="primary">Contacto</Button>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
        </React.Fragment>
    );
}
