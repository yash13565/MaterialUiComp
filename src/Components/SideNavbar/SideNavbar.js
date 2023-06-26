import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import './SideNavbar.css'
export default function SideNavbar() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [hoveredItem, setHoveredItem] = useState('');
  const [search, setSearch] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dataList = ['Inbox', 'Starred', 'Send email', 'Drafts', 'All mail', 'Trash', 'Spam'];

  return (
    <div className={open ? 'open' : 'closed'}>
      <div className="drawer">
        {open ? (
          <>
            <div className="iconbtn" onClick={handleDrawerClose}>
            <MenuIcon  />
            </div>
            <div className="searchbar">
              <input
                className="searchfield"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </>
        ) : (
          <div className="iconbtn" onClick={handleDrawerOpen}>
             <MenuIcon  />
          </div>
        )}

        <ul className="listContainer">
          {dataList
            .filter((text) => text.toLowerCase().includes(search.toLowerCase()))
            .map((text, index) => (
              <ListItem
                key={text}
                className={`listItem ${activeItem === text ? 'active' : ''}`}
                onMouseEnter={() => setHoveredItem(text)}
                onMouseLeave={() => setHoveredItem('')}
                onClick={() => setActiveItem(text)}
              >
                <ListItemIcon className="listItemIcon">
                   {index % 2 === 0 ? <InboxIcon sx={{color:'#f5f5f5'}} /> : <MailIcon sx={{color:'#f5f5f5'}}/>}
                </ListItemIcon>
                <ListItemText className="listItemText">{text}</ListItemText>
              </ListItem>
            ))}
        </ul>
      </div>
    </div>
  );
}




