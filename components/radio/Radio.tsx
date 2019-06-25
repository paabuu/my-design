import * as React from 'react';
import * as classnames from 'classnames';
import RadioGroup, { RadioContext } from './RadioGroup';

import './style/index.less';

export interface BaseRadioProps {
    checked?: boolean;
    value?: any;
    disabled?: boolean;
    size?: string;
}

type RadioProps = BaseRadioProps & React.HTMLAttributes<HTMLLabelElement>;

export default class Radio extends React.Component<RadioProps> {
    static contextType = RadioContext;
    static Group = RadioGroup;

    handleRadioCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.disabled) return;
        this.context.onRadioChange(e);
    }

    render() {
        const { value, checked, disabled, size, ...rest } = this.props;

        const isChecked = ('checked' in this.props) ? checked : this.context.value === value;
        const isDisabled = ('disabled' in this.props && disabled === undefined) || disabled;
        const classNames = classnames('md-radio', `md-radio-${size}`, {
            'md-radio-checked': isChecked,
            'md-radio-disabled': isDisabled
        });

        return (
            <label className="md-radio-wrapper" {...rest}>
                <span className={classNames}>
                    <input type="radio" value={value} checked={isChecked} onChange={this.handleRadioCheckedChange} />
                    <span className="md-radio-inner"></span>
                </span>
                <span style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>{this.props.children}</span>
            </label>
        );
    }
}