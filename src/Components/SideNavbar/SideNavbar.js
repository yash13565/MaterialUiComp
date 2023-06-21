import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import  './SideNavbar.css'

const closedMixin = (theme) => ({
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
    
  },
  
});

const Drawer = styled(MuiDrawer)(
  ({ theme, open }) => ({
    
    whiteSpace: 'nowrap',
    ...(open && {
      overflowX: 'hidden',
  
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        overflowX: 'hidden',
        width: closedMixin(theme).width,
        backgroundColor: '#1F305E',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    }),
  }),
);
const ListContainer = styled(List)(
  () => ({
    overflow: 'hidden',
    height: '100%',

  }),
);
const ListItemButtonStyled = styled(ListItemButton)(
  ({ isActive }) => ({
    backgroundColor: isActive ? '#87CEEB' : 'transparent',
    '&:hover': {
      backgroundColor: !isActive && '#B9D9EB',
    },
  }),
);
export default function SideNavbar() {
  const [open, setOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState('');
  const [hoveredItem, setHoveredItem] = React.useState('');
  const [search,setSearch] = React.useState('')
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const dataList =  ['Inbox', 'Starred', 'Send email', 'Drafts', 'All mail', 'Trash', 'Spam']
  return (
    <Box className='boxs' >
      <Drawer className='mydraw' variant="permanent" open={open}>
        {open ? (
          <>
          <div className='iconbtn' onClick={handleDrawerClose} >
            <MenuIcon  />
          </div>
          <div style={{backgroundColor:'#1F305E'}}>
            <input className='searchfield' placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
            </div>
          </>
        ) : (
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className='divert'
            edge="start"
            sx={{
              margin: 0,
              ...(open && { display: 'none',}),
            }}
          >
            <MenuIcon sx={{ color: '#f5f5f5', }} />
          </IconButton>
        )}
        <ListContainer open={open} className='hii' sx={{ backgroundColor: '#1F305E', color: '#F5F5F5' }}>
          {dataList.filter((text) => text.toLowerCase().includes(search.toLowerCase())).map((text, index) => (
            <ListItem  key={text} disablePadding>
              <ListItemButtonStyled
                isActive={activeItem === text}
                onMouseEnter={() => setHoveredItem(text)}
                onMouseLeave={() => setHoveredItem('')}
                onClick={() => setActiveItem(text)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                className={hoveredItem === text || activeItem === text ? 'active' : ''}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: '#F5F5F5'
                  }}
                  className='hello4'
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText className='lihht' primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButtonStyled>
            </ListItem>
          ))}
        </ListContainer>
      </Drawer>
    </Box>
  );
}
