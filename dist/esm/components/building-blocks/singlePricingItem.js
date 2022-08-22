import React from 'react';
import { twMerge } from 'tailwind-merge';
const SinglePricingItem = (props) => {
    return React.createElement("li", { className: twMerge('flex flex-row justify-between items-center p-2', props.className) },
        React.createElement("p", { className: 'flex flex-row items-center flex-grow-0 flex-shrink-0 pr-2' },
            React.createElement("span", { className: 'w-12 h-12 rounded-full bg-primary-color-900 mr-2 overflow-hidden' },
                React.createElement("img", { loading: 'lazy', src: props.featured_image, alt: "featured image", className: 'w-full h-full object-cover' })),
            props.item_name),
        React.createElement("div", { className: 'flex-grow-1 w-full h-full relative' },
            React.createElement("div", { className: twMerge('w-full h-full top-0 left-0 border-b-2 border-b-primary-color-900 dark:border-b-primary-color-300 border-dashed absolute', props.classNameBorder) }, " ")),
        React.createElement("p", { className: twMerge('flex-grow-0 flex-shrink-0 pl-2 font-bold text-lg', props.classNamePrice) },
            Number.parseFloat(props.item_price).toFixed(2),
            "\u20AC"));
};
export default SinglePricingItem;
//# sourceMappingURL=singlePricingItem.js.map