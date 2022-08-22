import React from 'react';
const CardWithIcon = ({ id, icon, title, description }) => {
    return (React.createElement("div", { className: "flex flex-col p-6" },
        React.createElement("div", { className: 'w-[90px] p-5 aspect-square overflow-hidden bg-primary-color bg-opacity-5' },
            React.createElement("img", { className: 'w-full h-full object-contain', src: icon.src, alt: icon.alt })),
        React.createElement("div", { className: "flex mt-6 space-x-3 " },
            React.createElement("div", { className: "flex flex-col space-y-3" },
                React.createElement("h1", { className: "text-xl poppins" },
                    "Crafted for Startups",
                    title),
                React.createElement("p", { className: "text-sm poppins" }, description)))));
};
export default CardWithIcon;
//# sourceMappingURL=CardWithIcon.js.map