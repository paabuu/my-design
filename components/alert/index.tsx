import * as React from 'react';
import * as classNames from 'classnames';
import { tuple } from '../utils';

import './style/index.less';

const AlertTypes = tuple('info', 'success', 'warning', 'error');
type AlertType = (typeof AlertTypes)[number];

export interface AlertPropsBase {
    type?: AlertType;
    closable?: boolean;
    message: React.ReactNode;
    description?: React.ReactNode;
}

type AlertProps = AlertPropsBase & React.HTMLAttributes<HTMLDivElement>;

export default function Alert(props:AlertProps) {
    const { type, message, description, ...rest } = props;
    const prefixCls = 'md-alert';
    const classnames = classNames(prefixCls, {
        [`${prefixCls}-${type}`]: type
    });
    const messageCls = classNames(`${prefixCls}-message`, {
        [`${prefixCls}-message-bold`]: description
    });

    return (
        <div 
            className={classnames}
            {...rest}
        >
            <p className={messageCls}>{message}</p>
            <p className={`${prefixCls}-description`}>{description}</p>
        </div>
    );
}

Alert.defaultProps = {
    type: 'info'
};