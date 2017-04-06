import * as  React from 'react'
import * as ReactDom from 'react-dom'
import {Link} from 'react-router-dom'

export default function (props: any) {
    return (
        <div>
            <ul>
                <li><Link to="/page1.html">Page1</Link></li>
                <li><Link to="/page2.html">Page2</Link></li>
                <li><Link to="/page3.html">Page3</Link></li>
            </ul>
        </div>
    );
}
