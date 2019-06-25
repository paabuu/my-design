import * as React from 'react';
import classNames from 'classnames';

import './style/index.less';

const { useState } = React;
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function insertSpace(child: React.ReactChild, needInserted: boolean) {
    if (child === null) {
        return;
    }

    const SPACE = needInserted ? ' ' : '';
    if (
        typeof child !== 'string' &&
        typeof child !== 'number' && 
        typeof child.type === 'string' &&
        isTwoCNChar(child.props.children)
    ) {
        return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
    }

    if (typeof child === 'string') {
        if (isTwoCNChar(child)) {
            return child.split('').join(SPACE);
        }

        return <span>{child}</span>;
    }

    return child;
}
export const tuple = <T extends string[]>(...args: T) => args;
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger');
export type ButtonType = (typeof ButtonTypes)[number];
const ButtonSizes = tuple('large', 'default', 'small');
export type ButtonSize = (typeof ButtonSizes)[number];

const prefixCls = 'md-btn';

export interface BaseButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    icon?: React.ReactElement;
    children?: React.ReactChild;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
    const { type, className, size, children, icon, onClick, ...rest } = props;
    const [ wave, setWave ] = useState(false);
    const classes = classNames(prefixCls, className, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size, 
        [`${prefixCls}-wave`]: wave
    });

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
        if (onClick) {
            (onClick as React.MouseEventHandler<HTMLButtonElement>)(e);
        }
        setWave(true);
        setTimeout(() => {
            setWave(false);
        }, 400);
    };

    function isNeedInserted() {
        return React.Children.count(children) === 1 && !icon;
    }

    return (
        <button
            className={classes}
            onClick={handleClick}
            {...rest}
        >
            {insertSpace(children, isNeedInserted())}
        </button>
    );
}

export default Button;