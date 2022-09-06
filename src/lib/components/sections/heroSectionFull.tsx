import React from 'react';
import { Button, TextComponent } from '../building-blocks';

const HeroSectionFull: React.FC<Props> = (props) => {
    return <>
        <div className='sticky top-0 flex flex-row justify-between bg-gray-100 dark:bg-gray-900 py-4 '>
            <div>
                logo
            </div>
            <nav className='flex'>
                <ul className='flex flex-row'>
                    <TextComponent classes="px-3" tag='li'>
                        <a href="#">Enis</a>
                    </TextComponent>
                    <TextComponent classes="px-3" tag='li'>
                        <a href="#">Enis</a>
                    </TextComponent>
                </ul>
            </nav>

        </div>
        <div
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
                <h1 className='tracking-[10px] p-3'>{props.main_heading}</h1>
                <h2 className='font-Allura text-primary-color'>{props.description}</h2>
                <div className='grid grid-cols-2 gap-2 p-5 min-w-max'>
                    <Button label={props.cta_button_1} />
                    <Button variant="primary" label={props.cta_button_2} />
                </div>
            </div>
        </div>
    </>
}


export interface Props {
    main_heading?: string
    description?: string
    cta_button_1: string
    cta_button_2: string,
    bg_image?: string
}

export default HeroSectionFull;