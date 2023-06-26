import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import './Notes.css'
function Notes() {
    const [details,setDetails] = useState("")
    console.log(details)
  return (
    <div className='notescont'>
        
     <p>Notes</p>
   <div className='cmtcont'>
     <textarea className='comment' rows={10} cols={55} onChange={e=>setDetails(e.target.value)}></textarea>
     <button className='cmtbtn'>Post Comment<sub><AddIcon style={{color:'black',fontSize:'1rem'}}/></sub></button>
     </div>
    </div>
  )
}

export default Notes
