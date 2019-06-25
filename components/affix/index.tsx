import * as React from 'react';

const { useState, useEffect } = React;

type Target = Window | HTMLElement;

interface AffixProps {
    offsetTop?: number;
    offset?: number;
    offsetBottom?: number;
    style?: React.CSSProperties;
    onChange?: (affixed?:boolean) => void;
    target?: <Target>() => Target;
    className?: string;
    children: React.ReactElement;
}

const Events = [
    'scroll',
    'resize',
    'touchstart',
    'touchmove',
    'touchend',
    'pageshow',
    'load'
];

export default function Affix(props: AffixProps) {
    const [scrollY, setScrollY] = useState(0);

    function updatePosition(e: any) {
        if (props.target() === window) {
            setScrollY(0);
        } else {
            setScrollY(e.target.scrollY);
        }
    }

    useEffect(() => {
        Events.forEach(event => {
            props.target<Target>().addEventListener(event, e => {
                updatePosition(e);
            });
        });

        setScrollY(0);

        if (props.target() !== window) {
            setScrollY(props.target<HTMLElement>().getBoundingClientRect().top);
        }
    }, []);

    return (    
        React.cloneElement(props.children, {
            style: {position: 'fixed', top: scrollY, bottom: props.offsetBottom}
        })
    );
}

Affix.defaultProps = {
    target: () => window
};
