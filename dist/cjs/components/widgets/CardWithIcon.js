"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CardWithIcon = ({ id, icon, title, description }) => {
    return (react_1.default.createElement("div", { className: "flex flex-col p-6" },
        react_1.default.createElement("div", { className: 'w-[90px] p-5 aspect-square overflow-hidden bg-primary-color bg-opacity-5' },
            react_1.default.createElement("img", { className: 'w-full h-full object-contain', src: icon.src, alt: icon.alt })),
        react_1.default.createElement("div", { className: "flex mt-6 space-x-3 " },
            react_1.default.createElement("div", { className: "flex flex-col space-y-3" },
                react_1.default.createElement("h1", { className: "text-xl poppins" },
                    "Crafted for Startups",
                    title),
                react_1.default.createElement("p", { className: "text-sm poppins" }, description)))));
};
exports.default = CardWithIcon;
//# sourceMappingURL=CardWithIcon.js.map