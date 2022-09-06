import React, { useEffect, useState } from 'react';
import './App.css';
import { ContactForm, HeroSectionFull, RestaurantMenu, ThreeCardSection } from './lib/components/sections'
import { menuItems } from './lib/components/sections/restaurantMenu';
import { useFetchData } from "./lib/hooks/useFetchData";
interface FetchData {
  data: {
    data: {
      item_name: string,
      item_price: string,
      descriptiodddn: string,
      item_slug: string,
      featured_image: {
        data: {
          attributes: {
            url: string
          }
        }
      },
      categories: {
        data?: {
          id: number | string,
          attributes: {
            category_name: string,
            category_slug: string
          }
        }
      }[]
    }[]
  }[],
  meta: any
}

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className={`${darkMode ? "dark" : "light"} App"`}>
      <button className='z-[10000] p-10 bg-primary-color text-white' onClick={() => {
        setDarkMode(!darkMode);
      }}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      <HeroSectionFull
        bg_image='https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        cta_button_1={'Order Now'}
        cta_button_2={'Contact Us'}
        main_heading="Food House"
        description='Cooking With Love'
      />
      <div className='mt-[200px] w-[80vw] m-auto'>
        <ThreeCardSection />
      </div>
      <div className='bg-primary-color'></div>
    </div>
  );
}

export default App;
