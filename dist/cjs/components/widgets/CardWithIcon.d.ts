import React from 'react';
interface Icon {
    src: string;
    alt: string;
}
interface Props {
    id: string;
    image: string;
    icon: Icon;
    title: string;
    description: string;
}
declare const CardWithIcon: React.FC<Props>;
export default CardWithIcon;
