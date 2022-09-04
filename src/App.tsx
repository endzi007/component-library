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
  const { data, isDone, success } = useFetchData<FetchData | null>("http://localhost:1338/api/items?populate=deep,2&pagination[pageSize]=10");
  const [menuItems, setMenuItems] = useState<menuItems[]>([])
  useEffect(() => {
    if (success) {
      let arr: menuItems[] = [];
      data.data.map(item => {
        let obj: menuItems = {
          item_name: item.attributes?.item_name,
          item_price: item.attributes?.item_price,
          featured_image: "http://localhost:1338" + item.attributes.featured_image.data?.attributes.url,
          id: item.id,
          categories: item.attributes.categories?.data.map(cat => {
            return cat.attributes.category_name
          })
        };
        arr.push(obj);
      })
      setMenuItems(arr);
    }
  }, [isDone])
  return (
    <div className={`${darkMode ? "dark" : "light"} App"`}>
      <button className='z-[10000] p-10 bg-primary-color text-white' onClick={() => {
        setDarkMode(!darkMode);
      }}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      <HeroSectionFull bg_image='https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      <div className='mt-[200px] w-[80vw] m-auto'>
        <ThreeCardSection />
      </div>

      {success &&
        <RestaurantMenu descriptions='Cooking with love' main_heading='Our Menu' menuItems={menuItems} tabs={["all", "food", "drink"]} />}
      <ContactForm nameText={'name'} emailText={'email'} subjectText={'subject'} messageText={'message'} buttonText={'Submit'} actionUrl={''} />
      <div className='bg-primary-color'></div>
    </div>
  );
}

export default App;
