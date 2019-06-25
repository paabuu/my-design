import * as React from 'react';
import { render } from 'enzyme';
import Radio from '../Radio';

const { Group } = Radio;

describe('Radio Component', () => {
    it('should render correctly', () => {
        const wrapper = render(
            <Group value="r2">
                <Radio value="r1">Radio1</Radio>
                <Radio value="r2">Radio2</Radio>
            </Group>
        );
        
        expect(wrapper).toMatchSnapshot();
    });

    it('should render size props correctly', () => {
        const wrapper1 = render(
            <Group value="r2" size="small">
                <Radio value="r1">Radio1</Radio>
                <Radio value="r2">Radio2</Radio>
            </Group>
        );

        expect(wrapper1).toMatchSnapshot();

        const wrapper2 = render(
            <Group value="r2" size="small">
                <Radio value="r1">Radio1</Radio>
                <Radio value="r2">Radio2</Radio>
            </Group>
        );

        expect(wrapper2).toMatchSnapshot();
    });

    it('should render disabled props correctly', () => {
        const wrapper = render(
            <Group value="r2" disabled>
                <Radio value="r1">Radio1</Radio>
                <Radio value="r2">Radio2</Radio>
            </Group>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
