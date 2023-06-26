import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './SellerArcade.css'
function SellerArcade() {
  return (
    <div className='parcont'>
      <div className='firstcont'>
        <div className='imgcont'>
      <img width='100%' height='40%' src='https://cdn-icons-png.flaticon.com/512/197/197722.png'alt='buildimg.jpeg'/>
      </div>
      <div className='seller'>
        <div className='sell'>
      <p>Sell arcade residency </p>
       <p className='tags'>Tags</p> 
       </div>
       <div className='price'>
       <p>Opportunity • <sub><CurrencyRupeeIcon style={{fontSize:'1.2rem'}}/></sub>12,00,00,000</p>
       </div>
       </div>
     
      </div>
    
      <div className='secondcont'>
        <div>
            <p>Account name</p>
            <p>Google</p>
        </div>
        <h3>|</h3>
        <div className='dates'>
            <p>Expected closing date</p>
            <p>30 april,22</p>
        </div>
      </div>
    </div>
  )
}

export default SellerArcade
