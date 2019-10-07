import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routers from 'src/router/index';


function IndexPage(props) {
    return (
        <>

            <Switch>
                {
                    routers.map((router, key) => (
                        <Route
                            path={router.path}
                            key={key}
                            exact={router.exact}
                        >
                            {router.component}
                        </Route>
                    ))
                }
                <Redirect from="/" to="/indexRank" />
            </Switch>
        </>
    );
}

export default IndexPage;
