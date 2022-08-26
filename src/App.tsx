import React, { useState } from 'react';
import './App.css';
import ContactForm from './lib/components/sections/contactForm'
import RestaurantMenu from './lib/components/sections/RestaurantMenu/restaurantMenu'
function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className={`${darkMode ? "dark" : "light"} App"`}>
      <button className='z-[10000] p-10 bg-primary-color text-white' onClick={() => {
        setDarkMode(!darkMode);
      }}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      <RestaurantMenu descriptions='Tasty and Delicious' main_heading='OUR MENU' />
      <ContactForm nameText={'name'} emailText={'email'} subjectText={'subject'} messageText={'message'} buttonText={'Submit'} />
      <div className='bg-primary-color'></div>

    </div>
  );
}

export default App;
