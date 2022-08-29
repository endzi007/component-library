import React, { useState } from 'react';
import './App.css';
import { ContactForm, HeroSectionFull, RestaurantMenu, ThreeCardSection } from './lib/components/sections'
import { menuItems } from './lib/components/sections/restaurantMenu';
import { useFetchData } from "./lib/hooks/useFetchData";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { data, isDone } = useFetchData<menuItems[]>("https://63021964c6dda4f287b2c715.mockapi.io/pricingItems")
  return (
    <div className={`${darkMode ? "dark" : "light"} App"`}>
      <button className='z-[10000] p-10 bg-primary-color text-white' onClick={() => {
        setDarkMode(!darkMode);
      }}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      <HeroSectionFull bg_image='https://images.pexels.com/photos/616401/pexels-photo-616401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
      <div className='mt-[200px] w-[80vw] m-auto'>
        <ThreeCardSection />
      </div>

      {isDone &&
        <RestaurantMenu descriptions='Cooking with love' main_heading='Our Menu' menuItems={data!} tabs={["Hrana", "Piće"]} />}

      <ContactForm nameText={'name'} emailText={'email'} subjectText={'subject'} messageText={'message'} buttonText={'Submit'} actionUrl={''} />
      <div className='bg-primary-color'></div>
    </div>
  );
}

export default App;
