import React from 'react';
import { Button } from '../building-blocks';

const HeroSectionFull: React.FC<Props> = (props) => {
    return <div
        className={`flex flex-col items-center justify-center 
         w-full min-h-[100vh] text-gray-800 dark:text-gray-200 bg-black`}
        style={{
            backgroundImage: `url(${props.bg_image || ""})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}
    >
        <div
            className='absolute w-full h-full bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80'
        >

        </div>
        <div className='z-10 text-center'>
            <h1 className='tracking-[10px] p-3'>FoodHouse</h1>
            <h2 className='font-Allura text-primary-color'>Cooking with love</h2>
            <div className='grid grid-cols-2 gap-2 p-5 min-w-max'>
                <Button label='Default' />
                <Button variant='primary' label='Primary' />
                <Button variant='secondary' label='Secondary' />
                <Button variant='secondary-border' label='Secondary border' />
                <Button variant='transparent' label='Transparetn' btnClasses='bg-black' />
            </div>
        </div>
    </div>
}


export interface Props {
    main_heading?: string
    description?: string
    cta_button_1?: string
    cta_button_2?: string,
    bg_image?: string
}

export default HeroSectionFull;