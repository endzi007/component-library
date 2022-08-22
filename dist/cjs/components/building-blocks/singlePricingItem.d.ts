import React from 'react';
declare const SinglePricingItem: React.FC<Props>;
export default SinglePricingItem;
interface Props {
    item_name: string;
    item_price: string;
    item_slug: string;
    featured_image: string;
    className: string;
    classNameBorder: string;
    classNamePrice: string;
}
