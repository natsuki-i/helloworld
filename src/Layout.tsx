import * as React from 'react';
import * as ReactDom from 'react-dom';

import Hello from './Hello';

export default function Layout(props: any) {
    return (
        <html>
            <head>
                <title>{props.title}</title>
            </head>
            <body>
                <Hello name='world'/>
            </body>
        </html>
    );
}
