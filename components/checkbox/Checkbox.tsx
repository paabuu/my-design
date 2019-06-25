import * as React from 'react';
import * as classNames from 'classnames';

import './style/index.less';

export interface CheckboxProps {
    prefixCls?: string;
    className?: string;
    defaultChecked?: boolean;
    style?: React.CSSProperties;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: React.MouseEventHandler<any>;
    onMouseEnter?: React.MouseEventHandler<any>;
    onMouseLeave?: React.MouseEventHandler<any>;
    onKeyPress?: React.KeyboardEventHandler<any>;
    onKeyDown?: React.KeyboardEventHandler<any>;
    value?: any;
    tabIndex?: number;
    name?: string;
    children?: React.ReactNode | string;
}

// export interface CheckboxProps extends AbstractCheckboxProps<CheckboxChangeEvent> {
//     indeterminate?: boolean;
// }

// export interface CheckboxChangeEventTarget extends CheckboxProps {
//     checked: boolean;
// }

// export interface CheckboxChangeEvent {
//     target: CheckboxChangeEventTarget;
//     stopPropagation: () => void;
//     preventDefault: () => void;
//     nativeEvent: MouseEvent;
// }

export interface State {
    checked: boolean;
}

export default class Checkbox extends React.Component<CheckboxProps, State> {
    constructor(props: CheckboxProps) {
        super(props);
        this.state = {
            checked: !!props.checked
        };
    }

    static getDrivedStateFromProps(props: CheckboxProps) {
        if (props.checked !== undefined) {
            return { checked: props.checked };
        }
        
        return null;
    }

    handleOnClick = () => {
        if (this.props.checked === undefined) {
            this.setState({ checked: !this.state.checked });
        } 
    }

    handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange && this.props.onChange(e);
    }
    
    render() {
        const { className, onChange, children, ...rest } = this.props;
        const { checked } = this.state;
        const classnames = classNames(className, 'md-checkbox', {
            "md-checkbox-checked": checked,
            "md-checkbox-disabled": rest.disabled
        });
        
        return (
            <label className="md-checkbox-wrapper">
                <span className={classnames}>
                    <input 
                        type="checkbox"
                        checked={checked}
                        onClick={this.handleOnClick}
                        onChange={this.handleOnChange}
                        {...rest}
                    />
                    <span className="md-checkbox-inner"></span>
                </span>
                <span>{this.props.children}</span>
            </label>
        );
    }
}