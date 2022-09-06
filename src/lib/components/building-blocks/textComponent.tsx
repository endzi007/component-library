import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    children: React.ReactNode
    variant?: "primary" | "secondary" | "secondary-border" | "transparent"
    classes?: string
    tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li" | "span"
}

const TextComponent = (props: Props) => {
    const classes = twMerge("", props.classes);
    let CustomTag = props.tag;
    switch (props.variant) {
        case 'primary':
            return <CustomTag className={classes + ' text-primary-color'}>{props.children}</CustomTag>
        case 'secondary':
            return <CustomTag className={classes + ' text-secondary-color'}>{props.children}</CustomTag>
        default:
            return <CustomTag className={classes + ' text-gray-800 dark:text-gray-200'}>{props.children}</CustomTag>

    }
}

export default TextComponent;