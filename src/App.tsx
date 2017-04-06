import 'core-js';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';

import Navi from './Navi';
import { Page1, Page2, Page3 } from './Pages';
import { StaticRouter } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


if (typeof document !== 'undefined') {
    ReactDom.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        , document.getElementById("root")
    );
}

function App(props: any) {
    return (
        <div id="app">
            <Navi />
            <div id="content">
                <Switch>
                    <Route path="/page1.html" component={Page1} />
                    <Route path="/page2.html" component={Page2} />
                    <Route path="/page3.html" component={Page3} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </div>
    );
}

function NoMatch(props: any) {
    return (
        <div>
            <h2>404 no match</h2>
            <p>{props.location.path}</p>
        </div>
    );
}

export = function (locals: any) {
    return '<!DOCTYPE html>' +
        ReactDOMServer.renderToStaticMarkup(
            <html>
                <head>
                    <title>Hello World</title>
                </head>
                <body>
                    <div id="root">
                        <StaticRouter>
                            <App />
                        </StaticRouter>
                    </div>
                    <script src={locals.assets.app}></script>
                </body>
            </html>
        );
}
