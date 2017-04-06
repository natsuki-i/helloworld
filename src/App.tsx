import 'core-js';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import Layout from './Layout';

export = function (locals: any) {
    return '<!DOCTYPE html>' +
        ReactDOMServer.renderToStaticMarkup(
            <Layout title="Hello World" assets={locals.assets} />
        );
}
