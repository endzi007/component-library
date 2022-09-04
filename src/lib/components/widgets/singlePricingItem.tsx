import React from 'react';
import { twMerge } from 'tailwind-merge'

const SinglePricingItem: React.FC<Props> = (props) => {
    return <li className={twMerge('flex flex-row justify-between items-center p-2', props.className)}>
        <h6 className='flex flex-row items-center flex-grow-0 flex-shrink-0 pr-2 text-gray-800 dark:text-gray-200 '>
            <span className='w-12 h-12 rounded-full bg-primary-color-900 mr-2 overflow-hidden'>
                <img
                    loading='lazy'
                    src={props.featured_image}
                    alt="featured image"
                    className='w-full h-full object-cover'
                />
            </span>
            {props.item_name}</h6>
        <div className='flex-grow-1 w-full h-full relative'>
            <div className={twMerge('w-full h-full top-0 left-0 border-b-2 border-b-gray-600 dark:border-b-gray-400 opacity-20 border-dashed absolute -translate-y-[30%]', props.classNameBorder)}> </div>
        </div>
        <h6 className={twMerge('flex-grow-0 flex-shrink-0 pl-2 font-bold text-lg text-primary-color', props.classNamePrice)}>{Number.parseFloat(props.item_price).toFixed(2)}€</h6>
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
    classNamePrice?: string,
    categories: string[]
}