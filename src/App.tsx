import React, { useState } from 'react';
import './App.css';
import SinglePricingItem from './lib/components/building-blocks/singlePricingItem'
import ContactForm from './lib/components/sections/contactForm'
function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className={`${darkMode ? "dark" : "light"} App"`}>
      <button className='z-[10000] p-10 bg-primary-color text-white' onClick={() => {
        setDarkMode(!darkMode);
      }}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      <SinglePricingItem
        item_name={'Hamburger'}
        item_price={'2.5'}
        item_slug={''}
        featured_image={''}
      />
      <ContactForm nameText={'name'} emailText={'email'} subjectText={'subject'} messageText={'message'} buttonText={'Submit'} />

    </div>
  );
}

export default App;
