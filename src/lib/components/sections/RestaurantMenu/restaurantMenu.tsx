import React, { useState } from 'react';
import useFetchData from '../../../hooks/useFetchData';
import MenuTabs from './MenuTabs';
import SinglePricingItem from './singlePricingItem';

export interface Props {
    main_heading: string,
    descriptions: string
}

interface menuItems {
    item_name: string
    item_price: string
    featured_image: string
    id: string | number
    category: string
}

const RestaurantMenu: React.FC<Props> = (props) => {
    const [currentTab, setCurrentTab] = useState("Welsh Sheepdog");
    const { data, isDone } = useFetchData<menuItems[]>("https://63021964c6dda4f287b2c715.mockapi.io/pricingItems");
    return <section className='py-20 w-full bg-gray-100 dark:bg-gray-800 flex flex-col items-center'>
        <h1 className='text-gray-800 dark:text-gray-200 tracking-widest capitalize mb-3'>{props.main_heading}</h1>
        <h2 className='font-Allura text-primary-color mb-3 font-thin'>{props.descriptions}</h2>
        <hr className='bg-primary-color w-[100px] h-[2px] border-transparent' />
        <div className='self-stretch flex items-center justify-center'>
            <MenuTabs currentTab={currentTab} setCurrentTab={(str) => {
                setCurrentTab(str);
            }} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 self-stretch'>
            {isDone && data!.map(menuItem => {
                return menuItem.category === currentTab && <SinglePricingItem
                    item_name={menuItem.item_name}
                    item_price={menuItem.item_price}
                    className=''
                    featured_image={menuItem.featured_image}
                    category={menuItem.category}
                />
            })}
        </div>
    </section>
}
export default RestaurantMenu;