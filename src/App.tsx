import  Navbar  from '@/scenes/Navbar';
import { useState, useEffect } from 'react';
import { SelectedPage } from './shared/type';
import { Home } from './scenes/Home';
import { Benefits } from './scenes/Benefits';
import { OurClasses } from './scenes/OurClasses';
import { ContactUs } from './scenes/ContactUs';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
 
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app">
        <Navbar 
        selectedPage={selectedPage} setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
        /> 
        < Home setSelectedPage={setSelectedPage} />
        {/* <Benefits /> */}
        {/* <OurClasses /> */}
        {/* <ContactUs />  */}
      </div>
      
    </>
  )
}

export default App
