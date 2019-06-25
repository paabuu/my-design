import * as React from 'react';

const { createContext } = React;

export const RadioContext: any = createContext({
    value: undefined,
    onRadioChange: null
});

export interface RadioGroupProps {
    defaultValue?: any;
    value?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    size?: 'large' | 'default' | 'small';
    children?: React.ReactNode;
    id?: string;
    name?: string;
    disabled?: boolean;
}

export interface RadioGroupState {
    value: any;
}

function getCheckedValue(children: React.ReactNode) {
    let value = null;
    let matched = false;
    React.Children.forEach(children, (radio: any) => {
        if (radio && radio.props && radio.props.checked) {
            value = radio.props.value;
            matched = true;
        }
    });

    return matched && { value };
}

export default class RadioGroup extends React.Component<RadioGroupProps, RadioGroupState> {
    static defaultProps = {
        disabled: false,
        size: 'default'
    };

    constructor(props: RadioGroupProps) {
        super(props);
        let value;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            value = getCheckedValue(props.children);
        }

        this.state = {
            value
        };
    }

    static getDerivedStateFromProps(props: RadioGroupProps) {
        return {
            value: props.value
        };
    }

    onRadioChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const lastValue = this.state.value;
        const { value } = ev.target;
        if (!('value' in this.props)) {
            this.setState({ value });
        }

        const { onChange } = this.props;
        if (onChange && value !== lastValue) {
            onChange(ev);
        }
    }

    render() {
        return (
            <RadioContext.Provider 
                value={{ value: this.state.value, onRadioChange: this.onRadioChange}}
            >
                <div className="md-radio-group">
                    {
                        React.Children.map(this.props.children, (child: any) => {
                            return {
                                ...child,
                                props: {
                                    ...child.props,
                                    disabled: this.props.disabled,
                                    size: this.props.size
                                }
                            }
                        })
                    }
                </div>
            </RadioContext.Provider>
        );
    }
}