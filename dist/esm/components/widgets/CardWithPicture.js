import React from 'react';
const CardItemWithPicture = ({ id, image, icon, title, description }) => {
    return (React.createElement("div", { className: "transform transition duration-700 hover:scale-105 p-6 rounded-2xl hover:shadow-xl" },
        React.createElement("div", { className: "overflow-hidden rounded-2xl flex flex-grow aspect-video" },
            React.createElement("img", { className: "w-full h-auto transform transition duration-700 hover:scale-125 object-cover", src: image, alt: title })),
        React.createElement("div", { className: "flex mt-6 space-x-3 " },
            React.createElement("div", null,
                React.createElement("img", { src: icon, alt: title, className: "w-36" })),
            React.createElement("div", { className: "flex flex-col space-y-3" },
                React.createElement("h1", { className: "text-xl text-gray-800 poppins" }, title),
                React.createElement("p", { className: "text-sm text-gray-500 poppins" }, description)))));
};
export default CardItemWithPicture;
//# sourceMappingURL=CardWithPicture.js.map