import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './TopIcons.css'
function TopIcons() {
  return (
    <div className='iconcont'>
     <p> <ArrowBackIcon/></p>
     <p > <sub><CheckCircleIcon style={{fontSize:'1.2rem',color:'green'}}/> </sub>Mark Converted </p>
     <p><sub><DeleteIcon style={{fontSize:'1.2rem',color:'red'}}/></sub>Delete</p>
     <div className='midicon'>
     <p >|</p>
     <p><sub><FormatListBulletedIcon style={{fontSize:'1.2rem'}}/></sub> Create Activity</p>
     </div>
    
     <div className='socialicons'>
     <p>|</p>
     <p><sub><WhatsAppIcon style={{fontSize:'1.2rem'}}/></sub> </p>
     <p><sub><MailOutlineIcon style={{fontSize:'1.2rem'}}/></sub></p>
     <p><sub><AddIcCallIcon style={{fontSize:'1.2rem'}}/></sub> </p>
     <p><sub><LocalOfferIcon style={{fontSize:'1.2rem'}}/></sub> </p>
     <p><sub><MoreVertIcon style={{fontSize:'1.2rem'}}/></sub> </p>
     </div>
    </div>
  )
}

export default TopIcons
