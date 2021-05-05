import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import customTheme from './components/ui/theme';
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { HomeScreen } from './components/home/HomeScreen';
import Navbar from './components/ui/navbar';
import ScrollTop from './components/ui/scroll-top';

export const PorfolioApp = (props) => {
    return (
        <div>
            <Router>
                <ThemeProvider theme={customTheme}>
                    <Navbar />
                    <Container>
                        <div>
                            <Switch>
                                <Route exact path="/" component={HomeScreen} />
                                <Redirect to='/' />
                            </Switch>
                        </div>
                    </Container>
                    <ScrollTop {...props}>
                        <Fab color="primary" size="small" aria-label="scroll back to top">
                            <KeyboardArrowUpIcon />
                        </Fab>
                    </ScrollTop>
                </ThemeProvider>
            </Router>
        </div>
    )
}