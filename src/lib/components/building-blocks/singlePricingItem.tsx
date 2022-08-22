import React from 'react';
import { twMerge } from 'tailwind-merge'

const SinglePricingItem: React.FC<Props> = (props) => {
    return <li className={twMerge('flex flex-row justify-between items-center p-2 bg-gray-200 dark:bg-gray-800', props.className)}>
        <p className='flex flex-row items-center flex-grow-0 flex-shrink-0 pr-2'>
            <span className='w-12 h-12 rounded-full bg-primary-color-900 mr-2 overflow-hidden'>
                <img
                    loading='lazy'
                    src={props.featured_image}
                    alt="featured image"
                    className='w-full h-full object-cover'
                />
            </span>
            {props.item_name}</p>
        <div className='flex-grow-1 w-full h-full relative'>
            <div className={twMerge('w-full h-full top-0 left-0 border-b-2 border-b-primary-color-900 dark:border-b-primary-color-300 border-dashed absolute', props.classNameBorder)}> </div>
        </div>
        <p className={twMerge('flex-grow-0 flex-shrink-0 pl-2 font-bold text-lg', props.classNamePrice)}>{Number.parseFloat(props.item_price).toFixed(2)}€</p>
    </li>
}

export default SinglePricingItem;

interface Props {
    item_name: string,
    item_price: string,
    item_slug?: string,
    featured_image?: string,
    className?: string,
    classNameBorder?: string,
    classNamePrice?: string
}