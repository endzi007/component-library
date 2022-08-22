"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const tailwind_merge_1 = require("tailwind-merge");
const GridLayout = (props) => {
    return react_1.default.createElement("div", { className: "max-w-screen-xl mx-auto my-12 px-6" },
        react_1.default.createElement("h1", { className: "text-4xl poppins pb-4" }, props.main_heading),
        react_1.default.createElement("p", { className: "text-gray-500 text-sm poppins w-2/4" }, props.description),
        react_1.default.createElement("div", { className: (0, tailwind_merge_1.twMerge)(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8"`, props.className) }, props.items.map((item, i) => {
            const data = props.dataMapper !== undefined ? props.dataMapper(item) : item;
            return react_1.default.createElement(props.Component, Object.assign({}, data, { index: i, key: "component__" + item.id || i }));
        })));
};
exports.default = GridLayout;
//# sourceMappingURL=gridLayout.js.map