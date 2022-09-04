import React from 'react';
const ContactForm = (props) => {
    const inputClasses = "shadow p-3 dark:bg-opacity-30 dark:bg-gray-900 rounded-lg";
    return React.createElement("form", { action: props.actionUrl, method: "POST", className: "lg:w-2/3 grid grid-cols-1 overflow-hidden lg:!grid-cols-2 gap-4 items-start justify-start p-12 bg-opacity-20 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200" },
        React.createElement("input", { name: "name", className: `lg:col-start-1 lg:col-end-2  ${inputClasses}`, type: "text", placeholder: props.nameText }),
        React.createElement("input", { name: "email", className: `lg:col-start-2 lg:col-end-3 ${inputClasses}`, type: "text", placeholder: props.emailText }),
        React.createElement("input", { name: "subject", className: `lg:col-start-1 lg:col-end-3 ${inputClasses}`, type: "text", placeholder: props.subjectText }),
        React.createElement("textarea", { name: "message", className: `lg:col-start-1 lg:col-end-3 ${inputClasses}`, placeholder: props.messageText, cols: 40, rows: 5 }),
        React.createElement("button", { name: "submit", className: "bg-primary-color font-bold py-2 px-4 rounded-lg text-gray-100", type: "submit" }, props.buttonText));
};
export default ContactForm;
//# sourceMappingURL=contactForm.js.map