import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import FilmPage from '../film-page';
import AddFilm from '../add-film';
import Header from "../header";

const App = () => {
    return(
        <Fragment>
            <Router>
                <Header />
                <Route exact path={"/"} component={FilmPage} />
                <Route exact path={"/import-to-film-list"} component={AddFilm} />
            </Router>
        </Fragment>
    );
}
export default App;
