import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {FilmServiceProvider} from './components/film-service-context';
import ErrorBoundry from './components/error-boundry';
import store from './store';
import filmListService from './services';
import App from "./components/app";

const filmService = new filmListService();

ReactDOM.render(
    <Provider store={store}>
        <FilmServiceProvider value={filmService}>
            <App />
        </FilmServiceProvider>
    </Provider>, document.getElementById('root'));

