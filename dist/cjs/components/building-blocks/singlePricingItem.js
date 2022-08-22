"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const tailwind_merge_1 = require("tailwind-merge");
const SinglePricingItem = (props) => {
    return react_1.default.createElement("li", { className: (0, tailwind_merge_1.twMerge)('flex flex-row justify-between items-center p-2', props.className) },
        react_1.default.createElement("p", { className: 'flex flex-row items-center flex-grow-0 flex-shrink-0 pr-2' },
            react_1.default.createElement("span", { className: 'w-12 h-12 rounded-full bg-primary-color-900 mr-2 overflow-hidden' },
                react_1.default.createElement("img", { loading: 'lazy', src: props.featured_image, alt: "featured image", className: 'w-full h-full object-cover' })),
            props.item_name),
        react_1.default.createElement("div", { className: 'flex-grow-1 w-full h-full relative' },
            react_1.default.createElement("div", { className: (0, tailwind_merge_1.twMerge)('w-full h-full top-0 left-0 border-b-2 border-b-primary-color-900 dark:border-b-primary-color-300 border-dashed absolute', props.classNameBorder) }, " ")),
        react_1.default.createElement("p", { className: (0, tailwind_merge_1.twMerge)('flex-grow-0 flex-shrink-0 pl-2 font-bold text-lg', props.classNamePrice) },
            Number.parseFloat(props.item_price).toFixed(2),
            "\u20AC"));
};
exports.default = SinglePricingItem;
//# sourceMappingURL=singlePricingItem.js.map