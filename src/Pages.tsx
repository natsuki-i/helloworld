import * as React from 'react';
import * as ReactDom from 'react-dom';

function page(n: number, props: any) {
    return (
        <h2>
            hello page {n}
        </h2>
    )
}

export function Page1 (props: any) {
    return page(1, props);
}

export function Page2 (props: any) {
    return page(2, props);
}

export function Page3 (props: any) {
    return page(3, props);
}
