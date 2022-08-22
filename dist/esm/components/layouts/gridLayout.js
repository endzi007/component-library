import React from 'react';
import { twMerge } from 'tailwind-merge';
const GridLayout = (props) => {
    return React.createElement("div", { className: "max-w-screen-xl mx-auto my-12 px-6" },
        React.createElement("h1", { className: "text-4xl poppins pb-4" }, props.main_heading),
        React.createElement("p", { className: "text-gray-500 text-sm poppins w-2/4" }, props.description),
        React.createElement("div", { className: twMerge(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8"`, props.className) }, props.items.map((item, i) => {
            const data = props.dataMapper !== undefined ? props.dataMapper(item) : item;
            return React.createElement(props.Component, Object.assign({}, data, { index: i, key: "component__" + item.id || i }));
        })));
};
export default GridLayout;
//# sourceMappingURL=gridLayout.js.map