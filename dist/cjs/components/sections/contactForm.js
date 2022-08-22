"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ContactForm = (props) => {
    const inputClasses = "shadow p-3 dark:bg-opacity-30 dark:bg-gray-900 rounded-lg";
    return react_1.default.createElement("form", { action: "https://formsubmit.co/elegantstone.ba@gmail.com", method: "POST", className: "lg:w-2/3 grid grid-cols-1 overflow-hidden lg:!grid-cols-2 gap-4 items-start justify-start p-12 bg-opacity-20 bg-gray-200 dark:bg-gray-800" },
        react_1.default.createElement("input", { name: "name", className: `lg:col-start-1 lg:col-end-2  ${inputClasses}`, type: "text", placeholder: props.nameText }),
        react_1.default.createElement("input", { name: "email", className: `lg:col-start-2 lg:col-end-3 ${inputClasses}`, type: "text", placeholder: props.emailText }),
        react_1.default.createElement("input", { name: "subject", className: `lg:col-start-1 lg:col-end-3 ${inputClasses}`, type: "text", placeholder: props.subjectText }),
        react_1.default.createElement("textarea", { name: "message", className: `lg:col-start-1 lg:col-end-3 ${inputClasses}`, placeholder: props.messageText, cols: 40, rows: 5 }),
        react_1.default.createElement("button", { name: "submit", className: "bg-primary-color font-bold py-2 px-4 rounded-lg text-gray-100", type: "submit" }, props.buttonText));
};
exports.default = ContactForm;
//# sourceMappingURL=contactForm.js.map