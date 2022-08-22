"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CardItemWithPicture = ({ id, image, icon, title, description }) => {
    return (react_1.default.createElement("div", { className: "transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl" },
        react_1.default.createElement("div", { className: "overflow-hidden rounded-2xl flex flex-grow aspect-video" },
            react_1.default.createElement("img", { className: "w-full h-auto transform transition duration-700 hover:scale-125 object-cover", src: image, alt: title })),
        react_1.default.createElement("div", { className: "flex mt-6 space-x-3 " },
            react_1.default.createElement("div", null,
                react_1.default.createElement("img", { src: icon, alt: title, className: "w-36" })),
            react_1.default.createElement("div", { className: "flex flex-col space-y-3" },
                react_1.default.createElement("h1", { className: "text-xl text-gray-800 poppins" }, title),
                react_1.default.createElement("p", { className: "text-sm text-gray-500 poppins" }, description)))));
};
exports.default = CardItemWithPicture;
//# sourceMappingURL=CardWithPicture.js.map