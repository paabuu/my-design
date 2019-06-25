import 'jsdom-global/register';
import * as React from 'react';
import Alert from '../';

import { render, mount } from 'enzyme';

describe('Test Alert', () => {
    it('render correctly', () => {
        const wrapper = render(<Alert message="message" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('message is bold when description is avaliable', async () => {
        const wrapper = mount(<Alert message="message" description="description" />);
        expect(wrapper).toMatchSnapshot();
    });
});
