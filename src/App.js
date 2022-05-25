import React from "react";
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom';


//Provider 
// import Provider from "./Provider";

//Routes
import Routes from './routes'

//Layout
import Header from "./components/Shared/Header";

function App() {
	
	return (
        // <Provider store={store}>
            <BrowserRouter>
                <Header>
                    <Switch>
                        {
                            Routes.map(({ path, component, exact, shared }) => shared ?
                                <Route key={path} path={path} exact={exact} component={component}></Route>
                                :null
                            ) 
                        }
                        {/* <Route children={PageNotFound}></Route> */}
                    </Switch>
                </Header>
            </BrowserRouter>
        // </Provider>
    );
};

export default App;