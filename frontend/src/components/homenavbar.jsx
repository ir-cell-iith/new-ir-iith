import React from 'react';
import './styles/navbarStyle.css'; // Assuming you have a CSS file for styling
import './../App.css';
import ircellLogo from "./icons/ircellLogo.png";
import iithlogo from "./icons/iithlogo.png";
import notificationicon from "./icons/notificationicon.png";
import { isMobile } from 'react-device-detect';
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

import { Button } from '@chakra-ui/react'


const NavBar = () => {
  //Apparaently using ismobile is waste because this navbar is not visible in mobile view
  let homescroller = isMobile ? "0" : "0";
  const handleHoverOpen = (e) => {
    const triggerButton = e.currentTarget;
    const parentMenu = triggerButton.closest('.chakra-menu');
    
    // 1. Instantly find and close ANY other menu lists currently left open on the screen
    document.querySelectorAll('.chakra-menu__menu-button[aria-expanded="true"]').forEach((openButton) => {
      if (openButton !== triggerButton) {
        // We use HTMLElement.click to cleanly shut it down natively
          openButton.click();
      }
    });
    // 2. Open our current targeted dropdown
    if (triggerButton.getAttribute('aria-expanded') === 'false') {
        triggerButton.click();
    }
  };
  const handleClearMenus = () => {
    document.querySelectorAll('.chakra-menu__menu-button[aria-expanded="true"]').forEach((openButton) => {
      openButton.click();
    });
  };

  // 3. Main wrapper exit engine
  const handleNavbarMouseLeave = () => {
    handleClearMenus();
  };

  
  const handleHomeScroll = (e) => handleHoverOpen(e);
  const handleabtScroll = (e) => handleHoverOpen(e);
  const handlepartScroll = (e) => handleHoverOpen(e);
  const handleadmScroll = (e) => handleHoverOpen(e);

  const handleJicaHover = () => handleClearMenus();
  const handleNewsHover = () => handleClearMenus();
  const handleGalleryHover = () => handleClearMenus();
  const handleContHover = () => handleClearMenus();
  let contscroller = isMobile ? "750" : "4300";
    const handleContScroll = () => {
        window.scrollTo({
            top: contscroller,
            behavior: "smooth",
        });
    };
   const navigate = useNavigate();
    
  return (
    <nav className="navbar" style={{position:"sticky"}} onMouseLeave={handleNavbarMouseLeave}>
      <div className="navbar-logo">
        <img src={iithlogo} style={{width:"10vw", height:"auto"}} alt="International Relations Cell Logo" />
        
      </div>
      <ul className="navbar-links">
      
        <Menu>
          <MenuButton as={Button} onMouseOver={handleHomeScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Home
          </MenuButton>
          <MenuList className='menulist'>
              <MenuItem className='menuitem'><a href="/">Return to Home</a></MenuItem>
          </MenuList>
        </Menu>
        
        <Menu>
          <MenuButton as={Button} onMouseOver={handleabtScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            About Us
          </MenuButton>
          <MenuList className='menulist'>
            <MenuItem className='menuitem'><a href="/team">IR Cell & Team</a></MenuItem>
            <MenuItem className='menuitem'><a href="/lifeatiith">Life at IITH</a></MenuItem>
            <MenuItem className='menuitem'><a href="/downloads">Downloads</a></MenuItem>
            <MenuItem className='menuitem'><a href="/opportunity">Opportunities</a></MenuItem>
            <MenuItem className='menuitem'><a href="/collab">International <br></br>Collaboration <br></br>& Mobility</a></MenuItem>
          </MenuList>
        </Menu>
        
        <Menu>
          <MenuButton as={Button} onMouseOver={handleJicaHover} onClick={() => window.open("https://japandesk.iith.ac.in/", "_blank", "noopener,noreferrer")}  style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            JICA
          </MenuButton>
          
        </Menu>

        <Menu>
          <MenuButton as={Button} onMouseOver={handlepartScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Partners
          </MenuButton>
          <MenuList className='menulist'>
            <MenuItem className='menuitem'><a href="/Partners">Our Partners</a></MenuItem>
            <MenuItem className='menuitem'><a href="/visitors">Visitors</a></MenuItem>
            <MenuItem className='menuitem'><a href="https://ir-cell-iith.github.io/deakin-university/">IITH-Deaken University</a></MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} onMouseOver={handleadmScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Admissions
          </MenuButton>
          <MenuList className='menulist'>
            <MenuItem className='menuitem'><a href="/intadm">International Admission</a></MenuItem>
            <MenuItem className='menuitem'><a href="/visa">Visa & Immigration</a></MenuItem>
          </MenuList>
        </Menu>
             
          <Menu>
                   <MenuButton as={Button}  onMouseOver={handleNewsHover}  onClick={() => navigate("/news")}  style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>                   
                   News
                   </MenuButton>
                     <MenuList className='menulist'>
                     <MenuItem className='menuitem'><a href="/news"> News</a></MenuItem>
                      </MenuList>
            </Menu>
           
        <Menu>
          <MenuButton as={Button} onMouseOver={handleContHover} onClick={handleContScroll} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Contacts
          </MenuButton>
        </Menu>
        
        <Menu>
          <MenuButton as={Button} onMouseOver={handleGalleryHover} onClick={() => navigate("/gallery")} style={{backgroundColor:"transparent"}} _hover={{ color: '#F73A48' }} _expanded={{ color: '#F73A48' }}>
            Gallery
          </MenuButton>
          <MenuList className='menulist'>
                     <MenuItem className='menuitem'><a href="/gallery"> Gallery</a></MenuItem>
                      </MenuList>
        </Menu>
         
        </ul>
       <div className="navbar-notification">
        <img src={notificationicon}  style={{width:"46px", height:"42px"}} alt="Notifications" />
        
      </div>
    </nav>
  );
};

export default NavBar;
