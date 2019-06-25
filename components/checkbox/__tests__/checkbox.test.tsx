import 'jsdom-global/register';
import * as React from 'react';
import { render, mount } from 'enzyme';
import Checkbox from '..';

describe('Checkbox', () => {
    it('render correctly', () => {
        const wrapper1 = render(<Checkbox>Checkbox</Checkbox>);
        expect(wrapper1).toMatchSnapshot();
        const wrapper2 = render(<Checkbox checked={true}>Checked</Checkbox>);
        expect(wrapper2).toMatchSnapshot();
        const wrapper3 = render(<Checkbox disabled={false}>Disabled</Checkbox>);
        expect(wrapper3).toMatchSnapshot();
        const wrapper4 = render(<Checkbox className="new-class">New Class</Checkbox>);
        expect(wrapper4).toMatchSnapshot();
    });

    it('toggle checked status when change', () => {
        const wrapper = mount(<Checkbox>Checkbox</Checkbox>);
        expect(wrapper).toMatchSnapshot();
        wrapper.find('input').simulate('click');
        expect(wrapper).toMatchSnapshot();
    });
});