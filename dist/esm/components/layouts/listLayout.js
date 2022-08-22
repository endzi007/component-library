import React from 'react';
import { twMerge } from 'tailwind-merge';
const ListLayout = (props) => {
    return React.createElement("div", { className: twMerge("w-full flex flex-col", props.className) }, props.items.map((item, i) => {
        const data = props.dataMapper !== undefined ? props.dataMapper(item) : item;
        return React.createElement(props.Component, Object.assign({}, data, { index: i, key: "component__" + i }));
    }));
};
export default ListLayout;
//# sourceMappingURL=listLayout.js.map