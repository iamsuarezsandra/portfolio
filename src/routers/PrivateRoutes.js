import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

const PrivateRoutes = ({ isAuthenticated, component: Component, ...rest }) => {

    // ME GUARDO EL ULTIMO PATH, si pierde seccion lo puede recuperar!
    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route
            { ...rest }
            component={ (props) => (
                (isAuthenticated) 
                    ? <Component { ...props } /> 
                    : <Redirect to='/login'/>
            )}
        />
    );
}

PrivateRoutes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoutes;