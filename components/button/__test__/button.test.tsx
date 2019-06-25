import 'jsdom-global/register';
import * as React from 'react';
import { render, mount } from 'enzyme';
import Button from '..';

describe('Button', () => {
    it('render correctly', () => {
        const wrapper = render(<Button>Follow</Button>)
        expect(wrapper).toMatchSnapshot();
        const wrapper1 = render(<Button type="primary">Primary</Button>);
        expect(wrapper1).toMatchSnapshot();
        const wrapper2 = render(<Button size="large">Large</Button>);
        expect(wrapper2).toMatchSnapshot();
    });

    it('render two zn chars correctly', () => {
        const wrapper = render(<Button>确定</Button>);
        expect(wrapper.text()).toBe('确 定');
    });

    it('simulate click event', async () => {
        const onClick = jest.fn();
        const wrapper = mount(<Button onClick={onClick}>Wave</Button>);
        expect(wrapper).toMatchSnapshot();
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });

    it('should combine classname', () => {
        const wrapper = mount(<Button className="new-class">ClassName</Button>);
        expect(wrapper).toMatchSnapshot();
    });
});