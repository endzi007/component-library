import React from 'react';
interface Props {
    main_heading: string;
    description: string;
    className: string;
    items: any[];
    dataMapper: any;
    Component: any;
}
declare const GridLayout: React.FC<Props>;
export default GridLayout;
