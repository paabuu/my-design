import * as React from 'react';
import { render } from 'enzyme';
import App from './App';

it('app mounted', () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
});