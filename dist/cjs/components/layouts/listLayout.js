"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const tailwind_merge_1 = require("tailwind-merge");
const ListLayout = (props) => {
    return react_1.default.createElement("div", { className: (0, tailwind_merge_1.twMerge)("w-full flex flex-col", props.className) }, props.items.map((item, i) => {
        const data = props.dataMapper !== undefined ? props.dataMapper(item) : item;
        return react_1.default.createElement(props.Component, Object.assign({}, data, { index: i, key: "component__" + i }));
    }));
};
exports.default = ListLayout;
//# sourceMappingURL=listLayout.js.map