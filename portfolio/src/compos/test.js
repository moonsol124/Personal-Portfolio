import { render } from '@testing-library/react';
import {React} from 'react';

const html = require('./index.html');
const template = { __html: html };

function Test() {
    render(
        <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}}>
        </div>
    )
}

export default Test;