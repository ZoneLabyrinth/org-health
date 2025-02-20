import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routers from 'src/router/index';


function IndexPage() {
    return (
        <>
            <Switch>
                {
                    routers.map((router, key) => (
                        <Route
                            path={router.path}
                            key={key}
                            exact={router.exact}
                            component={router.component}
                            // render={(props) => <router.component {...props} />}
                        />

                    ))
                }
                <Redirect from="/" to="/indexRank" />
            </Switch>
        </>
    );
}

export default IndexPage;
